# Lull UI direction

Based on the local Stark 0.7.2 web-design and ux-design skills. The user selected quiet editorial.

- **Job:** choose a bedtime, wake-up time, or nap; compare the available windows. A daily, reversible consumer task.
- **Flow:** choose mode → set time → inspect the selected window → choose another option or set a reminder. Empty time input provides an inline recovery path. Advanced timing is progressively disclosed.
- **Surface:** responsive web utility / mobile task flow. Keep the existing HTML, CSS and JavaScript, with no runtime dependencies.
- **Concept:** a bedside almanac. Paper, ink, small section numbers, a clock face and an orderly index of times. The clock visualizes the actual selected interval.
- **Composition:** masthead → editorial introduction → optional four-chapter scroll story → time controls beside selected window and clock → comparison rows → sound/breathing controls → sleep-cycle notes.
- **Typography:** locally hosted Noto Serif Display and Fira Sans subsets, renamed Lull Display and Lull Sans. Serif for time and editorial headings; sans for controls and explanations.
- **Palette:** warm paper, forest ink, muted green selection. The night theme uses the same family. Amber distinguishes REM data.
- **Restraints:** no starfield, scrolling marquee, glowing selections, decorative image assets or carousel-driven selection. Reuse the app's SVG icon system.
- **Motion:** one signature scroll story, short CSS control transitions, and an explicitly started breathing animation. Reduced motion makes the story static and keeps the breathing countdown without transforms or transitions.
- **States:** selected/unselected, invalid input, passed bedtime, reminder active/cancelled, unavailable audio, installed/installation guidance, breathing started/stopped, light/dark.
- **Accessibility:** semantic landmarks and native buttons; pressed state; visible focus; modal focus containment and restoration; labeled input validation; reduced motion; 44px primary controls.
- **Responsive intent:** split workspace on desktop, stacked task flow below 700px, comparison rows on all sizes, wrapped sound controls and fixed mobile section navigation.
- **Assets:** existing icons, original clock rendering, local font subsets with licenses. No third-party visual reference assets or generated imagery.

## Scrollytelling

Requested reference: [Sleep Well Creatives](https://sleep-well-creatives.com/). The reference's numbered chapters, repeated sleep imagery and progression into practical actions informed the narrative structure. Its copy, illustrations, brand identity and health claims are not reused. Reference review was text-based; its exact animation timing was not visually verified.

- **Story:** settle in → find a rhythm → make room for rest → meet the morning.
- **Layout:** a sticky clock illustration beside four scrolling chapters, followed by the working planner. On narrow screens the smaller clock stays above the chapter text.
- **Visual anchor:** concentric clock rings unfold, an orbit marker tracks reading progress, and the final chapter introduces a quiet horizon. Paper, green and restrained amber continue the existing palette.
- **Live context:** settling time, cycle length, sleep duration, interval and wake-up reflect the current planner selection, including naps and invalid input.
- **Implementation:** `story.js`, local SVG/CSS and passive scroll listeners, with one animation-frame callback per scroll update. No runtime library, scroll interception or perpetual animation loop. `story.js` is included in the offline app shell.
- **Access:** visible skip-to-planner links, keyboard-accessible chapter links, focus restoration on navigation, and readable content without story JavaScript. Reduced-motion and short-height viewports use a static layout. The graphic is hidden from assistive technology; equivalent values are in the chapter text.
- **Scope:** educational/product narrative remains separate from the stable, directly accessible planner controls.

## Minimalist planner and progressive disclosure

Refined the UX to avoid cognitive overload for new visitors while keeping all advanced features easily accessible:

- **Primary entry CTA:** The introductory "Open the planner" action is styled as a prominent, high-contrast primary button with direct anchor scrolling and focus management.
- **Minimalist first view:** The planner loads with only the essential inputs: planning mode selection (`Wake up`, `Sleep`, `Nap`), target time input, and one immediate suggested rest window.
- **Progressive disclosure:**
  - *Customize your plan (Optional):* Quick-select time chips, mood settings, sleep latency, and cycle length adjustments are collapsed into an optional panel.
  - *See your sleep window:* The interactive clock visualization and caffeine cut-off tips are folded into an expandable detail inside the suggested plan card.
  - *Compare other times, Wind down, Learn:* Secondary bedtime options, ambient sounds, guided breathing, and sleep science articles are contained within clean, keyboard-accessible `<details>` disclosures that automatically open upon navigation.
- **Mobile bottom navigation:** Streamlined to three destinations (*Planner*, *Wind down*, *Learn*), keeping touch targets focused and thumb-friendly.

## Validation

JavaScript syntax, HTML parsing, IDs and ARIA references, local cache paths, and text-role contrast passed. A DOM simulation exercised wake/sleep/nap selection, time validation and recovery, timing settings, reminder cancellation, fixed nap alarm time, modal focus, themes, and unavailable audio.

Story checks also passed for four chapter transitions, forward/reverse progress, live values, invalid input, chapter and skip-link focus, preference changes, and mobile activation geometry. These checks use a DOM simulation with controlled geometry, not a rendered browser.

Browser launch and local server binding are blocked in the execution sandbox. Actual desktop/mobile rendering, native time-picker behavior, audio playback, notification delivery, and PWA installation still need browser verification.

## Local preview

Serve this directory with a static HTTP server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`. A secure context (localhost or HTTPS) is required for service workers and browser notifications.
