# Salon Manali — Project Memory

Living reference for who this client is, what we know for certain, what's still
open, and the decisions made along the way. Update this file whenever a fact
is confirmed, corrected, or a new decision is made — this is the file to
re-read at the start of any future session on this project.

Last updated: 2026-08-17

---

## 0. Project nature — this is a speculative pitch, not a commissioned job

🚩 **Critical context, added 2026-08-17 — read this before anything else in
this file.** There has been **no direct contact with the salon owner at
all.** The user's actual plan, in their own words:

> "we are not still directly discuss with client... I find this saloon in
> fb... and they have no already website... then I decide I create website
> for they and after it present to they and if they ok to buy then we can
> sell it."

In plain terms: the user found this salon on Facebook, noticed it has no
website, and is **building a website speculatively (spec work) to pitch to
the owner afterward.** It only becomes a real paid engagement if/when the
owner sees it and agrees to buy it. This is a sales/business-development
project as much as a design project.

**What this changes, concretely:**

- Every "client decision" or "client confirmed" note elsewhere in this file
  (scope, goals, etc.) was actually the **user** deciding, standing in for
  the not-yet-contacted owner — not the salon owner themselves. Treat those
  as our own working assumptions for the pitch, not verified requirements.
- The "open questions for the client" (§8) mostly **cannot be resolved
  right now** — there's no relationship to ask through yet. Where the build
  needs an answer, make the most reasonable, research-backed assumption and
  **mark it clearly as a placeholder/assumption**, rather than treating it
  as a hard blocker. Nothing here should stall the build.
- **Content strategy while unconfirmed:** use verified public facts freely
  (address, phone, category, bridal focus — these are real). For anything
  we don't have real assets for (bridal photos, exact pricing, hours,
  testimonials), use honest, clearly-placeholder content or tasteful
  generic/stock imagery — never invent specific fabricated claims (a named
  fake testimonial, a fake review count, a fake "X brides styled" number)
  that would misrepresent the business if shown to the owner or anyone
  else. The goal is a *credible, professional-looking draft*, not a
  finished, factually-accurate public site.
- **The success metric for this phase is "the owner says yes,"** not
  "launch a live public site." The pitch itself should lean on the
  differentiation research already done (the naming-confusion problem only
  the real owner would recognize as a genuine pain point, the local
  competitive gaps, etc.) as much as on visual polish — see
  [[pitch-strategy]] for how this shapes the plan.

## 1. Who the client is

