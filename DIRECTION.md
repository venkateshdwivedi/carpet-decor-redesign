# DIRECTION — Carpet Furnishing Service & Decor (Lucknow)

A lean **redesign mockup** for a pitch. Homepage only. Not commissioned yet.
Written before any UI code, per CLAUDE.md. **Awaiting client/owner OK before build.**

---

## 1. Three reference URLs — one borrowed thing each

1. **https://eat-move-rest-concept.netlify.app/** — borrow the *mechanism* only: one
   continuous scene that re-forms section to section, driven by a single scroll-progress
   value with a thin progress rail beside it. (Not its look, palette or copy.)
2. **https://pinnaklemedia.com/** — borrow the *mechanism* only: a path that draws as you
   scroll with a marker advancing along it (GSAP ScrollTrigger; MotionPathPlugin optional),
   plus small stat cards that count up once. (Not its dark theme or layout.)
3. **https://wallicon.in/** — borrow the *product-range taxonomy* only (what a wall-products
   shop stocks) to shape the gallery filters and the "what we do" list. NOT its green, NOT
   its blank-until-JS render, NOT its PIN-code popup. (Almost certainly a supplier, not this
   shop — first client question.)

Header, mobile call-bar, honeypot enquiry form + Apps-Script wiring and the "one thread"
travelling-marks pattern are lifted from our own prior build (reference-build / Shubhchintan),
kept exactly as LESSONS.md requires; only colour variables change.

## 2. What this site feels like (one sentence, no adjective that could describe another company)

> It feels like walking the length of a Maulviganj wallpaper shop where every wall is a
> different finished room, and watching a roll come down off the rack and paper itself onto
> your own wall before you've left the counter.

## 3. Type + colour

- **Display typeface:** **Hepta Slab** (Google Fonts, variable) — a sturdy shop-board slab
  that reads at 320px and carries weight for a decades-old Lucknow shop. Not in the CLAUDE.md
  ban list; used by none of the earlier builds.
- **Body typeface:** **Spline Sans** (Google Fonts, variable) — neutral grotesque, distinct
  from Instrument Sans / Figtree / Hanken Grotesk / Libre Franklin / Karla used before.
- **Devanagari (shop name + any Hindi):** **Hind** (Google Fonts) — for
  कार्पेट फर्निशिंग सर्विस & डेकोर. (Not Tiro Devanagari Hindi / Mukta, used before.)

**Five hex values** (ground + ink + accent taken from THEIR OWN photo, measured for AA):

| Role | Hex | Source | Contrast (measured) |
|---|---|---|---|
| Bone — ground | `#F3EDE3` | warm limewash neutral | — |
| Ink — body text | `#1B2A22` | the deep green of their showroom wall (photo-01 sampled `#1E2316`) | **12.9:1** on bone (AAA) |
| Green — primary accent | `#2E6A4C` | their botanical showroom wall (photo-01) | **5.5:1** on bone (AA text), 6.4:1 on white |
| Deep green — AA-critical/dark | `#245237` | darker shade of the same wall | **7.7:1** on bone (AAA); bone-on-it 7.7:1 |
| Brass — warm accent | `#A9742F` | gold damask + brass frames (photo-04) | **3.45:1** on bone → **graphic / large-only**, never small body text |

Accent is genuinely theirs (sampled from their own showroom wall), not wallicon.in's green.
Brass is restricted to rules, large numerals and fills; AA recorded above.

## 4. Signature move (proposed — pick one)

**A. "Watch the wall finish itself"** *(recommended)* — a scroll-driven feature wall, 2D/SVG,
scrubbed by **one** ScrollTrigger (NO Three.js). A wallpaper roll at the top unrolls down the
wall and its pattern fills in (CSS/SVG transform + clip); as it completes the room settles —
a curtain drops, a carpet unrolls on the floor, a sofa/cushion fades in — ending on one of
their real finished rooms (photo-01 green room, or photo-09 roses). One progress value drives
the roll, a thin "metres" rail and the travelling swatch trio. End CTA: **"Get this wall —
book a free measure."** Memorable, matches their core wallpaper-install service, and the
"measured, cut only once you say yes" line answers the old 1-star complaint.

