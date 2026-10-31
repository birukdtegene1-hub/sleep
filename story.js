/* Lull's optional scroll story. All chapters remain readable without this file. */
(() => {
  'use strict';
  const root = document.getElementById('nightStory');
  if (!root) return;
  const steps = Array.from(root.querySelectorAll('.story-step'));
  const links = Array.from(root.querySelectorAll('.story-chapter-nav a'));
  const instrument = document.getElementById('nightInstrument');
  const number = document.getElementById('storyChapterNumber');
  const metric = document.getElementById('storyMetric');
  const metricLabel = document.getElementById('storyMetricLabel');
  const caption = document.getElementById('storyVisualCaption');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const shortViewport = window.matchMedia('(max-height: 599px)');
  const narrowViewport = window.matchMedia('(max-width: 700px)');
  const labels = ['Time to settle', 'One cycle', 'Your sleep window', 'Meet the morning'];
  const captions = ['Leave the day at the door.', 'A rhythm, one return at a time.', 'Small cycles. A whole night.', 'A little space for what comes next.'];
  let active = 0;
  let plan = null;
  let visible = false;
  let enabled = false;
  let frame = null;

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
  function setChapter(index) {
    active = index;
    instrument.dataset.chapter = String(index);
    number.textContent = String(index + 1).padStart(2, '0');
    steps.forEach((step, i) => step.classList.toggle('is-current', i === index));
    links.forEach((link, i) => {
      if (i === index) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
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

  // Read geometry together, then apply transforms. No wheel/touch interception or animation loop.
  function update() {
    frame = null;
    if (!enabled || !visible) return;
    const height = window.innerHeight;
    const focus = height * (narrowViewport.matches ? 0.72 : 0.5);
    const rects = steps.map(step => step.getBoundingClientRect());
    const centers = rects.map(rect => rect.top + rect.height / 2);
    let nearest = 0;
    centers.forEach((center, i) => {
      if (Math.abs(center - focus) < Math.abs(centers[nearest] - focus)) nearest = i;
    });
    const span = centers[centers.length - 1] - centers[0];
    const progress = span > 0 ? clamp((focus - centers[0]) / span) : 0;
    root.style.setProperty('--story-progress', progress.toFixed(4));
    root.style.setProperty('--story-angle', `${(-36 + progress * 252).toFixed(2)}deg`);
    if (nearest !== active) setChapter(nearest);
  }
  function schedule() {
    if (enabled && visible && frame === null) frame = window.requestAnimationFrame(update);
  }
  function configure() {
    enabled = !reducedMotion.matches && !shortViewport.matches;
    root.classList.toggle('is-enhanced', enabled);
    if (frame !== null) { window.cancelAnimationFrame(frame); frame = null; }
    if (enabled) schedule();
    else {
      root.style.removeProperty('--story-progress');
      root.style.removeProperty('--story-angle');
      setChapter(0);
    }
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
    setChapter(index);
    steps[index].scrollIntoView({ behavior: enabled ? 'smooth' : 'instant', block: narrowViewport.matches ? 'start' : 'center' });
    steps[index].focus({ preventScroll: true });
  }));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) schedule();
    }, { rootMargin: '100px 0px' });
    observer.observe(root);
  } else visible = true;
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('pageshow', schedule);
  reducedMotion.addEventListener('change', configure);
  shortViewport.addEventListener('change', configure);
  narrowViewport.addEventListener('change', schedule);
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(root);
  document.fonts?.ready.then(schedule);
  window.LullStory = { setPlan };
  try {
    const saved = document.getElementById('dialSection').dataset.plan;
    setPlan(saved ? JSON.parse(saved) : null);
  } catch (_) { setPlan(null); }
  configure();
})();
