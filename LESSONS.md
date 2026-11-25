# Lessons from earlier builds (Bhumi → Mangesh → Harsiddhi → Studio 7)

## Keep exactly as is (proven on a real phone)
- Header: `.top{position:sticky}`. Do NOT switch it to position:fixed.
- Call bar: position:fixed bottom + the visualViewport script that keeps it on the
  visible bottom edge. Do NOT remove that script.
- Do NOT add ScrollTrigger.config({ignoreMobileResize:true}).
These were "improved" once on Mangesh and broke on a real phone; reverting to the Bhumi
code fixed it. Browser-pane tests passed both times, so only a real phone shows this.
- Changing only the colour variables inside the header/bar CSS is fine (done on Harsiddhi).

## Photos
- Use only photos uploaded by the business's own Google profile. In the Maps photo viewer,
  an owner upload shows a "View <business name>'s profile" link (a /maps/contrib/ link).
  A photo credited to a customer's name: skip it, even if that customer posted most photos.
- The limited Maps view loads about 10 items. That's fine; say how many of the total you saw.
- Flag possible 3D renders (PNG, perfect lighting, nothing real through windows). If unsure,
  say so in DIRECTION.md and list it as a question for the client.
- Mid-install photos (protective film, tools or bags on floor) are useful: caption them honestly.
- Crop out phone watermarks (e.g. "Galaxy S26") and identifiable people (workers, family);
  list the crop as a client question.
- Furniture in a photo may be bought, not made by them (sofas, lamps, art): caption only what
  they made, and ask.
- Export as .webp in img/ with explicit width/height. Portraits 900x1125, strip 700x875.
- Make img/og-image.jpg (1200x630) from one owner photo.

- A listing can have ZERO owner photos. A single tile with a 360° icon is Google Street View,
  not an owner upload (Studio 7). Then: no photo rows, labelled "photo to come" gaps, a type-only
  og-image, and say so in DIRECTION.md before building.
- Redesign of an existing website: the photos on the business's own website count as owner photos.
  Still strip client names from filenames, captions and alt text.

## Reviews & facts
- Quote short, exact lines from Google reviews; first name + initial. Keep their spelling.
- Thin listings happen (1 review, no hours, no website). Show it honestly:
  "5.0 from 1 Google review so far", "Hours not listed yet. Please call before visiting."
  Never pad with invented reviews or a fake hours line.
- Anything not on the listing goes under "Labelled gaps": WhatsApp, Instagram, owner name,
  years in business, brands, warranty, prices, free site visit, showroom vs office, areas
  served, job durations.
- If the listing spelling and the Devanagari name disagree, ask which one to use.
- A stars-only review has no text to quote. Show the rating and say "stars only"; quote nothing.
- Testimonials already on a client's website still need checking: no surname, no date or foreign
  wording (e.g. "condo" in Pune) means ask before reusing them.
- Don't put the Google rating into schema aggregateRating. No openingHours if none listed.

## Colours and finishes
- Take the five site colours and the 3D finishes from the client's own photos.
- Photo colours sample dark/grey: set swatch hexes by eye and record the measured value
  next to them in DIRECTION.md.
- If no owner photo shows a kitchen, don't fake one: use a labelled "photo to come" gap
  in that row and let the 3D build carry it.

## Layout fixes already learned
- A hero photo pushes the quote form a full screen down on phones: hide it under 900px
  and show it further down the page instead (a .narrow-only copy in a strip).
- Focus outline must stay visible on dark sections too.
- Check the accent colour as TEXT on every block colour, not only on the page background.
  Studio 7: tile red on the ochre build block was 4.2:1 (fail); it needed a darker red there.
- 3D marble veins stay faint (alpha ≤ .4) or they look like cracks.
- At 320px the brand name must not wrap; shrink it.
- h1: use text-wrap:balance so no single word sits alone on a line.
- Short screens while the build section is held on screen during scroll:
  desktop ≤880px tall → hide the build sub-line;
  phone ≤700px tall → hide the build section label and set the build h2 to 22px.

## Borrowed from Eat Move Rest (already in index.html, keep it)
- The page told as one project: small section labels ("Call · Site visit", "Making",
  "Fitting", "Handover", "Find us"). Add "Years later" only if a review supports it.
  No durations unless the client gives them.