**B. "The pattern book"** *(alternative)* — a scroll-scrubbed sample book: wallpaper → wall
panel → flooring → carpet swatches flip/slot onto the same room silhouette one finish at a
time, like turning the pages of a swatch book. Single ScrollTrigger scrubs a horizontal rail
feeding the wall.

**Recommendation: A.** It's the thing a visitor describes to someone else, it's the shop's
actual trade, and it lands on a real photo instead of an abstraction.

- **The "one thread":** three material swatches (wallpaper / fabric / carpet-corner) that
  travel the page and land on real targets — the enquiry form, the gallery filters, the 4.5★
  rating, the phone number. They return home between stops. (Per LESSONS.md mechanism.)
- **Static motif:** a **drop-match seam** — a thin vertical line with a small registration
  tick where two wallpaper strips meet true to plumb. Used as section dividers / list bullet.
  Distinct from plywood-edge, LED-strip, chevron-seam, 7-bracket and Vastu-grid motifs.
- **Stat cards (pinnakle-style, count up once):** 4.5★ · 62 Google reviews · years in Lucknow
  (**years = gap, confirm**).

## 5. Facts (gathered — not re-fetched)

| Field | Value | Note |
|---|---|---|
| Name | Carpet Furnishing Service & Decor / कार्पेट फर्निशिंग सर्विस & डेकोर | confirmed on listing |
| Category | Wallpaper store (+ furnishing, carpets, blinds, interior decor, installation) | |
| Address | Maulviganj, Wazirganj, Lucknow, Uttar Pradesh 226018 · Plus code VW3F+W3 | confirmed |
| Coordinates | 26.8548702, 80.9226416 | from listing |
| Phone | 095989 59954 → `tel:+919598959954` / `wa.me/919598959954` | on WhatsApp? = gap |
| Hours | "Open 24 hours" (Google) | unusual for a shop = verify, gap |
| Rating | 4.5 from 62 Google reviews | NOT put into schema aggregateRating (LESSONS.md) |
| Photos on listing | ~359 (mostly owner uploads); limited pane showed ~10 | we used 10 (see §6) |
| Owner (in reviews) | Mr Inzamam | confirm spelling = gap |
| Website | none on listing | the core problem we fix |

**Quotable review lines** (exact, short): "He provided me imported wallpaper in affordable
price." — Dharmendra S. · "Nice work done by their team." — Piyush S.
**One 1-star** (5 yrs old): wrong room measurement, chosen samples out of stock, unresolved.
Not featured. Answered on the page with the **free-measure, confirmed-before-we-cut** promise.

## 6. Photos (owner listing uploads; `raw/` not shipped → export to `img/gallery/` as .webp 640w+1280w)

Saw **10 of ~359** in the limited Maps pane. Could not individually confirm each photo's
"View profile" contrib link in the pane — recommend confirming owner-authorship before publish.

| File (raw) | Native | Shows | Flags |
|---|---|---|---|
| photo-01 | 896×600 | Their showroom: deep-green botanical wallpaper wall, white desks, sage chairs, tiled floor | **Lead / og-image.** Accent sampled here. Clean, no people |
| photo-02 | 1280×720 | Black-and-white wavy op-art wallpaper mid-install | Worker (back, blurred) — crop/flag; install-in-progress |
| photo-03 | 1280×720 | Maroon damask wallpaper + red curtain & valance + floral carpet | Full-room furnishing; no people |
| photo-04 | 800×654 | Gold damask wallpaper + plaster rosette + upholstered settee | Sofa may be bought, not theirs — caption wall only; no people |
| photo-05 | 450×300 | Man kneeling, laying vinyl/PVC floor planks | **Likely STOCK** (low-res, generic), face visible — confirm or drop |
| photo-06 | 1280×720 | Standing rolls: checker / metallic / wood-grain wallpaper | Product range; no people |
| photo-07 | 1280×720 | Cream berry-and-bead pattern wallpaper, mid-install | Install-in-progress; no people |
| photo-08 | 1280×720 | Standing rolls: colourful geometric / floral patterns | Product range; no people |
| photo-09 | 1280×720 | Big pink-roses wallpaper room + matching floral curtain | Bright; no people |
| photo-10 | 1280×720 | Kids' room: green-stripe wallpaper with Winnie-the-Pooh/Tigger | **Licensed Disney characters** in the installed product — flag; dim/amateur |

