# Design Direction (Step 5)

Visual direction for the pitch demo — grounded in [[trends-and-inspiration]]
(global 2026 salon-site patterns) and [[industry-findings]] §3 (confirmed
Sri Lankan bridal color/style culture), not generic guesswork. Single light
theme — no dark mode (see rationale below).

Last updated: 2026-08-17

---

## Mood

**Warm. Premium. Trustworthy. Personal — not corporate.**
This is a bridal business; the site should feel like a place that cares
about one of the biggest days of someone's life, not a generic company
site. Elegant but approachable, not intimidating or overly formal.

## Color palette

Sri Lankan bridal culture leans on gold, maroon, and blush tones
([[industry-findings]] §3); paired here with a warm cream base and soft
charcoal text so it stays readable and calm on a small phone screen rather
than loud.

| Role | Color | Hex (starting point) |
|---|---|---|
| Background | Warm cream/ivory (not stark white — feels warmer, more premium) | `#FBF6EF` |
| Body text | Soft charcoal (not pure black — gentler on the eyes) | `#2B2420` |
| Primary accent (Book Now buttons, links, highlights) | Warm terracotta-gold | `#A8672E` |
| Secondary accent (headings, section dividers, small details) | Deep maroon/wine | `#6B1E2B` |
| Soft section background (alternating sections, cards) | Blush/dusty rose | `#F0DCC9` |
| WhatsApp button | Standard WhatsApp green — kept as-is, not re-themed | `#25D366` |

Keeping WhatsApp's own green for the WhatsApp button is deliberate — it's an
instantly recognizable signal that reduces hesitation to tap it, more
important here than strict brand-color consistency.

*(Exact hex values may need small contrast adjustments once built — treat
these as the starting palette, not final locked values.)*

## Typography

Matches the "elegant serif headings + clean sans-serif body" pattern found
repeatedly in [[trends-and-inspiration]] §B.2:

- **Headings:** an elegant serif (e.g. Playfair Display or Cormorant
  Garamond) — gives the bridal, premium feel
- **Body text / buttons / forms:** a clean, highly-readable sans-serif
  (e.g. Inter or Noto Sans) — prioritizes mobile legibility over style
- Base body text sized for phones (~16-18px) so nobody has to zoom in to
  read it

## Imagery style

- Warm-toned, editorial bridal photography — full-bleed hero images,
  consistent cropping/lighting across the gallery (per
  [[trends-and-inspiration]] §B.5 — "consistency beats volume")
- For the demo: cohesive placeholder imagery in this same warm style, never
  mismatched stock photos, and never presented as this salon's real work
  ([[pitch-strategy]] §3)

## Components

- **Buttons:** soft-rounded corners (not sharp/boxy) — feels warmer and
  more personal, matching the mood. Primary buttons filled in the
  terracotta-gold accent with white text; WhatsApp button in WhatsApp green
- **Cards** (services, gallery, testimonials): soft rounded corners, a
  gentle shadow, generous padding — avoids a cramped, cluttered feel on a
  small screen
- **Layout:** generous whitespace, one clear focal point per section —
  matches the "2026 minimalism earns restraint through clearer hierarchy"
  trend ([[trends-and-inspiration]] §B.2), not empty-for-its-own-sake

## Logo / brand mark

No real logo exists yet (unconfirmed — [[salon-manali]] memory §8). For the
demo, use a simple text-based wordmark ("Salon Manali") set in the heading
serif font, rather than inventing fake logo artwork that could be mistaken
for a real brand asset. A proper logo is a real-owner decision for later.

## Why light-only, no dark mode

Every bridal salon site researched (ALEE, Salon Nayanart, Eueni, Diva and
Debonair, Studio Bride, etc.) uses a light, airy look — it's the genre
convention because it matches how bridal/wedding content is usually
photographed and read. Building a dark mode too would add real effort for
a need nobody in this space actually has — skipping it is a deliberate
scope choice, not an oversight.
