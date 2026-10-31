# How it moves, step by step

Every animation and behaviour found on the page, as recipes: what starts it, which element, which property from what to what, for how long, on which curve, in what order. Times are from the moment the trigger happens. Build them one at a time and check each against its film (frames captioned with their time, or with the scroll position).

Measured at 1440 px on www.translate-wf.com. Values in `code` are exactly as the browser reported them.

## The page's motion language

- **Curves:** `ease` (2×).
- **Durations:** 100 ms.
- **Easing toward the scroll:** values chase their target by 0.106 of the remaining distance each frame (`current += (target - current) * 0.106` in a requestAnimationFrame loop), coming to rest about 1936 ms after the scroll stops.

## When the page scrolls

### 1. `div.scene-1 > div.browser-globe-scene-wrapper > div.browser-overflow-wrapper > div.globe > div.browser-window-wrapper` follows the scroll

- **What:** it changes `transform` as the page scrolls.
- `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.browser-overflow-wrapper:nth-of-type(1) > div.globe > div.browser-window-wrapper` `transform`: `translate3d(0.0372%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(29.6415%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 42 frames, at rest 1936 ms after the scroll; eases toward its target by 0.106 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.106` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`browser-window-wrapper`).

### 2. `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper` follows the scroll

- **What:** it changes `transform` as the page scrolls.
- `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5)` `transform`: `translate3d(0.062%, 0px, 0px) scale3d(0.999752, 0.999752, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(49.4025%, 0px, 0px) scale3d(0.80239, 0.80239, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 42 frames, at rest 1936 ms after the scroll; eases toward its target by 0.106 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.106` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`browser-window`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`triangles-wrapper`).

### 3. `div.webis-content-col > div.webis-urready-section > div.webis-globe-wrapper > div.webis-globe > div.hemisphere-east` follows the scroll

- **What:** it changes `transform` as the page scrolls.
- `div.webis-content-col > div.webis-urready-section:nth-of-type(3) > div.webis-globe-wrapper > div.webis-globe > div.hemisphere-east:nth-of-type(2)` `transform`: `translate3d(19.9752%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.239%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 42 frames, at rest 1936 ms after the scroll; eases toward its target by 0.106 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.106` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`webis-globe`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`hemisphere-east`).

### 4. `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east` follows the scroll

- **What:** it changes `transform` as the page scrolls.
- `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east:nth-of-type(3)` `transform`: `translate3d(19.9752%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.239%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 42 frames, at rest 1936 ms after the scroll; eases toward its target by 0.106 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.106` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`browser-window`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`hemisphere-east`).

### 5. `div.webis-content-col > div.webis-urready-section > div.webis-globe-wrapper > div.webis-globe > div.hemisphere-west` follows the scroll

- **What:** it changes `transform` as the page scrolls.
- `div.webis-content-col > div.webis-urready-section:nth-of-type(3) > div.webis-globe-wrapper > div.webis-globe > div.hemisphere-west:nth-of-type(1)` `transform`: `translate3d(-19.9752%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.239%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 42 frames, at rest 1936 ms after the scroll; eases toward its target by 0.106 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.106` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`webis-globe`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`hemisphere-west`).

### 6. `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-west` follows the scroll

- **What:** it changes `transform` as the page scrolls.
- `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-west:nth-of-type(2)` `transform`: `translate3d(-19.9752%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.239%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 42 frames, at rest 1936 ms after the scroll; eases toward its target by 0.106 a frame.
- **How:** keep the scroll position as a target and an eased copy (`eased += (target - eased) * 0.106` each frame); write the values above from the eased copy, so it glides on after the wheel stops.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`browser-window`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`hemisphere-west`).

## Moving scenes (filmed)

### 7. Looping div: 40 moving parts (transform, will-change, opacity, d)

- **Film:** `reference/motion/films/01-scripted-div.jpg` (captions are ms).
- **Element:** `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.browser-overflow-wrapper:nth-of-type(1) > div.globe > div.browser-window-wrapper` in section `07-div`.
- `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.browser-overflow-wrapper:nth-of-type(1) > div.globe > div.browser-window-wrapper` `transform` starts 3216 ms after load, 60 changes over 10925 ms (load): `translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.1311%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`. All samples are in `motion.json` `recorded`.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`browser-window-wrapper`).

### 8. Looping div: 7 moving parts (will-change, opacity, transform)

- **Film:** `reference/motion/films/02-scripted-div.jpg` (captions are ms).
- **Element:** `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2)` in section `08-div`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` `opacity` starts 3216 ms after load, 22 changes over 9076 ms (load): `0` → `1`. All samples are in `motion.json` `recorded`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` `transform` starts 3216 ms after load, 22 changes over 9021 ms (load): `translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`. All samples are in `motion.json` `recorded`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` `transform` starts 3216 ms after load, 21 changes over 9021 ms (load): `translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`. All samples are in `motion.json` `recorded`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` `will-change` starts 3216 ms after load, 20 changes over 9076 ms (loop): `opacity` → ``. All samples are in `motion.json` `recorded`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` `will-change` starts 3216 ms after load, 20 changes over 9076 ms (loop): `opacity` → ``. All samples are in `motion.json` `recorded`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` `opacity` starts 3216 ms after load, 13 changes over 8590 ms (load): `0` → `1`. All samples are in `motion.json` `recorded`.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-text-wrapper`).

