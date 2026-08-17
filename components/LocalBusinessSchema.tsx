import { siteConfig } from "@/lib/site-config";

// schema.org LocalBusiness markup — part of the naming-disambiguation
// strategy from research/competitor-research.md §3. Keeps this branch's
// identity (Devinuwara, Matara) machine-readable and separate from other
// "Salon Manali" branches elsewhere in Sri Lanka.
export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Devinuwara",
      addressRegion: "Matara District, Southern Province",
      addressCountry: "LK",
    },
    telephone: siteConfig.phoneTel,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