**Salon Manali** is a beauty & bridal dressing salon located on **Tanagalle
Road, Devinuwara, Matara, Sri Lanka** (Southern Province). It currently has
**no website** — its only online presence is a Facebook page:
https://www.facebook.com/profile.php?id=100063475393190
(same page, cleaner URL: https://www.facebook.com/p/Salon-manali-100063475393190/)

- **Phone:** 071 285 8857 (appears in the salon's own FB posts/videos as the
  booking number for this branch)
- **Category:** Beauty salon / bridal dressing studio

⚠️ Important naming note: "Salon Manali" is **not a single-location brand**.
The same name is used by at least 9-10 separately-listed salons across Sri
Lanka — Kurunegala/Katunayake (**98,657 Facebook likes**), Nittambuwa
(**71,619 likes**), Kadawatha (appears to be the largest/registered entity,
"Salon Manali (Pvt) Ltd", est. ~2013), Galle (~10,754 likes), Middeniya, and
smaller ones in Gelioya, Ampara/Uhana, Gonawala, Eheliyagoda. **It is not yet
confirmed whether the Devinuwara branch is formally part of that Pvt Ltd
company or an independently-run salon that simply shares a popular name.**
See open questions below — this affects branding/trademark decisions and SEO
disambiguation. Full detail in [[competitor-research]] §3.

🚩 **Critical finding (2026-08-17 deep research):** even Facebook's own
location tagging for our client's page indexes it as **"Salon manali |
Matara"** — generic to the district, not the specific town — even though the
salon's own post content explicitly says "Devinuwara." The client's *own*
current online presence is already contributing to the disambiguation
problem the new site needs to solve. The website must aggressively and
consistently anchor "Devinuwara," "Tanagalle Road," and "Matara District" —
not just "Matara" or "Salon Manali" alone — in titles, headings, meta
description, and schema markup. Suggested consistent tagline: **"Salon
Manali — Devinuwara's Bridal & Beauty Salon."**

**Working scope decision (made by the user, not yet the owner — see §0),
2026-08-17: this website is for the Devinuwara/Matara branch only** — not
the wider multi-branch network. See [[decisions-log]] below.

## 2. Social media presence — Instagram & TikTok (exhaustively researched, 2026-08-17)

The user asked specifically for this branch's correct Instagram and TikTok
accounts. After extensive cross-verified research (direct handle guesses,
phone-number search `0712858857`, address search, bride-name search across
the branch's own FB posts, Threads, YouTube, mbasic.facebook.com), **no
Instagram or TikTok account could be verified as belonging to this specific
Devinuwara/Tanagalle Road branch.**

This matches what the client already told us directly: *"we have now only
there fb accound"* (their only online account is the Facebook page). Treat
that as confirmed, not just unverified-absence.

**Accounts actively investigated and ruled OUT** (belong to other branches —
do not confuse these with our client, and don't re-investigate them):
- Instagram **@salon_manali** (5,925 followers) — explicitly the
  **Kadawatha** branch (bio/posts say "Kadawatha Branch," hiring posts, etc.)
- Instagram **@_salon_manali_** (Srimendra Mallawa, 1,396 followers) — bio
  explicitly states **"Salon Manali Kurunegala & Katunayaka,"** links to
  www.salonmanali.com
- Instagram **@manali_unisex_salon** — unrelated business, Manali, Himachal
  Pradesh, **India** (Indian phone number, owner @mohit_manali____)
- TikTok mentions found only for **Kadawatha, Kurunegala, Galle** (via
  `tiktok.com/discover/salon-manali-kadawatha` etc. — these are TikTok's
  auto-generated topic/discovery pages, not the branch's own account)
- YouTube channel **"Salon Manali (PVT) Ltd - Nittambuwa"** — Nittambuwa
  branch, not ours
- A promising-looking Instagram post ("Beautifu Sahansa Gunarathna...Dressed
  By Salon...") turned out on inspection to be posted by **@_sachinthka_**
  ("Salon Sachinthaka") — an entirely different salon, coincidental name
  match on the bride's first name only. Good example of why every lead here
  was verified by fetching the actual account, not just trusted from a
  search snippet.

**Recommendation (for planning, not yet actioned):** since this branch has
no Instagram/TikTok presence while sibling "Salon Manali" branches and
regional competitors are actively building audiences there — and since
[[trends-and-inspiration]] found Instagram Reels is where real engagement
happens for independent SL bridal artists — setting up **dedicated,
clearly-disambiguated accounts** (e.g. a handle that includes "devinuwara"
or "matara," not a bare "salonmanali" that could be confused with the larger
branches) is worth raising with the client as part of the digital strategy,
not just the website. This is a suggestion for [[roadmap]], not a decision.

## 3. Services (confirmed vs. inferred)

**Strongly evidenced for this branch** (from the branch's own Facebook posts —
multiple "beautiful bride ___, dressed by Salon Manali Devinuwara" posts, plus
a "book your next appointment" video):
- Bridal dressing & bridal makeup — this is clearly the branch's flagship,
  most-promoted service.

**Inferred from the wider Salon Manali brand** (seen at the Kadawatha
branch/other locations — **not yet confirmed this specific branch offers all
of these**):
- Hairstyling, hair coloring, precision haircuts
- Skincare treatments / facials
- General "Hair Care, Beauty Care, Bridal Dressing" consultancy

**Not confirmed for this branch:** exact service menu, price list, opening
hours, whether they do hair/skin services in addition to bridal, whether they
take walk-ins or appointment-only.

## 4. Manali Academy (training school) — status: unresolved

The wider Salon Manali brand runs a hairstyling training program called
"Manali Academy," but every trace of it found in research (Instagram bio,
hiring posts) points to the **Kadawatha branch**, not Devinuwara. No evidence
found that the Devinuwara branch offers training courses.

**Client action item:** client said they'll check the Devinuwara Facebook page
directly for any Academy mentions. **Do not add an Academy section to the
site until this is confirmed one way or the other.**

## 5. Target audience (inferred, not yet confirmed)

Not explicitly stated by the client. Inferred from the branch's own content
(almost entirely bridal-focused posts): primarily **brides and wedding
parties in the Matara / Devinuwara / Southern Province area**, likely with a
secondary base of everyday hair/beauty clients. Treat this as a working
hypothesis to validate with the client, not a confirmed fact.

## 6. Website goals (confirmed — client selected all four)

1. Online booking / appointment requests
2. Showcase services & build trust (portfolio, credibility)
3. Discoverability via search ("tourist discovery via search" — read as
   general local/search discoverability, not necessarily foreign tourists)
4. General info & contact (hours, location, contact)

## 7. Data access constraints

Client confirmed (2026-08-17): **no owner/admin access to the Facebook or
Instagram pages at this time** — "public info only for now." This means:
- No access to the branch's real photo library, full post history, reviews,
  or precise hours/pricing — Facebook blocks non-authenticated scraping, so
  all research so far comes from public search-engine snippets and indexed
  third-party listings, which are necessarily incomplete.
- Content for the site (bridal gallery photos, testimonials, exact service
  list, pricing) will need to be **supplied by the client directly** (photo
  exports, price list, etc.) rather than scraped — flag this as a content
  dependency before the design phase can be considered content-complete.

## 8. Open questions — for when we actually reach out to the owner

Not actionable yet (see §0 — no contact has been made). Keep this list
ready for the outreach/pitch conversation; don't treat any of these as
blockers on building the pitch demo itself.

- Is the Devinuwara branch legally/formally part of "Salon Manali (Pvt) Ltd"
  (Kadawatha), or an independent business using the same name? Affects legal
  entity name on the site (footer/terms), trademark risk, and how strongly to
  distinguish from other same-named branches in local SEO.
- Does the Devinuwara branch offer non-bridal services (haircuts, coloring,
  facials) or is it bridal-only?
- Opening hours, exact address/landmarks for a map, and a bookable phone/
  WhatsApp number to confirm (071 285 8857 found in posts — confirm this is
  still current).
- Does an Academy/training offering exist at this branch? (client checking)
- Any existing brand assets — logo, brand colors, tagline — or are we
  designing these fresh?

## 9. Decisions log

<a name="decisions-log"></a>
- **2026-08-17** — Client confirmed website scope is the **Devinuwara/Matara
  branch only**, not the wider Salon Manali network. Planning docs should be
  single-location, not multi-branch.
- **2026-08-17** — No admin access to FB/IG yet; proceeding with public
  research only. Revisit content plan once client can share owner-side
  photos/copy/pricing.
- **2026-08-17** — Manali Academy inclusion is undecided pending client
  check of the branch's FB page; default to excluding it from site structure
  until confirmed.
- **2026-08-17** — User clarified the actual project model: this is
  speculative pitch work, not a commissioned project — see §0. Reframed
  "client confirmed" language across memory/planning docs accordingly; new
  [[pitch-strategy]] planning file created to capture how this shapes
  content strategy and next steps.
- **2026-08-17** — Exhaustively researched Instagram/TikTok for this branch;
  confirmed none exist (see §2) — consistent with client's own statement
  that Facebook is their only account. User explicitly confirmed after
  seeing the research: the other "Salon Manali" Instagram/TikTok/YouTube
  accounts found are NOT related to our client — Facebook is the only
  verified account. Treat this as settled, not just a working assumption.

## 10. Sources consulted

- Branch Facebook page (public, unauthenticated — very limited data):
  facebook.com/profile.php?id=100063475393190
- Facebook posts (via search snippets) confirming branch phone/bridal focus
- Instagram: instagram.com/salon_manali/ (brand-wide account, 4.6K followers)
- pro.makeup/salon/sri-lanka/kadawatha/salon-manali (Kadawatha branch detail)
- srilanka-places.com/places/salon-manali-kadawatha
- salonreserve.com/listing/salon-manali-pvt-ltd (Nittambuwa)
- rainbowpages.lk/other/beauty-salons/salon-manali-4/ (Eheliyagoda listing)
- General web search results, Aug 2026 — see [[competitor-research]] and
  [[industry-findings]] for full citation lists