### 9. Looping div: 8 moving parts (will-change, transform, opacity)

- **Film:** `reference/motion/films/03-scripted-div.jpg` (captions are ms).
- **Element:** `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts` in section `17-div`.

### 10. Scripted div: 2 moving parts (transform, will-change)

- **Film:** `reference/motion/films/05-scripted-div.jpg` (captions are ms).
- **Element:** `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.language-barrier-wrapper:nth-of-type(6) > div.barrier-text-overflow:nth-of-type(2) > div.barrier-text-wrapper` in section `18-div`.
- `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.language-barrier-wrapper:nth-of-type(6) > div.barrier-text-overflow:nth-of-type(2) > div.barrier-text-wrapper` `transform` starts 3216 ms after load, 52 changes over 10925 ms (load): `translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(99.826%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`. All samples are in `motion.json` `recorded`.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`barrier-text-wrapper`).

### 11. The header `nav.nav` as you scroll

- **Behaviour:** it stays in place while you scroll.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 23 (`nav`).

### 12. The phone menu (`div#w-dropdown-toggle-0` at 390 px)

- **In order:**
  1. 8 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2)` `opacity` `0.57866` → `1` (35 steps)
  1. 8 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2)` `transform` `translate3d(0px, 42.134px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (35 steps)
  1. 8 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5)` `opacity` `0.65428` → `1` (27 steps)
  1. 8 ms: `nav.nav > div.nav-btns-wrapper > div.btn-wrapper:nth-of-type(1) > div.wg-element-wrapper-2.sw4` `opacity` `0.77733` → `1`
  1. 8 ms: `div.col.nopad:nth-of-type(2) > div.half-page.uielements > div.uielement-col-wrapper > div.uielement-wrapper.weglot-exclude:nth-of-type(9) > div.wg-element-wrapper` `opacity` `0.38867` → `1` (14 steps)
  1. 8 ms: `div.col.nopad:nth-of-type(2) > div.half-page.uielements > div.uielement-col-wrapper > div.uielement-wrapper.weglot-exclude:nth-of-type(7) > div.wg-element-wrapper` `opacity` `0.77733` → `1`
  1. 8 ms: `div.col.nopad:nth-of-type(2) > div.half-page.uielements > div.uielement-col-wrapper > div.uielement-wrapper.weglot-exclude:nth-of-type(6) > div.wg-element-wrapper` `opacity` `0.77733` → `1`
  1. 8 ms: `div.col.nopad:nth-of-type(2) > div.half-page.uielements > div.uielement-col-wrapper > div.uielement-wrapper.weglot-exclude:nth-of-type(5) > div.wg-element-wrapper` `opacity` `0.77733` → `1`
  1. 8 ms: `div.col.nopad:nth-of-type(2) > div.half-page.uielements > div.uielement-col-wrapper > div.uielement-wrapper.weglot-exclude:nth-of-type(4) > div.wg-element-wrapper` `opacity` `0.77733` → `1`
  1. 8 ms: `div.col.nopad:nth-of-type(2) > div.half-page.uielements > div.uielement-col-wrapper > div.uielement-wrapper.weglot-exclude:nth-of-type(1) > div.wg-element-wrapper` `opacity` `0.77733` → `1`
- **Animations that ran:**
  - 74 ms: `div#w-dropdown-toggle-0` CSS transition on `backgroundColor`, 100 ms, `ease` (backgroundColor: rgb(60, 70, 251) → rgb(51, 61, 240))
  - 74 ms: `div#w-dropdown-toggle-0` CSS transition on `boxShadow`, 100 ms, `ease` (boxShadow: rgb(255, 129, 119) 0px 0px 0px 0px → rgb(255, 129, 119) 0px 0px 0px 4px)
- **Film:** `reference/motion/menu.jpg`.

## Hovering (what scripts do; CSS hover rules are in styles.css)

### 13. Hovering `a.progress-wf.w-inline-block`

