# Features & Content Requirements

Maps the four working website goals (see [[salon-manali]] memory, section 6)
to concrete features, and tracks what content each feature needs from the
real owner eventually (as opposed to the placeholder content we're using for
the pitch demo now — see [[pitch-strategy]] §3 and memory §0: this is
speculative pitch work, there's no client relationship yet to get real
content from).

Last updated: 2026-08-17

---

## Core features & functions (Step 3 of the site planning discussion)

Confirmed against [[site-structure]]'s 5 pages, mobile-first throughout since
that's how almost all real visitors will arrive (per [[trends-and-inspiration]]
§B.7 — 70%+ of salon site traffic is mobile).

### Navigation & header
- Sticky header: logo/name, hamburger menu (Home/Services/Gallery/About),
  and a **persistent "Book Now" button that's never inside the hamburger** —
  always one tap away on every page
- Footer on every page repeats address/phone/hours/map — contact info never
  more than zero extra clicks away

### Booking & contact
- **WhatsApp click-to-chat** (`wa.me` link with a pre-filled message) as the
  primary, lowest-friction action — matches confirmed regional norms
  ([[industry-findings]] §5)
- **Click-to-call** (`tel:` link) as a fallback for the same number
- **Structured bridal inquiry form** on the Book Now page: name, phone/
  WhatsApp, wedding date, ceremony time, headcount, on-location vs.
  in-salon, notes — mirrors the Trixies/Salon 253 Bride pattern
  ([[trends-and-inspiration]] §B.4). Submission mechanism (WhatsApp
  hand-off vs. a form backend service) to be finalized in Step 6 (tech)
- **Embedded map** pointing to Tanagalle Road, Devinuwara, Matara — marked
  approximate until the exact pin is confirmed
- A **floating WhatsApp quick-chat bubble** (bottom-right, mobile) in
  addition to the header "Book Now" button — the two serve different
  intents: the bubble is "ask something right now," Book Now is "see full
  options and submit a proper inquiry." This doubling-up is intentional,
  not redundant, given how central WhatsApp is in this market

### Gallery
- Responsive photo grid with a tap-to-enlarge lightbox (swipe between
  images on mobile)
- Optional style filter chips (All / Traditional / Modern / Mixed) — build
  the UI now even with placeholder images, since it demonstrates the
  segmentation pattern the research called out as a differentiator
  ([[competitor-research]], [[industry-findings]] §4)
- Lazy-loaded, responsive (`srcset`) images — keeps the page fast even
  though regional mobile data is decent ([[industry-findings]] §5)

### Services
- Service cards: name, short description, "starting from" price badge
- Bridal dressing/makeup leads; hair & beauty shown as a secondary,
  clearly-tentative section pending confirmation this branch offers them
- Each card's CTA routes to Book Now (carrying the selected service into
  the inquiry form where feasible)

### Testimonials (on Home, not a separate page)
- Lightweight horizontal scroll/carousel, no heavy JS dependency needed
- Honestly empty/"coming soon" for the demo rather than inventing quotes
  (see [[pitch-strategy]] §3)

### SEO & disambiguation (technical, high priority given the naming problem)
- Unique `<title>` + meta description per page, every one explicitly
  naming "Devinuwara" and "Matara" — directly targets the disambiguation
  problem from [[competitor-research]] §3
- `schema.org` LocalBusiness JSON-LD with the verified address and phone
- Open Graph tags for clean social-share previews
- Basic `sitemap.xml` / `robots.txt`

### Accessibility & performance essentials
- Alt text on all images; WCAG AA color contrast; keyboard-navigable menus
- Touch targets sized for thumbs (44px minimum)
- Target ~2 second load time ([[trends-and-inspiration]] §B.7) — minimal
  JS, compressed/responsive images

### Language
- English-primary site, matching every competitor researched and the
  aspirational tone expected of bridal marketing in this market
  ([[industry-findings]] §5) — no full bilingual site/i18n switcher; that
  would be over-engineering for a single small branch

## Goal → Feature mapping

| Goal | Feature(s) | Content for the pitch demo now | Real content needed once the owner says yes |
|---|---|---|---|
| Online booking/appointments | Booking CTA (WhatsApp click-to-chat is the leading candidate — form/phone/third-party widget as fallback) reachable from every page | Use researched phone 071 285 8857 as the WhatsApp/call target, clearly workable in the demo | Confirm this is the right number, confirm preferred booking method, real availability/hours |
| Showcase services & build trust | Bridal gallery, services list, testimonials, about/story | Placeholder bridal imagery + bridal-focused copy (verified as the flagship service) — see [[pitch-strategy]] §3 for the no-fabrication rule | Real bridal photos, full service list, any real customer reviews/quotes |
| Discoverability via search | Page titles/copy naming "Devinuwara, Matara" explicitly, Google Business Profile setup, basic local SEO structure | Can be fully built now — no owner input needed | Owner needs to actually claim/verify the Google Business Profile post-launch |
| General info & contact | Address, hours, map, phone on every page (footer) + dedicated contact section | Verified address (Tanagalle Road, Devinuwara, Matara) + verified phone; hours shown as a reasonable placeholder, clearly marked TBC | Confirmed real hours |

## Content inventory — what's real now vs. placeholder vs. needed later

Not a blocking "ask list" (see [[pitch-strategy]] §0/§3 — there's no client
relationship yet to ask). This tracks what to use for the demo and what
gets swapped in once the owner engages.

**Verified, use as real content:** address, phone, category, bridal focus.

**Use clearly-marked placeholders for the demo (never fabricate specifics —
see [[pitch-strategy]] §3):**
- [ ] Bridal photos → tasteful placeholder/stock imagery for now
- [ ] Pricing → illustrative "starting from" ranges sourced from comparable
      regional salons, marked as placeholder
- [ ] Hours → reasonable placeholder (e.g. pattern seen at other branches)
- [ ] Testimonials → leave structurally present but empty/"coming soon,"
      don't invent quotes

**To get from the real owner only if/when Phase 3 succeeds
([[roadmap]]):**
- [ ] Full confirmed service list (bridal-only, or also hair/beauty/facials?)
- [ ] Logo/brand colors if they exist, or confirmation we design fresh
- [ ] Answer on Manali Academy inclusion
- [ ] Clarification on relationship to other "Salon Manali" branches —
      affects legal name in footer and SEO disambiguation strategy
- [ ] Whether to set up Instagram/TikTok for this branch (currently has
      neither)

## Features NOT included in v1 scope

- Online payment processing — not requested, revisit only if client asks
  (PayHere deposit links noted as a future option in [[industry-findings]]
  §5 if it comes up later)
- Multi-branch/location switcher — out of scope (single-location site)
- Manali Academy / course enrollment — excluded pending confirmation
- E-commerce (product sales) — not mentioned as a goal, don't add
- Real-time calendar booking system (e.g. a full Fresha integration) — too
  much for a spec-work demo with no live business account behind it; the
  WhatsApp + inquiry-form flow covers the same need for now. Worth
  revisiting post-launch per [[trends-and-inspiration]] §D
- User accounts/login — nothing on this site needs one
- A CMS/admin panel — static content is fine while content is still
  placeholder-driven; revisit only if the real site needs frequent updates
  the owner should make themselves
- Blog — no goal calls for it; would add upkeep burden without a clear need
- Full bilingual (Sinhala/English) site or language switcher — English-
  primary is the confirmed regional pattern; a full i18n build would be
  over-engineering for a single small branch (see Language note above)
