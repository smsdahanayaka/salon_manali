# UI/UX Flow (Step 4)

Written from the point of view of a real visitor on her phone — most
visitors will be a bride (or her mother/friend) searching on mobile. Every
page below is described top-to-bottom as it would appear on a phone screen
first (mobile-first), since that's how ~70%+ of visitors will actually see
it ([[trends-and-inspiration]] §B.7).

Last updated: 2026-08-17

---

## The user's mental journey (why the pages are ordered this way)

1. She finds the site (Google search, or a link someone sent her)
2. **First 3 seconds on Home:** "Is this a real bridal salon? Is it near
   me? Does it look trustworthy?"
3. She scrolls Home for photos and services
4. She checks **Services** to get a rough price idea before contacting
5. She checks **Gallery** to judge the quality of the work
6. She reads **About** if she wants more trust/reassurance
7. She goes to **Book Now** and either messages on WhatsApp right away
   (low commitment) or fills the bridal form (higher commitment, once
   she's decided)

Every page's job is to move her one step closer to step 7 without making
her hunt for the way to contact.

## Home

1. **Top bar (sticky):** small logo/name on the left, menu icon (☰) and a
   bright "Book Now" button on the right — both always visible, even while
   scrolling
2. **Hero (first thing she sees):** one photo or short photo set + one
   line: "Bridal Dressing & Beauty — Devinuwara, Matara" + a big "Book Now"
   or "Chat on WhatsApp" button, no scrolling needed to see it
3. **Featured work:** 3-4 bridal photos in a row, tap any to jump to
   Gallery
4. **Services preview:** 2-3 simple cards (icon + name + "From Rs. X"),
   each tappable → Services page
5. **Why choose us:** 3 short trust points with a small icon each (e.g.
   experienced team, friendly care, real local salon) — no long paragraphs
6. **Testimonials:** a row she can swipe left/right — shows "coming soon"
   honestly for now, no fake quotes ([[pitch-strategy]] §3)
7. **Contact strip:** map, address, phone, hours — repeated in the footer
   of every page too
8. **Floating WhatsApp button:** small green circle, bottom-right corner,
   stays on screen the whole time she scrolls

## Services

1. Top bar (same as Home)
2. Page title: "Our Services"
3. Bridal dressing & makeup shown first and biggest — photo, short
   description, "From Rs. X" price tag, a button "Ask About This"
4. Other services (hair, facials — if confirmed) listed below, simpler
   cards, same price-tag pattern
5. Bottom: "Not sure what you need? Just message us" + WhatsApp button —
   catches anyone who scrolled the whole page without tapping anything yet

## Gallery

1. Top bar
2. Page title: "Our Bridal Work"
3. Small filter buttons across the top (All / Traditional / Modern) — a
   row she can scroll sideways with her thumb if it doesn't fit
4. Photos in a 2-per-row grid (big enough to actually see the work on a
   small screen, not squeezed into 3-4 per row)
5. Tap a photo → it opens full-screen, swipe left/right to see the next
   one, easy to close
6. Bottom: "Like what you see? Book your date" + button to Book Now

## About

1. Top bar
2. A photo of the salon/space (or a warm placeholder for the demo)
3. The salon's story — short paragraphs, easy to read on a small screen,
   not a big wall of text
4. A clear, repeated line: "Salon Manali — Devinuwara, Matara" so it's
   obvious which branch this is (the disambiguation moment —
   [[competitor-research]] §3)
5. Map + address again at the bottom

## Book Now

1. Top bar
2. **Two big buttons right at the top**, for people in a hurry: "Chat on
   WhatsApp" (green) and "Call Now" (with the phone icon) — no scrolling
   needed to reach either
3. Below that, for people who want to give full details: a simple bridal
   inquiry form — Name, Phone/WhatsApp, Wedding Date (date picker),
   Ceremony Time, Number of People, Location (At Salon / At My Place),
   Message box, one Submit button
4. Below the form: map, address, hours

## Mobile UI rules to follow everywhere

- **Big, easy-to-tap buttons** — thumbs, not mouse pointers, are doing the
  tapping (minimum ~44px tap targets)
- **One column, top-to-bottom** — never side-by-side boxes that force
  pinch-zooming to read
- **Short text blocks** — a phone screen is narrow; long paragraphs feel
  like a wall of text and get skipped
- **Text big enough to read without zooming**
- **"Book Now" always reachable** — in the sticky header on every page,
  never buried
- **Fast to load** — small, compressed photos, nothing heavy or slow
- **Warm, welcoming look** — this is a bridal business; it should feel
  personal, not corporate (visual detail comes in Step 5 — design
  direction)

## What we are deliberately NOT doing

- No pinch-to-zoom-required layouts — everything sized for a small screen
  by default
- No auto-playing video with sound — intrusive on mobile, easy to get
  wrong
- No pop-ups/interstitials asking for email etc. — nothing should get in
  the way of finding "Book Now"
- No multi-step "wizard" booking flow — one simple form, one page