**Gallery plan:** lead with 01, 03, 04, 06, 07, 08, 09, 02 (8 strong). Hold 05 (stock?) and
10 (licensed chars) pending client OK. **Carpet & flooring coverage is thin (really only 03 +
05) — request more photos** (see gaps). og-image 1200×630 from photo-01.

**Filter chips matched to what the photos actually show:** All · Wallpaper · Rolls & range ·
Curtains & blinds · Carpet & furnishing · Install. (No "Panels / 3D" chip — **no photo shows a
3D/fluted/louvre panel**; add the chip only if the client sends panel photos.)

## 7. Fixed in this redesign

- **No website at all** on their Maps listing → a real homepage a Lucknow customer can find.
- **Nowhere to see real work** → an accessible, filtered, lazy-loaded gallery of their own rooms.
- **No easy way to leave details** → a short honeypot enquiry form high on the page (name,
  10-digit mobile, "what do you need?", room, area, optional message; no email required) +
  WhatsApp click-to-chat + an after-submit "send a photo of your wall" link.
- **wallicon.in renders blank until heavy JS loads, and gates you behind a PIN-code popup**
  → our page shows body copy in the initial HTML, works at 320px, no popup wall.
- **The 5-year-old 1-star measurement complaint** → answered on-page with a
  "free measure, confirmed before we cut anything" promise (not featured, not hidden).

## 8. Labelled gaps / client questions

1. Is **wallicon.in** yours, or just a supplier whose catalogue you stock?
2. Is **95989 59954** on **WhatsApp**? (The whole mobile CTA depends on it.)
3. Are you really **open 24 hours**, or should we show real shop hours?
4. **Years in business** in Lucknow? (for the stat card)
5. Owner **name/spelling** — is it **Mr Inzamam**?
6. Which **product lines to lead with** (wallpaper / panels / flooring / blinds / carpet / full room)?
7. Do you **install**, or supply-only? Any supply + fit split?
8. Which **areas of Lucknow** do you serve / deliver to?
9. Do you want a **live chat** widget? (none added; third-party widgets excluded by house rules)
10. Is the old **1-star** issue resolved — can we say so, or just keep the free-measure promise?
11. Can you send **more carpet, flooring and (if any) 3D-panel photos**? Current set is wallpaper-heavy.
12. OK to use **photo-05** (looks like a stock flooring image) and **photo-10** (Disney-character
    kids' wallpaper)? Default: drop both unless you confirm they're your own work.
13. Confirm the **"what do you need?"** option list: Wallpaper / Wall panels / Flooring /
    Blinds & curtains / Carpet / Full room — right set?

---

### After OK (build plan, lean)
Homepage only. `.claude/launch.json` → name **carpet-decor**, port **5178**. Export the 8–10
chosen photos to `img/gallery/` (.webp 640w+1280w, explicit w/h) + og-image. Update
`apps-script.gs` → sheet **"Carpet Decor leads"**, a need/service column, subject routed by
need. Build, then revise ≥3× and test at 1366×800 / 375×812 / 320×640 (scroll, tab, console,
form empty+filled, intro skip, reduced-motion, no sideways scroll, pinned section clears the
call bar) and search for Shubhchintan/Studio-7 leftovers before saying done.
