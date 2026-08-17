// Single source of truth for site facts.
// See ../memory/salon-manali.md and ../planning/pitch-strategy.md §3 for the
// rules behind what's marked VERIFIED vs PLACEHOLDER here. Never turn a
// PLACEHOLDER value into copy that reads as a confirmed fact.

export const siteConfig = {
  businessName: "Salon Manali",
  tagline: "Devinuwara's Bridal & Beauty Salon", // consistent disambiguation tagline
  location: "Devinuwara, Matara",

  // VERIFIED via public research (memory/salon-manali.md §1) — safe to use as-is.
  address: {
    line1: "Tanagalle Road",
    line2: "Devinuwara, Matara",
    country: "Sri Lanka",
  },
  phoneDisplay: "071 285 8857",
  phoneTel: "+94712858857", // for tel: links
  whatsappNumber: "94712858857", // for wa.me links (no + or leading 0)

  // PLACEHOLDER — not confirmed with the owner yet. Clearly marked in the UI.
  hoursPlaceholder: "9:00 AM – 5:30 PM, 7 days (to be confirmed)",

  // Rough Google Maps embed centered on Devinuwara, Matara.
  // PLACEHOLDER pin — swap for the exact salon location once confirmed.
  mapEmbedSrc:
    "https://www.google.com/maps?q=Tanagalle+Road,+Devinuwara,+Matara,+Sri+Lanka&output=embed",
} as const;

export type ServiceItem = {
  name: string;
  description: string;
  priceFrom: string; // PLACEHOLDER — illustrative only, see pitch-strategy.md §3
  flagship?: boolean;
};

export const services: ServiceItem[] = [
  {
    name: "Bridal Dressing & Makeup",
    description:
      "Full bridal styling for the big day — hair, makeup, and dressing, in traditional or modern looks.",
    priceFrom: "From Rs. 25,000 (illustrative)",
    flagship: true,
  },
  {
    name: "Bridal Party & Family Makeup",
    description:
      "Makeup and hair styling for mothers, bridesmaids, and family members joining the celebration.",
    priceFrom: "From Rs. 5,000 (illustrative)",
  },
  {
    name: "Hair Styling & Coloring",
    description:
      "Everyday and occasion hairstyling, cuts, and coloring. (Tentative — to confirm this branch offers it.)",
    priceFrom: "From Rs. 2,500 (illustrative)",
  },
  {
    name: "Facial & Skincare",
    description:
      "Pre-wedding and general skincare treatments. (Tentative — to confirm this branch offers it.)",
    priceFrom: "From Rs. 3,000 (illustrative)",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function buildWhatsappLink(prefilledMessage: string) {
  const encoded = encodeURIComponent(prefilledMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