- 64 ms: `div.weglot-is-ill-wrapper.iw4 > div.weglot-is-ll-row > div.weglot-ill-col.ill:nth-of-type(2) > div.weglot-ill > div.weglot-ill-4.ob4:nth-of-type(4)` `will-change` set to `transform`
- 64 ms: `div.weglot-is-ill-wrapper.iw4 > div.weglot-is-ll-row > div.weglot-ill-col.ill:nth-of-type(2) > div.weglot-ill > div.weglot-ill-4.ob4:nth-of-type(4)` `opacity` set to `1`
- 64 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.2212%, 25.951%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.1568%, 25.468%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (24 steps)
- 64 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.2212%, 25.951%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.1568%, 25.468%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (24 steps)
- 64 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.1106%, 15.4438%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.0784%, 15.2184%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (24 steps)
- 64 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.1106%, 15.4438%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.0784%, 15.2184%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (24 steps)
- **Film:** `reference/motion/hovers/01-a-progress-wf-w-inline-b.jpg`.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`weglot-ill-4`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`ob4`).

### 14. Hovering `div.browser-globe-scene-wrapper`

- 15 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` `opacity` `0.96189` → `0` (4 steps)
- 15 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` `transform` `translate3d(0px, 0px, 0px) scale3d(1.00153, 1.00153, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (5 steps)
- 15 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` `transform` `translate3d(0px, 0px, 0px) scale3d(1.26064, 1.26064, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (3 steps)
- 15 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` `opacity` `0.04998` → `0`
- 15 ms: `div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east:nth-of-type(3) > div.hemisphere-east-continents > div.globe-stat.germ:nth-of-type(3)` `opacity` `0.95002` → `1`
- 15 ms: `div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east:nth-of-type(3) > div.hemisphere-east-continents > div.globe-stat.rus:nth-of-type(2)` `opacity` `0.95002` → `1`
- **Film:** `reference/motion/hovers/02-div-browser-globe-scene-.jpg`.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-text-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 23 (`intro`).

### 15. Hovering `div.browser-overflow-wrapper`

