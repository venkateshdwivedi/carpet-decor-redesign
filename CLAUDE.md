# House rules — web builds

## Before writing any UI code

Do not write code until these four exist, written into the project as DIRECTION.md:

1. Three real reference URLs, with one clause each on the single thing being borrowed.
2. One sentence on what this site feels like, using no adjective that could describe
   another company. "Premium", "modern", "clean", "sleek" are banned here.
3. A named display typeface, a named body typeface, and five hex values.
4. One signature move — the thing a visitor would describe to someone else.

If the brief is too thin to fill this in, stop and ask. Do not start anyway.

## Hard bans

- Display typeface: never Inter, Roboto, Arial, Helvetica, Open Sans, Montserrat,
  Poppins, Playfair Display, or a bare system-ui stack.
- No purple-to-blue or purple-to-pink gradients. No #6366f1 / #8b5cf6 / #a855f7
  as accent colours.
- No three-column grid of equal rounded cards with icon-title-paragraph.
- No centred hero with eyebrow label, two-line headline, muted subhead, twin buttons.
- No fade-and-slide-up on every section. No hover-lift on every card. Never apply one
  uniform transition to every element.
- No lorem ipsum, no invented testimonials, no fabricated metrics, no invented logos
  of real companies. Leave a labelled gap and ask.

## Motion (Carpet Decor override — this project only)

Every item is a mechanism. Animate transform and opacity only. No smooth-scroll library and NO Three.js — keep it lean: a 2D/SVG scene scrubbed by one ScrollTrigger. Everything here switches off under prefers-reduced-motion, and the page stays complete and readable without any of it.
1. A load intro: once per browser session, 1.6 s max, skipped on any click, key or scroll, skipped under prefers-reduced-motion. No progress bar, never waits for assets. All page text already in the HTML underneath.
2. One scroll-driven signature section (the wall that papers itself).
3. One thread through the page: a small trio of material swatches that travel section to section and land on real targets; they go home between stops.
4. Section headings may rise word by word, once each — never the h1 or any first-screen heading.
5. One line of copy may fill in with scroll; words never start below 30% opacity.
6. Real numbers may count up once. At most 4 photos get a slow depth move.
7. One sideways pinned strip, desktop only.
Interaction feedback (lightbox, filter swap, form states, sticky bar): 200 ms or less for state, 450 ms or less for photo entrances. No marquees, breathing shapes, drag carousels, pointer-tilt. Header and call-bar behaviour stay as LESSONS.md says. When more than one ScrollTrigger is pinned, give the pin higher up the page the higher refreshPriority so it is measured first, and call ScrollTrigger.refresh() after building them.

## Never negotiable

- Body text renders in the initial HTML. Never hide copy behind a scroll animation.
- Keyboard reachable, visible focus states, headings in order, alt text written.
- Contrast meets WCAG AA.
- Images have explicit dimensions. No layout shift.
- Works at 320px wide.

## Build one page first

Never generate a multi-page site in one pass. Build the homepage alone, open it in a
browser, and revise it at least three times before applying the system to other pages.

## Do not claim it is done

Open it in a browser, check mobile and desktop widths, scroll the whole page, tab
through it, read the console. Report what you actually saw.
