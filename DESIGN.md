# Lull UI direction

Based on the local Stark 0.7.2 web-design and ux-design skills. The user selected quiet editorial.

- **Job:** choose a bedtime, wake-up time, or nap; compare the available windows. A daily, reversible consumer task.
- **Flow:** choose mode → set time → inspect the selected window → choose another option or set a reminder. Empty time input provides an inline recovery path. Advanced timing is progressively disclosed.
- **Surface:** responsive web utility / mobile task flow. Keep the existing HTML, CSS and JavaScript, with no runtime dependencies.
- **Concept:** a bedside almanac. Paper, ink, small section numbers, a clock face and an orderly index of times. The clock visualizes the actual selected interval.
- **Composition:** masthead → editorial introduction → optional four-chapter scroll story → time controls beside selected window and clock → comparison rows → sound/breathing controls → sleep-cycle notes.
- **Typography:** locally hosted Noto Serif Display and Fira Sans subsets, renamed Lull Display and Lull Sans. Serif for time and editorial headings; sans for controls and explanations.
- **Palette:** midnight sky (#050505), luminous moon ivory (#fdfbd3), soft starlight silver text (#fdfbf7, #9aa5b5), and warm cosmic gold (#f8cf74). High-contrast luminous accents with dark mode as default.
- **Background & Theme:** immersive midnight sky with dynamic scrollytelling transformations: twilight dusk in the intro, deepening starry night as you settle in, high-zenith celestial cosmos with parallax star drift and shooting meteors during the sleep cycles, a warm golden dawn horizon illuminating during Chapter 4 ("Meet the morning"), and a focused serene celestial canvas throughout the planner. The moon stays fixed in the upper right while dynamically evolving its lunar phase (waxing crescent → first quarter → full moon → waning gibbous) as the user scrolls. Its responsive anchor leaves the introductory copy clear.
- **Motion:** twinkling starfield, shooting meteors with staggered linear trajectories, fixed-position lunar phase progression, one signature scroll story, short CSS control transitions, and an explicitly started breathing animation. Reduced motion disables starfield/meteor animations and keeps the breathing countdown without transforms or transitions.
- **States:** selected/unselected, invalid input, passed bedtime, reminder active/cancelled, unavailable audio, installed/installation guidance, breathing started/stopped, light/dark.
- **Accessibility:** semantic landmarks and native buttons; pressed state; visible focus; modal focus containment and restoration; labeled input validation; reduced motion; 44px primary controls.
- **Responsive intent:** split workspace on desktop, stacked task flow at 900px and below, comparison rows on all sizes, wrapped sound controls and fixed mobile section navigation. Mobile opens directly into the planner after a compact introduction; the scroll story and floating moon are hidden.
- **Assets:** existing icons, original clock rendering, local font subsets with licenses. No third-party visual reference assets or generated imagery.

## Scrollytelling

Requested reference: [Sleep Well Creatives](https://sleep-well-creatives.com/). The reference's numbered chapters, repeated sleep imagery and progression into practical actions informed the narrative structure. Its copy, illustrations, brand identity and health claims are not reused. Reference review was text-based; its exact animation timing was not visually verified.

- **Story:** settle in → find a rhythm → make room for rest → meet the morning.
- **Layout:** a sticky clock illustration beside four scrolling chapters, followed by the working planner on desktop. At 900px and below, the story is hidden and its scroll animation is disabled to keep the planner immediately accessible.
- **Visual anchor:** concentric clock rings unfold, an orbit marker tracks reading progress, and the final chapter introduces a quiet dawn horizon glow. The celestial moon is fixed in place in the upper right sky, waxing from crescent to brilliant full moon in Chapter 3 ("Make room for rest") and waning towards dawn in Chapter 4.
- **Live context:** settling time, cycle length, sleep duration, interval and wake-up reflect the current planner selection, including naps and invalid input.
- **Implementation:** `story.js`, local SVG/CSS and passive scroll listeners, with one geometry update per scroll frame. The moon uses time-based damping and a spherical terminator; its animation runs only until it reaches the scroll target. Phase progression reverses with scrolling and holds the final waning phase in the planner. Short-height viewports retain the scrolling moon with a static story layout; reduced motion keeps the moon static. No runtime library, scroll interception or perpetual animation loop. `story.js` is included in the offline app shell.
- **Access:** visible skip-to-planner links, keyboard-accessible chapter links, focus restoration on navigation, and readable content without story JavaScript. Reduced-motion and short-height viewports use a static layout. The graphic is hidden from assistive technology; equivalent values are in the chapter text.
- **Scope:** educational/product narrative remains separate from the stable, directly accessible planner controls.

## Lunar secret

The moon reacts in place when poked: it briefly fills, opens two uneven ink-drawn eyes, blinks, yawns, then nods back to sleep. A second poke during the 3.4-second sequence earns a squint. Three small hand-drawn Z marks drift away as it dozes. The drawing uses the existing ivory and ink colors, with a faint glow. There is no overlay, message, or separate scene. Its scroll phase continues tracking underneath and returns smoothly when the expression fades. Escape, hiding the tab, changing themes, or changing motion preferences ends the interaction. Reduced motion shows a still sleeping face briefly. The native button and live announcement support keyboard and screen-reader access; no audio, dependencies, or persistent animation loops are added.

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

The mobile layout was checked in rendered headless Firefox at 320×568, 360×640, 390×844, 430×932, 768×1024, 844×390, and 900×600. All three planning modes and fully expanded controls fit without horizontal overflow; visible planner buttons, summaries, and inputs have at least 44px touch targets. Browser checks also covered alternative selection, invalid-time recovery, both themes, section navigation and focus, the breathing guide in portrait and landscape, footer clearance above navigation, and restoration of the desktop story and moon after resizing. Screenshots were inspected at phone and desktop sizes. Mobile also uses safe-area padding and a static single-layer starfield; its navigation follows the current theme. These checks use desktop Firefox viewports, not physical iOS or Android devices.

JavaScript syntax, HTML parsing, IDs and ARIA references, local cache paths, and text-role contrast passed. A DOM simulation exercised wake/sleep/nap selection, time validation and recovery, timing settings, reminder cancellation, fixed nap alarm time, modal focus, themes, and unavailable audio.

Story checks also passed for four chapter transitions, forward/reverse progress, live values, invalid input, chapter and skip-link focus, preference changes, and mobile activation geometry. These checks use a DOM simulation with controlled geometry, not a rendered browser.

The lunar secret was also checked in headless Firefox at desktop and mobile sizes: pointer hit testing, stable positioning, automatic cleanup, phase restoration after scrolling, keyboard activation and Escape, the second-poke reaction, theme changes, and horizontal overflow. Screenshots were inspected at both sizes. Native time-picker behavior, audio playback, notification delivery, and PWA installation still need browser verification.

## Local preview

Serve this directory with a static HTTP server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`. A secure context (localhost or HTTPS) is required for service workers and browser notifications.
