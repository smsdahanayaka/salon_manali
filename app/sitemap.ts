import type { MetadataRoute } from "next";

// Required for `output: "export"` static builds.
export const dynamic = "force-static";

// See app/robots.ts note — placeholder domain until a real one is chosen.
const base = "https://example-salon-manali-devinuwara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/gallery", "/about", "/book"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
