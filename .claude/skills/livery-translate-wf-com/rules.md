# translate-wf.com: design rules

A light interface on a near-white neutral background where an indigo accent marks the next step. Type is system-ui, corners are fully rounded on controls, and depth comes from soft neutral shadows.

## Principles

### Soft, neutral depth

Lift raised elements with the measured shadow (rgb(255, 129, 119) 0px 0px 0px 4px).

_Why:_ Shadows appear on about 77% of elements; they mark what floats above the page.

### Big type, quiet body

Pair 86.5px headings with 17.5px body text in system-ui.

_Why:_ A 4.9× jump between headline and body creates strong hierarchy with few elements.

### A steady rhythm

Space everything on the 4px grid: 4, 8, 16, 24, 32, 64, 84, 92px.

_Why:_ 72% of measured spacing values fall on this grid, which is what makes the layout feel ordered.

### Rounded and approachable

Use pill shapes for buttons and chips, and 3px corners for containers.

_Why:_ Fully rounded shapes make up 74% of measured radii; they soften an otherwise structured page.

## Never

- **Never introduce a second accent colour.** Only one saturated colour (#3c46fb) carries weight in the measured palette.
- **Never animate longer than 100ms.** Every measured transition finishes within 100ms; slower motion would feel heavy here.
- **Never set button labels in all capitals.** No measured button uses uppercase text.
- **Never mix in a second display typeface.** Headings and body share system-ui; a second family would split the voice.
- **Never use spacing off the 4px grid.** 72% of measured spacing sits on it.

## Colour

- Light theme: near-white neutral background (#ffffff) with #eee3ff surfaces.
- Body text #18154c on the background reads at 16.8:1.
- Accent #3c46fb (indigo) with #ffffff text on top of it.

## Typography

- system-ui throughout.
- Scale: display 86.5px, h1 48px, h2 36px, h3 28px, h4 24px, h5 20px, h6 19px.
- Weights in use: 400, 700.

## Shape and depth

- Radii: 3px (16%), 160px (10%), pill (74%).
- Borders: 1px in #e7e4e9.
- Shadows: rgb(255, 129, 119) 0px 0px 0px 4px | rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px.
