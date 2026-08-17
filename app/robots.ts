import type { MetadataRoute } from "next";

// Required for `output: "export"` static builds.
export const dynamic = "force-static";

// NOTE: per planning/pitch-strategy.md §5, this site should not be
// deployed publicly under the salon's name until the owner has agreed.
// Once a real domain is set, update `base` below.
const base = "https://example-salon-manali-devinuwara.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
