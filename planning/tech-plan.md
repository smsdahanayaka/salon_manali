# Tech Plan (Step 6)

How we'll actually build and host the site. Framework and host chosen by
the user (Next.js, own VPS); this file works out the specific setup that
keeps things simple and matches every decision made in Steps 1-5.

Last updated: 2026-08-17

---

## Framework & styling

- **Next.js (App Router)** — as decided. Routes map directly to the 5 pages
  from [[site-structure]]: `/`, `/services`, `/gallery`, `/about`, `/book`
- **Tailwind CSS** for styling — fast to build mobile-first, responsive
  layouts with, matches the breakpoint-heavy plan in [[ui-ux-flow]]
- **`next/font`** for the serif + sans-serif pairing from
  [[design-direction]] — self-hosted, no external font-CDN calls, keeps
  load time fast on mobile

## Rendering mode: static export

Recommending **static export** (`output: 'export'` in `next.config`) rather
than running Next.js as a live Node server:

- All 5 pages are fixed content — nothing needs per-request server
  rendering or a database right now (see "NOT included in v1" in
  [[features-and-content]] — no CMS, no accounts, no live booking system)
- Static export means the VPS just needs **Nginx serving plain files** —
  no Node process to keep running, no PM2, nothing that can crash at 2am.
  Simplest and cheapest thing that works
- Fastest possible load time for mobile visitors, which matters a lot
  given [[trends-and-inspiration]] §B.7's ~2 second target

**Trade-off to know about:** static export can't run Next.js API routes.
That's why the booking form is handled client-side instead (see below) —
so this trade-off costs us nothing right now. If the project grows later
into needing a real backend (live availability calendar, stored form
submissions, a CMS), switching to a full Node server (`next start` + PM2 +
Nginx reverse proxy) on the same VPS is a well-understood, standard
upgrade path — not a rebuild.

## Booking form → WhatsApp, no backend needed

The bridal inquiry form from [[ui-ux-flow]] doesn't need a server at all:
on submit, client-side JavaScript builds a pre-filled WhatsApp link
(`wa.me/94712858857?text=...`) from the form fields (name, date, ceremony
time, headcount, location) and opens it. This:
- Needs zero backend, zero form-service account, zero email setup
- Matches the confirmed regional WhatsApp-first booking culture
  ([[industry-findings]] §5) better than a silent "thanks, we'll email you"
  form ever would
- If real stored/emailed submissions are wanted later (not just WhatsApp),
  a third-party form service (e.g. Formspree) can be added without giving
  up static export — noted as an easy future option, not needed now

## Images & maps

- `next/image` with `unoptimized: true` (required for static export) —
  images pre-sized/compressed at build time instead
- Google Maps: a plain `<iframe>` embed pointing at Tanagalle Road,
  Devinuwara, Matara — no API key needed for a basic embed

## SEO implementation

Directly implements the disambiguation strategy from
[[competitor-research]] §3 and [[features-and-content]]:
- Per-page metadata via the Next.js Metadata API — every page's title and
  description explicitly name "Devinuwara" and "Matara"
- `schema.org` LocalBusiness JSON-LD (address, phone) injected per page
- Hand-written `sitemap.xml` and `robots.txt` (small site, doesn't need a
  generator package)

## Deployment to the VPS

1. `next build` (static export) → produces a folder of plain HTML/CSS/JS
2. Copy that folder to the VPS (`rsync` or `scp`)
3. Nginx serves it as static files
4. HTTPS via Let's Encrypt (`certbot`) — needed for both visitor trust and
   basic SEO
5. Domain: point DNS at the VPS once a domain is chosen (not decided yet)

## Important: staying private until Phase 3

Per [[pitch-strategy]] §5, this demo should **not go live on a public
domain branded as the real salon** until the owner has actually agreed —
there's no relationship yet (see [[salon-manali]] memory §0). For now,
deploy to a private path/subdomain on the VPS (or just run it locally) for
review, not a domain that presents itself as the salon's real live site.

## One housekeeping item before writing code

This project folder isn't a git repository yet. Recommend initializing
git now, before the actual Next.js project is scaffolded, so all the code
changes going forward are tracked properly.
