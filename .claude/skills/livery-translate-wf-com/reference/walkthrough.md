# Walkthrough: how the page is built and how it moves

One part per top-level section, top to bottom, as measured at 1440 px. Sizes are CSS pixels; colours are as computed. Every file named here is in this folder. How things move and behave (scrolling, page changes, the menu, hovers, clicks), step by step, is in `reference/motion/README.md`.

## 01 · div

- **Box:** 1440×64 px, starting 836 px from the top. Background rgb(255, 255, 255), text rgb(24, 21, 76).
- **Layout:** flex row of 6, gap normal, normal/normal.
- **Type:** system-ui 400 16px/24px · system-ui 700 13.5px/16.2px · system-ui 400 12px/14px (family weight size/line-height, most text first).
- **Inside:** 4 buttons, 5 links, 4 pictures, 4 drawings.
- **Look:** `reference/sections/01-div.jpg` and its anatomy `reference/sections/01-div.anatomy.jpg`.
- **Markup:** `reference/sections/01-div.html`.
- **Pictures:** `reference/assets/images/005-logo-wf.svg`, `reference/assets/images/006-ill-pointer.svg`, `reference/assets/images/007-ill-pointer.svg`, `reference/assets/images/008-ill-pointer.svg`.
- **Motion:**
  - choreography: 9 elements (div) animate `transform` starting 3216–3216 ms after load together, each for about 4264 ms
  - choreography: 5 elements (div) animate `will-change` starting 3216–3216 ms after load together, each for about 6220 ms, and keep looping
  - script writes `transform` on `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p3:nth-of-type(3)` 62 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(-48.347vw, -49.782vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.custom-pointer-wrapper.no-events:nth-of-type(4) > div.power-of-lang-pointer > div.pointer.p2:nth-of-type(2)` 62 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(-49.961vw, -50vh, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.progress-bar-wrapper:nth-of-type(3) > div.progress-bar:nth-of-type(1) > div.progress-bar-part:nth-of-type(6) > div.progress-bar-line:nth-of-type(2) > div.progress-bar-fill.f6` 15 times over 4264 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0.99994, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.progress-bar-wrapper:nth-of-type(3) > div.progress-bar:nth-of-type(1) > div.progress-bar-part:nth-of-type(5) > div.progress-bar-line:nth-of-type(2) > div.progress-bar-fill.f5` 15 times over 4264 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0.99994, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.progress-bar-wrapper:nth-of-type(3) > div.progress-bar:nth-of-type(1) > div.progress-bar-part:nth-of-type(4) > div.progress-bar-line:nth-of-type(2) > div.progress-bar-fill.f4` 15 times over 4264 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0.99994, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.progress-bar-wrapper:nth-of-type(3) > div.progress-bar:nth-of-type(1) > div.progress-bar-part:nth-of-type(3) > div.progress-bar-line:nth-of-type(2) > div.progress-bar-fill.f3` 15 times over 4264 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0.99994, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - and 9 more recorded tracks (motion.json `recorded`)

## 02 · nav

- **Box:** 1440×135 px, starting 0 px from the top. Background rgb(255, 255, 255), text rgb(24, 21, 76).
- **Layout:** flex row of 2, gap normal, space-between/center.
- **Type:** system-ui 400 16px/24px · system-ui 700 16px/16px · system-ui 700 16px/24px (family weight size/line-height, most text first).
- **Inside:** 2 buttons, 6 links, 2 drawings.
- **Look:** `reference/sections/02-nav.jpg` and its anatomy `reference/sections/02-nav.anatomy.jpg`.
- **Markup:** `reference/sections/02-nav.html`.
- **Drawings:** `reference/assets/svg/001-logo-nav.svg` (logo, 160×31), `reference/assets/svg/002-logo-nav.svg` (logo, 102×26).
- **Motion:**
  - script writes `will-change` on `nav.nav > div.nav-btns-wrapper > div.btn-wrapper:nth-of-type(1) > div.wg-element-wrapper-2.sw4` 4 times over 1132 ms (loops): from `opacity` to ``
  - script writes `opacity` on `nav.nav` 4 times over 2139 ms (on load): from `0` to `1`
  - script writes `will-change` on `nav.nav` 4 times over 2139 ms (loops): from `opacity` to ``
- **Control states:** `reference/components/01-nav-link.jpg` (nav-link a.logo-wrapper.weglot-exclude: rest, hover, focus).
- **Control states:** `reference/components/02-button.jpg` (button div#w-dropdown-toggle-0: rest, hover, focus).
- **Control states:** `reference/components/03-button.jpg` (button a.btn.primary: rest, hover, focus).

## 03 · div

- **Box:** 1440×88 px, starting 765 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Type:** system-ui 700 13.5px/16.2px (family weight size/line-height, most text first).
- **Inside:** 1 drawing.
- **Look:** `reference/sections/03-div.jpg` and its anatomy `reference/sections/03-div.anatomy.jpg`.
- **Markup:** `reference/sections/03-div.html`.
- **Drawings:** `reference/assets/svg/003-icon-div.svg` (icon, 32×32).
- **Motion:**
  - script writes `transform` on `div.scene-1:nth-of-type(1) > div.scroll-prompt-wrapper-initial:nth-of-type(1) > div.scroll-prompt-intro-initial > div.scroll-prompt-btn.initial > div.scroll-prompt-ico.initial:nth-of-type(2)` 102 times over 10925 ms (on load): from `translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0.79223rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `opacity` on `div.scene-1:nth-of-type(1) > div.scroll-prompt-wrapper-initial:nth-of-type(1) > div.scroll-prompt-intro-initial > div.scroll-prompt-btn.initial > div.scroll-prompt-ico.initial:nth-of-type(2)` 68 times over 10925 ms (on load): from `1` to `0.207566`
  - script writes `will-change` on `div.scene-1:nth-of-type(1) > div.scroll-prompt-wrapper-initial:nth-of-type(1) > div.scroll-prompt-intro-initial > div.scroll-prompt-btn.initial > div.scroll-prompt-ico.initial:nth-of-type(2)` 46 times over 10500 ms (loops): from `transform` to `opacity, transform`
  - script writes `opacity` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.scroll-prompt-wrapper-initial:nth-of-type(1)` 25 times over 10121 ms (on load): from `0` to `1`
  - script writes `will-change` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.scroll-prompt-wrapper-initial:nth-of-type(1)` 8 times over 10121 ms (loops): from `opacity` to ``

## 04 · div

- **Box:** 1440×6700 px, starting 1350 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/04-div.jpg` and its anatomy `reference/sections/04-div.anatomy.jpg`.
- **Markup:** `reference/sections/04-div.html`.

## 05 · div

- **Box:** 1440×900 px, starting 7150 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/05-div.jpg` and its anatomy `reference/sections/05-div.anatomy.jpg`.
- **Markup:** `reference/sections/05-div.html`.

## 06 · div

- **Box:** 1440×900 px, starting 7150 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/06-div.jpg` and its anatomy `reference/sections/06-div.anatomy.jpg`.
- **Markup:** `reference/sections/06-div.html`.

## 07 · div

- **Box:** 1440×900 px, starting 0 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** flex row of 5, gap normal, center/center.
- **Type:** system-ui 700 16px/24px (family weight size/line-height, most text first).
- **Inside:** 4 pictures, 1 drawing.
- **Look:** `reference/sections/07-div.jpg` and its anatomy `reference/sections/07-div.anatomy.jpg`.
- **Markup:** `reference/sections/07-div.html`.
- **Drawings:** `reference/assets/svg/004-illustration-div.svg` (illustration, 719×719).
- **Pictures:** `reference/assets/images/009-ill-western-hem.svg`, `reference/assets/images/010-ill-eastern-hem.svg`, `reference/assets/images/012-ill-triangles.svg`, `reference/assets/images/013-ill-triangles.svg`.
- **Motion:**
  - choreography: 14 elements (img, div) animate `transform` starting 3216–3216 ms after load together, each for about 10925 ms
  - choreography: 20 elements (div) animate `will-change` starting 3216–9436 ms after load, about 6220 ms apart, each for about 7978 ms, and keep looping
  - choreography: 4 elements (div) animate `opacity` starting 9436–9436 ms after load together, each for about 1758 ms
  - script writes `transform` on `div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-2:nth-of-type(2) > img.img-triangles-2` 60 times over 10925 ms (on load): from `translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, -1.2372vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5) > div.triangles-1:nth-of-type(1) > img.img-triangles-1` 60 times over 10925 ms (on load): from `translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, -1.6496vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.browser-overflow-wrapper:nth-of-type(1) > div.globe > div.browser-window-wrapper` 60 times over 10925 ms (on load): from `translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0.1311%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.triangles-wrapper:nth-of-type(5)` 60 times over 10925 ms (on load): from `translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0.2185%, 0px, 0px) scale3d(0.999126, 0.999126, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-east:nth-of-type(3)` 60 times over 10925 ms (on load): from `translate3d(20%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(19.9126%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.globe > div.browser-window-wrapper > div.browser-window-inner-wrapper > div.browser-window > div.hemisphere-west:nth-of-type(2)` 60 times over 10925 ms (on load): from `translate3d(-20%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(-19.9126%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - and 34 more recorded tracks (motion.json `recorded`)
- **Film:** `reference/motion/films/01-scripted-div.jpg` (Looping div: 40 moving parts (transform, will-change, opacity, d); it is `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.browser-overflow-wrapper:nth-of-type(1) > div.globe > div.browser-window-wrapper` in the markup; frames captioned with ms).

## 08 · div

- **Box:** 1440×900 px, starting 0 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** flex row of 2, gap normal, center/center.
- **Type:** system-ui 700 36px/43.2px · system-ui 700 100.8px/100.8px · system-ui 700 115.2px/115.2px · system-ui 700 129.6px/129.6px (family weight size/line-height, most text first).
- **Look:** `reference/sections/08-div.jpg` and its anatomy `reference/sections/08-div.anatomy.jpg`.
- **Markup:** `reference/sections/08-div.html`.
- **Motion:**
  - choreography: 3 elements (div) animate `will-change` starting 3216–3216 ms after load together, each for about 9076 ms, and keep looping
  - script writes `opacity` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` 22 times over 9076 ms (on load): from `0` to `1`
  - script writes `transform` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` 22 times over 9021 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` 21 times over 9021 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - script writes `will-change` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` 20 times over 9076 ms (loops): from `opacity` to ``
  - script writes `will-change` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-subtitle-wrapper:nth-of-type(2)` 20 times over 9076 ms (loops): from `opacity` to ``
  - script writes `opacity` on `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2) > div.intro-title-wrapper.intro:nth-of-type(1)` 13 times over 8590 ms (on load): from `0` to `1`
  - and 1 more recorded tracks (motion.json `recorded`)
- **Film:** `reference/motion/films/02-scripted-div.jpg` (Looping div: 7 moving parts (will-change, opacity, transform); it is `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-text-wrapper:nth-of-type(2)` in the markup; frames captioned with ms).

## 09 · div

- **Box:** 1440×180 px, starting 0 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/09-div.jpg` and its anatomy `reference/sections/09-div.anatomy.jpg`.
- **Markup:** `reference/sections/09-div.html`.

## 10 · div

- **Box:** 1440×1800 px, starting 0 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/10-div.jpg` and its anatomy `reference/sections/10-div.anatomy.jpg`.
- **Markup:** `reference/sections/10-div.html`.

## 11 · div

- **Box:** 1440×1350 px, starting 1350 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/11-div.jpg` and its anatomy `reference/sections/11-div.anatomy.jpg`.
- **Markup:** `reference/sections/11-div.html`.

## 12 · div

- **Box:** 1440×1350 px, starting 2700 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/12-div.jpg` and its anatomy `reference/sections/12-div.anatomy.jpg`.
- **Markup:** `reference/sections/12-div.html`.

## 13 · div

- **Box:** 1440×4050 px, starting 1350 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/13-div.jpg` and its anatomy `reference/sections/13-div.anatomy.jpg`.
- **Markup:** `reference/sections/13-div.html`.

## 14 · div

- **Box:** 1440×1350 px, starting 4050 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/14-div.jpg` and its anatomy `reference/sections/14-div.anatomy.jpg`.
- **Markup:** `reference/sections/14-div.html`.

## 15 · div

- **Box:** 1440×1350 px, starting 5400 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/15-div.jpg` and its anatomy `reference/sections/15-div.anatomy.jpg`.
- **Markup:** `reference/sections/15-div.html`.

## 16 · div

- **Box:** 1440×1350 px, starting 5400 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** stacked blocks.
- **Look:** `reference/sections/16-div.jpg` and its anatomy `reference/sections/16-div.anatomy.jpg`.
- **Markup:** `reference/sections/16-div.html`.

## 17 · div

- **Box:** 1440×900 px, starting 1350 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** flex row of 2, gap normal, normal/normal.
- **Type:** system-ui 400 20px/30px · system-ui 700 36px/43.2px (family weight size/line-height, most text first).
- **Look:** `reference/sections/17-div.jpg` and its anatomy `reference/sections/17-div.anatomy.jpg`.
- **Markup:** `reference/sections/17-div.html`.
- **Motion:**
  - choreography: 5 elements (div) animate `will-change` starting 3216–3216 ms after load together, each for about 7301 ms, and keep looping
  - script writes `will-change` on `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-content:nth-of-type(2) > div.fact2:nth-of-type(2)` 12 times over 7301 ms (loops): from `transform` to ``
  - script writes `will-change` on `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-content:nth-of-type(2) > div.fact3:nth-of-type(3)` 12 times over 7301 ms (loops): from `transform` to ``
  - script writes `will-change` on `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-content:nth-of-type(2) > div.fact1:nth-of-type(1)` 12 times over 6666 ms (loops): from `opacity` to ``
  - script writes `will-change` on `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-title:nth-of-type(1) > div.webflow-fact4:nth-of-type(2)` 12 times over 7775 ms (loops): from `transform` to ``
  - script writes `will-change` on `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-title:nth-of-type(1) > div.webflow-facts-title-wrapper.mb-normal:nth-of-type(1)` 12 times over 7301 ms (loops): from `transform` to ``
  - script writes `transform` on `div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts > div.webflow-facts-content:nth-of-type(2) > div.fact2:nth-of-type(2)` 4 times over 7301 ms (follows scrolling): from `translate3d(0px, 2rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 2rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
  - and 2 more recorded tracks (motion.json `recorded`)
- **Film:** `reference/motion/films/03-scripted-div.jpg` (Looping div: 8 moving parts (will-change, transform, opacity); it is `div.scene-1:nth-of-type(1) > div.browser-globe-scene-wrapper:nth-of-type(5) > div.intro-webflow-facts-wrapper:nth-of-type(5) > div.grid-row.facts:nth-of-type(7) > div.webflow-facts` in the markup; frames captioned with ms).

## 18 · div

- **Box:** 1440×1300 px, starting 6750 px from the top. Background rgb(238, 227, 255), text rgb(24, 21, 76).
- **Layout:** flex row of 3, gap normal, flex-end/flex-start.
- **Type:** system-ui 400 20px/30px · system-ui 700 36px/43.2px · system-ui 400 20px/24px · system-ui 700 20px/30px · system-ui 700 16px/24px (family weight size/line-height, most text first).
- **Inside:** 14 buttons, 41 links, 79 pictures, 16 drawings.
- **Look:** `reference/sections/18-div.jpg` and its anatomy `reference/sections/18-div.anatomy.jpg`.
- **Markup:** `reference/sections/18-div.html`.
- **Drawings:** `reference/assets/svg/005-decoration-div.svg` (decoration, 414×114).
- **Pictures:** `reference/assets/images/009-ill-western-hem.svg`, `reference/assets/images/010-ill-eastern-hem.svg`, `reference/assets/images/014-ill-bar-breaker.svg`, `reference/assets/images/015-ill-scan.svg`, `reference/assets/images/016-ill-eye.svg`, `reference/assets/images/017-ill-lennon.svg`, `reference/assets/images/018-ill-pie.svg`, `reference/assets/images/019-ill-pie.svg`, `reference/assets/images/020-ill-pie.svg`, `reference/assets/images/021-ill-pie.svg`.
- **Motion:**
  - choreography: 36 elements (div, img) animate `transform` starting 3216–3216 ms after load together, each for about 5544 ms
  - choreography: 8 elements (div) animate `opacity` starting 3216–3216 ms after load together, each for about 5544 ms
  - choreography: 50 elements (div, img, nav) animate `will-change` starting 3216–3216 ms after load together, each for about 0 ms, and keep looping
  - choreography: 4 elements (div) animate `display` starting 3401–3401 ms after load together, each for about 7600 ms, and keep looping
  - choreography: 4 elements (div) animate `position` starting 3401–3401 ms after load together, each for about 7600 ms, and keep looping
  - choreography: 4 elements (div) animate `visibility` starting 3401–3401 ms after load together, each for about 7600 ms, and keep looping
  - script writes `transform` on `div.webis-ill.ill3:nth-of-type(3) > div.webis-ill-circles-wrapper.cw1:nth-of-type(1) > div.webis-ill-circle.c1:nth-of-type(1) > div.webis-ill-compl-wrapper.cw1 > div.webis-compl-3:nth-of-type(3)` 188 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(-233.989deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.webis-ill-wrapper:nth-of-type(2) > div.webis-ill.ill3:nth-of-type(3) > div.webis-ill-circles-wrapper.sw2:nth-of-type(2) > div.webis-ill-circle.c6:nth-of-type(2) > div.webis-ill-compl-wrapper.cw3` 188 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(233.989deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.webis-ill-wrapper:nth-of-type(2) > div.webis-ill.ill3:nth-of-type(3) > div.webis-ill-circles-wrapper.sw2:nth-of-type(2) > div.webis-ill-circle.c8:nth-of-type(4) > div.webis-ill-compl-wrapper.cw2` 188 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(233.989deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.webis-ill-wrapper:nth-of-type(2) > div.webis-ill.ill3:nth-of-type(3) > div.webis-ill-circles-wrapper.sw2:nth-of-type(2) > div.webis-ill-circle.c7:nth-of-type(3) > div.webis-ill-compl-wrapper.cw4` 188 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(-233.989deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.webis-ill-wrapper:nth-of-type(2) > div.webis-ill.ill3:nth-of-type(3) > div.webis-ill-circles-wrapper.cw1:nth-of-type(1) > div.webis-ill-circle.c1:nth-of-type(1) > div.webis-ill-compl-wrapper.cw1` 188 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(-233.989deg) skew(0deg, 0deg)`
  - script writes `transform` on `div.main-content:nth-of-type(5) > div#newweb:nth-of-type(5) > div.webis-bg:nth-of-type(1) > div.webis-ill-wrapper:nth-of-type(2) > div.webis-ill.ill2:nth-of-type(2)` 186 times over 10925 ms (on load): from `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` to `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-310.986deg) skew(0deg, 0deg)`
  - and 100 more recorded tracks (motion.json `recorded`)
- **Film:** `reference/motion/films/05-scripted-div.jpg` (Scripted div: 2 moving parts (transform, will-change); it is `div.main-content:nth-of-type(5) > div.scene-1:nth-of-type(1) > div.language-barrier-wrapper:nth-of-type(6) > div.barrier-text-overflow:nth-of-type(2) > div.barrier-text-wrapper` in the markup; frames captioned with ms).