- 35 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.3594%, 22.72%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(3.6262%, 22.5595%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 35 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.3594%, 22.72%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(3.6262%, 22.5595%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 35 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.1797%, 13.936%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.8131%, 13.8611%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 35 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.1797%, 13.936%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.8131%, 13.8611%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 35 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` `transform` `translate3d(-48.845vw, -43.628vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-47.231vw, -0.027vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 35 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p1:nth-of-type(1)` `transform` `translate3d(-49.653vw, -49.444vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-47.222vw, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (3 steps)
- **Film:** `reference/motion/hovers/03-div-browser-overflow-wra.jpg`.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 16. Hovering `div.browser-window-wrapper`

- 6 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(5.6106%, 23.53%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(3.5976%, 24.0565%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 6 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(5.6106%, 23.53%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(3.5976%, 24.0565%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 6 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(2.8053%, 14.314%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.7988%, 14.5597%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 6 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(2.8053%, 14.314%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.7988%, 14.5597%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 6 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` `transform` `translate3d(-49.368vw, -43.628vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-7.327vw, 39.928vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 6 ms: `div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-2:nth-of-type(2)` `transform` `translate3d(-0.98812%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.3784%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 17. Hovering `div.browser-window-inner-wrapper`

- 10 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(2.9992%, 24.214%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.8848%, 24.505%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 10 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(2.9992%, 24.214%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.8848%, 24.505%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 10 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(1.4996%, 14.6332%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.9424%, 14.769%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 10 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(1.4996%, 14.6332%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.9424%, 14.769%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 10 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` `transform` `translate3d(-44.67vw, -38.924vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-7.316vw, 39.951vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 10 ms: `div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-2:nth-of-type(2)` `transform` `translate3d(-0.18856%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.29888%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 18. Hovering `div.browser-window`

- 15 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(1.5716%, 24.5875%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.008%, 24.736%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 15 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(1.5716%, 24.5875%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(1.008%, 24.736%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 15 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.7858%, 14.8075%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.504%, 14.8768%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 15 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.7858%, 14.8075%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.504%, 14.8768%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 15 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` `transform` `translate3d(-44.67vw, -38.923vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-2.329vw, 3.959vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 15 ms: `div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-2:nth-of-type(2)` `transform` `translate3d(-0.15784%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.121%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 19. Hovering `div.browser-btns-wrapper`

- 7 ms: `div#newweb > div.webis-bg:nth-of-type(1) > div.webis-ill-wrapper:nth-of-type(2) > div.webis-ill.ill3:nth-of-type(3)` `will-change` set to `transform`
- 7 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.8574%, 24.7735%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.5498%, 24.853%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 7 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.8574%, 24.7735%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.5498%, 24.853%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 7 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.4287%, 14.8943%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2749%, 14.9314%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 7 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.4287%, 14.8943%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2749%, 14.9314%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- 7 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` `transform` `translate3d(-41.695vw, -40.464vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-2.119vw, -26.015vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (22 steps)
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`webis-ill-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`webis-ill`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`ill3`).

### 20. Hovering `div.grid-row.facts`

- 9 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.4674%, 24.877%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.4176%, 24.2755%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 9 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.4674%, 24.877%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.4176%, 24.2755%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 9 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.2337%, 14.9426%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2088%, 14.6619%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 9 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.2337%, 14.9426%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2088%, 14.6619%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 9 ms: `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` `transform` `translate3d(-44.058vw, -46.687vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-42.788vw, -0.028vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- 9 ms: `div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-2:nth-of-type(2)` `transform` `translate3d(-0.04644%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-1.54988%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (23 steps)
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 21. Hovering `div.grid-row.barrier`

- 49 ms: `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-title:nth-of-type(1) > div.webflow-facts-title-wrapper.mb-normal:nth-of-type(1)` `will-change` set to ``
- 49 ms: `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-title:nth-of-type(1) > div.webflow-facts-title-wrapper.mb-normal:nth-of-type(1)` `transform` `translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0px, -2rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
- 49 ms: `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-content:nth-of-type(2) > div.fact2:nth-of-type(2)` `opacity` `0.01653` → `0`
- 49 ms: `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-content:nth-of-type(2) > div.fact2:nth-of-type(2)` `will-change` `opacity` → `(unset)` (3 steps)
- 49 ms: `div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east:nth-of-type(3) > div.hemisphere-east-continents > div.globe-stat.germ:nth-of-type(3)` `opacity` `0.01653` → `0`
- 49 ms: `div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east:nth-of-type(3) > div.hemisphere-east-continents > div.globe-stat.germ:nth-of-type(3)` `will-change` `opacity` → `(unset)`
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`webflow-facts-title-wrapper`).

### 22. Hovering `a.w-webflow-badge`

- 16 ms: `div.weglot-is-ill-wrapper.iw4 > div.weglot-is-ll-row > div.weglot-ill-col.ill:nth-of-type(2) > div.weglot-ill > div.weglot-ill-4.ob4:nth-of-type(4)` `opacity` `0.95016` → `1` (4 steps)
- 16 ms: `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.language-barrier-wrapper:nth-of-type(6) > div.barrier-breaker-overflow:nth-of-type(3)` `transform` `translate3d(-89.367%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-33.146%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (21 steps)
- 16 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.6842%, 21.1465%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.447%, 22.477%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (21 steps)
- 16 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` `transform` `translate3d(0.6842%, 21.1465%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.447%, 22.477%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (21 steps)
- 16 ms: `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.3421%, 13.2017%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2235%, 13.8226%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (21 steps)
- 16 ms: `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` `transform` `translate3d(0.3421%, 13.2017%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2235%, 13.8226%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` (21 steps)
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`weglot-ill-4`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`ob4`).

## Following the pointer

### 23. `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` answers to the pointer

- `transform` `translate3d(-50vw, -50vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.038vw, 0.024vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 57 frames, easing 0.06 a frame.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`pointer`).

### 24. `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` answers to the pointer

- `transform` `translate3d(0%, 25%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2878%, 26.236%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 55 frames, easing 0.134 a frame.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 25. `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-3:nth-of-type(3)` answers to the pointer

- `transform` `translate3d(0%, 25%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.2878%, 26.236%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 55 frames, easing 0.134 a frame.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 23 (`intro`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 26. `div#imagine > div.imagine-bg:nth-of-type(1) > div.intro-title-wrapper.lennon:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` answers to the pointer

- `transform` `translate3d(0%, 15%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.1439%, 15.5768%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 55 frames, easing 0.134 a frame.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`lennon`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 27. `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1) > div.h-oversized.intro-2:nth-of-type(2)` answers to the pointer

- `transform` `translate3d(0%, 15%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(0.1439%, 15.5768%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 55 frames, easing 0.134 a frame.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`intro-title-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 23 (`intro`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`h-oversized`).

### 28. `div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-2:nth-of-type(2)` answers to the pointer

- `transform` `translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` → `translate3d(-0.06208%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` over 55 frames, easing 0.146 a frame.
- **In the code:** `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`triangles-wrapper`); `reference/scripts/09-webflow-4b04f7b1f.js` line 55 (`triangles-2`).

## The page's own code

The scripts the page ran are in `reference/scripts/` (11 files), so you can read exactly how each effect is made. Don't paste them in whole: rebuild each effect in the project's own code, following the recipe and the source together.