- A thin progress rail beside the 3D stage that fills (scaleY) from the same ScrollTrigger
  progress value as the build. It is part of the one animation, not a second one.
- Flat colour blocks per section, taken from this client's own materials. No colour fades.
- One team card only if the client gives a real name and photo. At most one handwritten aside.

Do NOT borrow: scrolling marquees, breathing circle, drag carousel, loading screen.

## Must look different from earlier sites
- Bhumi: Fraunces + Instrument Sans; cream #F4EEE2, teal #123F3A, saffron #B5461B;
  plywood-edge motif; headline "Kitchens built to your walls, not a catalogue."
- Mangesh: Bricolage Grotesque + Figtree; marble #F1F0EC, taupe #4E443E, petrol #1D5870,
  amber #F3C975; LED-strip motif; headline "Bare walls in. A finished home out."
- Harsiddhi: Young Serif + Hanken Grotesk (+ Tiro Devanagari Hindi); chalk #EDF0EA,
  sage #CFDAD2, walnut #2B1D16, rose #8C3A45, navy #233041; chevron-seam motif
  (two peaks where sections meet); headline "Measured once. Fitted room by room."

- Studio 7: Big Shoulders Display + Libre Franklin (+ Mukta); lime #ECEAE4, ochre #D7A85A,
  gate charcoal #26292C, tile red #8E3B2A, leaf green #3E5641; "7-bracket" motif (set-square
  corner mark); headline "From the first drawing to the last fitting."

- Shubhchintan: Instrument Serif + Karla; paper #F8F5EF, ink #12302F, teal #0B9798
  (deep #086B6C for AA), walnut #6B4A2E; Vastu 3×3-grid motif + three travelling logo dots
  + a scroll-driven compass; headline "Interior design and Vastu, drawn on one plan."

New site needs its own display + body fonts, five new hex values, its own static motif,
its own headline, and a finish set taken from its own photos.

## Previous client's details (search for these before saying done)
Harsiddhi, Harsddhi, हरसिद्धि, 63773, 6377344815, Katraj, Rajas, 411046, Swaropsingh,
Studio 7, स्टूडियो, 98223, 9822313261, Lane no:4, Bungalow no: B2, Vikas, 18.5748449
(Not 411015 or Vishrantwadi: a later client may really be there.)
Shubhchintan, शुभचिंतन, Navgire, Sanjay, Swati, 9422026745, 94220, 9423567491, 94235,
Vishrantwadi, Wakadewadi, Shivaji Nagar, 411005, 18.5374722, Instrument Serif, Karla,
0B9798, 086B6C.

## Checks before saying done
1. 1366×800, 375×812 and 320×640.
2. Scroll the whole page; tab through it; read the console.
3. Submit the form in preview mode (empty once, then filled).
4. No sideways scroll at any width.
5. At the end of the held build section, step 05 and its text sit above the call bar.
6. Search for the previous client's details (list above).
7. Then test on a real phone over Wi-Fi.

## Motion (what worked on Shubhchintan)
- Load GSAP + ScrollTrigger from cdnjs with `defer`.
- A 2D/SVG scrubbed scene reads as well as Three.js, weighs ~6 KB not ~600 KB, and is the
  only thing that behaves at 320px.
- The "one thread" is a fixed layer of a few brand marks moved every frame in
  `gsap.ticker` by lerping toward DOM targets' `getBoundingClientRect`, returning home
  between stops.
- A fixed indicator driven by scrollY vs each section's data-attribute, which under reduced
  motion jumps between sections instead of tweening.
- Two pinned triggers must be measured top-first (refreshPriority) or a later scrub fires
  thousands of px early.
- Never mask the h1 or first-screen heading; set an aria-label on any heading before
  splitting it into word-spans.
- Reduced motion removes the intro, every scrub, every pin and the travelling marks — and
  the page must still look finished.
- The in-app browser pane nearly freezes animations while hidden (step `gsap.ticker` by hand
  to verify, but real smoothness needs a visible pane or a real phone).
- Lightbox grows from its tile (FLIP) ≤300 ms, filter re-entrances ≤450 ms.