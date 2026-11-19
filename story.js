/* Lull's optional scroll story. All chapters remain readable without this file. */
(() => {
  'use strict';
  const root = document.getElementById('nightStory');
  if (!root) return;
  const stage = document.getElementById('morphHeroStage');
  const frame1 = document.getElementById('morphFrame1');
  const frame2 = document.getElementById('morphFrame2');
  const f1Words = frame1 ? Array.from(frame1.querySelectorAll('.morph-word')) : [];
  const f2Words = frame2 ? Array.from(frame2.querySelectorAll('.morph-word')) : [];
  const f1Card = frame1 ? frame1.querySelector('.morph-action-card') : null;
  const f1Eyebrow = frame1 ? frame1.querySelector('.morph-eyebrow') : null;
  const f2Card = frame2 ? frame2.querySelector('.morph-action-card') : null;
  const f2Eyebrow = frame2 ? frame2.querySelector('.morph-eyebrow') : null;
  const hintText = document.getElementById('morphHintText');
  const scrollHint = document.getElementById('morphScrollHint');
  const skyBackground = document.getElementById('skyBackground');
  const moonLitPath = document.getElementById('moonLitPath');
  const moonOrb = document.getElementById('moonOrb');
  const moonLayer = document.getElementById('moonLayer');
  const moonAnnouncement = document.getElementById('moonAnnouncement');
  const steps = Array.from(root.querySelectorAll('.story-step'));
  const links = Array.from(root.querySelectorAll('.story-chapter-nav a'));
  const instrument = document.getElementById('nightInstrument');
  const number = document.getElementById('storyChapterNumber');
  const metric = document.getElementById('storyMetric');
  const metricLabel = document.getElementById('storyMetricLabel');
  const caption = document.getElementById('storyVisualCaption');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const shortViewport = window.matchMedia('(max-height: 599px)');
  const narrowViewport = window.matchMedia('(max-width: 900px)');
  const labels = ['Time to settle', 'One cycle', 'Your sleep window', 'Meet the morning'];
  const captions = ['Leave the day at the door.', 'A rhythm, one return at a time.', 'Small cycles. A whole night.', 'A little space for what comes next.'];
  const phases = ['settle', 'rhythm', 'space', 'morning'];
  const chapterMoonPhases = [0.20, 0.35, 0.50, 0.65];
  let active = 0;
  let plan = null;
  let enabled = false;
  let frame = null;
  let moonFrame = null;
  let moonPhase = null;
  let moonTarget = 0.12;
  let moonTime = null;
  let doze = null;
  let dozeTimer = null;
  let renderedPhase = 0.12;

  function finishDoze() {
    if (!doze) return;
    doze = null;
    window.clearTimeout(dozeTimer);
    moonLayer.classList.remove('is-dozing', 'is-grumpy');
    moonOrb.setAttribute('aria-label', 'Wake the moon');
    moonPhase = renderedPhase;
    targetMoon(moonTarget, reducedMotion.matches);
  }

  function pokeMoon() {
    if (!moonLayer) return;
    if (doze) {
      moonLayer.classList.add('is-grumpy');
      moonAnnouncement.textContent = 'The moon gives you a sleepy squint.';
      return;
    }
    doze = { start: performance.now() };
    moonLayer.classList.add('is-dozing');
    moonOrb.setAttribute('aria-label', 'Poke the moon again');
    moonAnnouncement.textContent = 'The moon wakes up, yawns, and falls asleep again.';
    dozeTimer = window.setTimeout(finishDoze, reducedMotion.matches ? 1600 : 3400);
    if (!reducedMotion.matches && moonFrame === null) {
      moonTime = performance.now();
      moonFrame = window.requestAnimationFrame(animateMoon);
    }
  }

  function getMoonD(phase, cx = 40, cy = 40, r = 36) {
    phase = ((phase % 1) + 1) % 1;
    // Project the terminator of a sphere, easing naturally through full moon.
    const k = -Math.cos(phase * Math.PI * 2);
    if (phase <= 0.5) {
      const rx = r * Math.abs(k);
      const sweep = k >= 0 ? 1 : 0;
      return `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${rx.toFixed(2)} ${r} 0 0 ${sweep} ${cx} ${cy - r} Z`;
    } else {
      const rx = r * Math.abs(k);
      const sweep = k >= 0 ? 0 : 1;
      return `M ${cx} ${cy - r} A ${r} ${r} 0 0 0 ${cx} ${cy + r} A ${rx.toFixed(2)} ${r} 0 0 ${sweep} ${cx} ${cy - r} Z`;
    }
  }

  function updateMoonPhase(phase) {
    renderedPhase = phase;
    if (moonLitPath) {
      moonLitPath.setAttribute('d', getMoonD(phase));
    }
    if (moonOrb) {
      const illumination = (1 - Math.cos(phase * Math.PI * 2)) / 2;
      const blur = (7 + illumination * 5).toFixed(1);
      const opacity = (0.12 + illumination * 0.12).toFixed(2);
      moonOrb.style.filter = `drop-shadow(0 0 ${blur}px rgba(253, 251, 211, ${opacity}))`;
    }
  }

  function animateMoon(timestamp) {
    moonFrame = null;
    const elapsed = Math.min(64, Math.max(0, timestamp - moonTime));
    moonTime = timestamp;
    // Time-based damping feels the same at different display refresh rates.
    moonPhase += (moonTarget - moonPhase) * (1 - Math.exp(-elapsed / 140));
    if (doze) {
      const elapsedDoze = Math.max(0, timestamp - doze.start);
      const fadeIn = clamp(elapsedDoze / 500);
      const fadeOut = clamp((3400 - elapsedDoze) / 650);
      const blend = Math.min(fadeIn, fadeOut);
      const ease = blend * blend * (3 - 2 * blend);
      // Keep tracking scroll underneath the face; no phase jump on waking.
      updateMoonPhase(moonPhase + (0.5 - moonPhase) * ease);
      if (elapsedDoze >= 3400) finishDoze();
      else moonFrame = window.requestAnimationFrame(animateMoon);
      return;
    }
    if (Math.abs(moonTarget - moonPhase) < 0.00001) {
      moonPhase = moonTarget;
      moonTime = null;
    } else {
      moonFrame = window.requestAnimationFrame(animateMoon);
    }
    updateMoonPhase(moonPhase);
  }

  function targetMoon(phase, immediate = false) {
    moonTarget = phase;
    if (doze) return;
    if (immediate || reducedMotion.matches || moonPhase === null) {
      if (moonFrame !== null) window.cancelAnimationFrame(moonFrame);
      moonFrame = null;
      moonTime = null;
      moonPhase = phase;
      updateMoonPhase(phase);
    } else if (moonFrame === null && Math.abs(moonTarget - moonPhase) >= 0.00001) {
      moonTime = performance.now();
      moonFrame = window.requestAnimationFrame(animateMoon);
    }
  }

  const clamp = n => Math.max(0, Math.min(1, n));
  const time = timestamp => {
    const date = new Date(timestamp);
    const hour = date.getHours();
    return `${hour % 12 || 12}:${String(date.getMinutes()).padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
  };
  function setText(selector, value) {
    root.querySelectorAll(selector).forEach(el => { el.textContent = value; });
  }
  function renderMetric() {
    const values = plan ? [
      plan.mode === 'nap' ? '0 min' : `${plan.buffer} min`,
      `${plan.cycleLength} min`,
      plan.duration,
      time(plan.end)
    ] : ['—', '—', '—', '—'];
    const value = values[active];
    const match = value.match(/^(.*?)\s+(min|hr|AM|PM)$/);
    metric.replaceChildren(document.createTextNode(match ? `${match[1]} ` : value));
    if (match) {
      const small = document.createElement('small');
      small.textContent = match[2];
      metric.appendChild(small);
    }
    metricLabel.textContent = plan?.mode === 'nap' && active === 0 ? 'Nap buffer' : active === 3 && plan?.mode === 'nap' ? 'Your nap ends' : labels[active];
    caption.textContent = active === 2 && plan?.mode === 'nap' ? 'A little pause in your day.' : captions[active];
  }
  function setChapter(index, syncMoon = true) {
    active = index;
    instrument.dataset.chapter = String(index);
    number.textContent = String(index + 1).padStart(2, '0');
    steps.forEach((step, i) => step.classList.toggle('is-current', i === index));
    links.forEach((link, i) => {
      if (i === index) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    if (skyBackground) {
      skyBackground.dataset.phase = phases[index];
      skyBackground.dataset.chapter = String(index);
    }
    if (syncMoon) targetMoon(chapterMoonPhases[index] ?? 0.35);
    renderMetric();
  }
  function setPlan(next) {
    plan = next;
    setText('[data-story-buffer]', next ? `${next.mode === 'nap' ? 0 : next.buffer} min` : '—');
    setText('[data-story-buffer-label]', next?.mode === 'nap' ? 'added before your nap' : 'to fall asleep');
    setText('[data-story-buffer-note]', next?.mode === 'nap' ? 'Nap timing starts immediately.' : 'Adjustable in your planner');
    setText('[data-story-cycle]', next ? `${next.cycleLength} min` : '—');
    setText('[data-story-duration]', next ? `${next.duration} of rest` : 'Your window');
    setText('[data-story-window]', next ? `${time(next.start)} – ${time(next.end)} · ${next.label}` : 'Choose a time in the planner');
    setText('[data-story-wake]', next ? time(next.end) : '—');
    setText('[data-story-end-label]', next?.mode === 'nap' ? 'your nap ends' : 'your planned wake-up');
    const count = next && next.mode !== 'nap' ? Number.parseInt(next.label, 10) : 1;
    const segments = Number.isFinite(count) && count > 0 ? count : 1;
    const unit = 100 / segments;
    document.getElementById('storyCycleRing').setAttribute('stroke-dasharray', `${Math.max(1, unit - 2)} 2`);
    renderMetric();
  }

  // Read geometry on scroll; the separate moon loop only runs until it settles.
  function update() {
    frame = null;
    if (reducedMotion.matches || narrowViewport.matches) return;
    const height = window.innerHeight;
    const focus = height * (narrowViewport.matches ? 0.72 : 0.5);
    const storyRect = root.getBoundingClientRect();
    const rects = steps.map(step => step.getBoundingClientRect());
    const centers = rects.map(rect => rect.top + rect.height / 2);
    const span = centers[centers.length - 1] - centers[0];
    const progress = span > 0 ? clamp((focus - centers[0]) / span) : 0;
    let nearest = 0;
    centers.forEach((center, i) => {
      if (Math.abs(center - focus) < Math.abs(centers[nearest] - focus)) nearest = i;
    });
    if (nearest !== active) setChapter(nearest, false);

    // Hold the final waning phase into the planner, so boundaries never reset it.
    let nextMoonPhase = 0.20 + progress * 0.45;
    if (storyRect.top > focus) {
      const topDist = Math.max(0, storyRect.top - focus);
      const factor = clamp(1 - topDist / (height * 0.8));
      nextMoonPhase = 0.12 + factor * 0.08;
      if (skyBackground && skyBackground.dataset.phase !== 'intro') skyBackground.dataset.phase = 'intro';
    } else if (storyRect.bottom < focus * 0.4) {
      if (skyBackground && skyBackground.dataset.phase !== 'planner') skyBackground.dataset.phase = 'planner';
    }

    targetMoon(nextMoonPhase);

    if (enabled) {
      root.style.setProperty('--story-progress', progress.toFixed(4));
      root.style.setProperty('--story-angle', `${(-36 + progress * 252).toFixed(2)}deg`);

      // ── Unified Single-Page Smooth Word Scrollytelling ──
      if (stage) {
        const stageRect = stage.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollable = Math.max(1, stageRect.height - viewportHeight);
        const scrolledInStage = Math.max(0, window.scrollY);
        const stageProgress = clamp(scrolledInStage / scrollable);

        const easeOut = t => t * (2 - t);
        const easeIn = t => t * t;

        // ── Frame 1: Personal Sleep Planner Intro ──
        if (frame1) {
          frame1.style.opacity = '1';
          frame1.style.transform = 'none';
          frame1.style.pointerEvents = stageProgress >= 0.04 && stageProgress <= 0.44 ? 'auto' : 'none';

          // Frame 1 Eyebrow & Action Card: fade in quickly, stay, then dissolve
          let f1AuxOp = 1;
          let f1AuxY = 0;
          if (stageProgress < 0.08) {
            const p = easeOut(stageProgress / 0.08);
            f1AuxOp = 0.35 + 0.65 * p;
            f1AuxY = (1 - p) * 10;
          } else if (stageProgress > 0.40) {
            const p = easeIn(clamp((stageProgress - 0.40) / 0.16));
            f1AuxOp = 1 - p;
            f1AuxY = -p * 18;
          }
          if (f1Eyebrow) {
            f1Eyebrow.style.opacity = f1AuxOp.toFixed(3);
            f1Eyebrow.style.transform = `translate3d(0,${f1AuxY.toFixed(1)}px,0)`;
          }
          if (f1Card) {
            f1Card.style.opacity = f1AuxOp.toFixed(3);
            f1Card.style.transform = `translate3d(0,${f1AuxY.toFixed(1)}px,0)`;
          }

          // Frame 1 Word Animations (6 words: A little rhythm. / A better rest.)
          f1Words.forEach((wordEl, i) => {
            let wOp = 1;
            let wY = 0;
            if (stageProgress < 0.18) {
              const enterStart = i * 0.022;
              const enterEnd = enterStart + 0.055;
              if (stageProgress <= enterStart) {
                wOp = 0;
                wY = 14;
              } else if (stageProgress >= enterEnd) {
                wOp = 1;
                wY = 0;
              } else {
                const p = easeOut((stageProgress - enterStart) / 0.055);
                wOp = p;
                wY = (1 - p) * 14;
              }
            } else if (stageProgress > 0.40) {
              const exitStart = 0.40 + i * 0.022;
              const exitEnd = exitStart + 0.055;
              if (stageProgress <= exitStart) {
                wOp = 1;
                wY = 0;
              } else if (stageProgress >= exitEnd) {
                wOp = 0;
                wY = -16;
              } else {
                const p = easeIn((stageProgress - exitStart) / 0.055);
                wOp = 1 - p;
                wY = -p * 16;
              }
            }
            wordEl.style.opacity = wOp.toFixed(3);
            wordEl.style.transform = `translate3d(0,${wY.toFixed(1)}px,0)`;
          });
        }

        // ── Frame 2: An Evening in Four Movements Prologue ──
        if (frame2) {
          frame2.style.opacity = '1';
          frame2.style.transform = 'none';
          frame2.style.pointerEvents = stageProgress >= 0.65 && stageProgress <= 0.92 ? 'auto' : 'none';

          // Frame 2 Eyebrow & Action Card
          let f2AuxOp = 0;
          let f2AuxY = 18;
          if (stageProgress >= 0.54 && stageProgress < 0.72) {
            const p = easeOut((stageProgress - 0.54) / 0.18);
            f2AuxOp = p;
            f2AuxY = (1 - p) * 18;
          } else if (stageProgress >= 0.72 && stageProgress <= 0.90) {
            f2AuxOp = 1;
            f2AuxY = 0;
          } else if (stageProgress > 0.90) {
            const p = easeIn((stageProgress - 0.90) / 0.10);
            f2AuxOp = 1 - p * 0.6;
            f2AuxY = -p * 14;
          }
          if (f2Eyebrow) {
            f2Eyebrow.style.opacity = f2AuxOp.toFixed(3);
            f2Eyebrow.style.transform = `translate3d(0,${f2AuxY.toFixed(1)}px,0)`;
          }
          if (f2Card) {
            f2Card.style.opacity = f2AuxOp.toFixed(3);
            f2Card.style.transform = `translate3d(0,${f2AuxY.toFixed(1)}px,0)`;
          }

          // Frame 2 Word Animations (6 words: The space between / today & tomorrow.)
          f2Words.forEach((wordEl, i) => {
            let wOp = 0;
            let wY = 14;
            if (stageProgress < 0.54) {
              wOp = 0;
              wY = 14;
            } else if (stageProgress >= 0.54 && stageProgress < 0.76) {
              const enterStart = 0.54 + i * 0.022;
              const enterEnd = enterStart + 0.055;
              if (stageProgress <= enterStart) {
                wOp = 0;
                wY = 14;
              } else if (stageProgress >= enterEnd) {
                wOp = 1;
                wY = 0;
              } else {
                const p = easeOut((stageProgress - enterStart) / 0.055);
                wOp = p;
                wY = (1 - p) * 14;
              }
            } else if (stageProgress >= 0.76 && stageProgress <= 0.90) {
              wOp = 1;
              wY = 0;
            } else if (stageProgress > 0.90) {
              const p = easeIn((stageProgress - 0.90) / 0.10);
              wOp = 1 - p * 0.6;
              wY = -p * 14;
            }
            wordEl.style.opacity = wOp.toFixed(3);
            wordEl.style.transform = `translate3d(0,${wY.toFixed(1)}px,0)`;
          });
        }

        // Hint cue
        if (hintText) {
          hintText.textContent = stageProgress < 0.65 ? 'Scroll to explore' : 'Begin Movement 01';
        }
        if (scrollHint) {
          scrollHint.style.opacity = stageProgress > 0.90 ? clamp((1 - stageProgress) / 0.10).toFixed(2) : '0.8';
        }

        // Lunar waxing during morph
        const morphMoon = 0.12 + stageProgress * 0.08;
        targetMoon(morphMoon);
      }
    }
    if (skyBackground) {
      skyBackground.style.setProperty('--story-progress', progress.toFixed(4));
      if (storyRect.top <= focus && storyRect.bottom >= focus * 0.4) {
        const targetPhase = phases[nearest] || 'settle';
        if (skyBackground.dataset.phase !== targetPhase) skyBackground.dataset.phase = targetPhase;
      }
    }
  }
  function schedule() {
    if (!reducedMotion.matches && !narrowViewport.matches && frame === null) frame = window.requestAnimationFrame(update);
  }
  function configure() {
    if (doze) finishDoze();
    enabled = !reducedMotion.matches && !shortViewport.matches && !narrowViewport.matches;
    root.classList.toggle('is-enhanced', enabled);
    if (stage) stage.classList.toggle('is-enhanced', enabled);
    if (moonOrb) moonOrb.disabled = narrowViewport.matches;
    if (frame !== null) { window.cancelAnimationFrame(frame); frame = null; }
    if (!enabled) {
      setChapter(0, false);
      root.style.removeProperty('--story-progress');
      root.style.removeProperty('--story-angle');
      if (frame1) {
        frame1.style.opacity = '1';
        frame1.style.transform = 'none';
        frame1.style.pointerEvents = 'auto';
      }
      if (frame2) {
        frame2.style.opacity = '0';
        frame2.style.transform = 'none';
        frame2.style.pointerEvents = 'none';
      }
      if (f1Eyebrow) { f1Eyebrow.style.opacity = '1'; f1Eyebrow.style.transform = 'none'; }
      if (f1Card) { f1Card.style.opacity = '1'; f1Card.style.transform = 'none'; }
      if (f2Eyebrow) { f2Eyebrow.style.opacity = ''; f2Eyebrow.style.transform = ''; }
      if (f2Card) { f2Card.style.opacity = ''; f2Card.style.transform = ''; }
      f1Words.forEach(w => { w.style.opacity = '1'; w.style.transform = 'none'; });
      f2Words.forEach(w => { w.style.opacity = ''; w.style.transform = ''; });
      if (skyBackground) {
        skyBackground.style.removeProperty('--story-progress');
        skyBackground.dataset.phase = narrowViewport.matches ? 'planner' : 'space';
      }
    }
    if (narrowViewport.matches) targetMoon(0.35, true);
    else if (reducedMotion.matches) targetMoon(0.50, true);
    else schedule();
  }

  // The marks are a clock reference, not a representation of measured sleep stages.
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const angle = (i * 6 - 90) * Math.PI / 180;
    const inner = i % 5 === 0 ? 209 : 215;
    ticks.push(`<line class="${i % 5 === 0 ? 'major' : 'minor'}" x1="${260 + Math.cos(angle) * inner}" y1="${260 + Math.sin(angle) * inner}" x2="${260 + Math.cos(angle) * 220}" y2="${260 + Math.sin(angle) * 220}"/>`);
  }
  document.getElementById('storyTicks').innerHTML = ticks.join('');

  links.forEach((link, index) => link.addEventListener('click', event => {
    event.preventDefault();
    setChapter(index, reducedMotion.matches);
    steps[index].scrollIntoView({ behavior: enabled ? 'smooth' : 'instant', block: narrowViewport.matches ? 'start' : 'center' });
    steps[index].focus({ preventScroll: true });
  }));
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  moonOrb?.addEventListener('click', pokeMoon);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && doze) finishDoze();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && doze) finishDoze();
  });
  document.getElementById('themeToggle')?.addEventListener('click', finishDoze);
  window.addEventListener('pageshow', schedule);
  reducedMotion.addEventListener('change', configure);
  shortViewport.addEventListener('change', configure);
  narrowViewport.addEventListener('change', configure);
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(root);
  document.fonts?.ready.then(schedule);
  window.LullStory = { setPlan };
  try {
    const saved = document.getElementById('dialSection').dataset.plan;
    setPlan(saved ? JSON.parse(saved) : null);
  } catch (_) { setPlan(null); }
  configure();
})();
