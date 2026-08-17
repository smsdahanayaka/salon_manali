import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-blush/40">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold text-maroon">
              {siteConfig.businessName}
            </p>
            <p className="mt-1 text-sm text-charcoal/70">{siteConfig.tagline}</p>
          </div>

          <div className="text-sm text-charcoal/80">
            <p>{siteConfig.address.line1}</p>
            <p>{siteConfig.address.line2}</p>
            <p>{siteConfig.address.country}</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-maroon">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-charcoal/60">{siteConfig.hoursPlaceholder}</p>
          </div>

          <nav className="flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-charcoal/80 hover:text-maroon">
                {link.label}
              </Link>
            ))}
            <Link href="/book" className="text-charcoal/80 hover:text-maroon">
              Book Now
            </Link>
          </nav>
        </div>

        <p className="mt-8 border-t border-charcoal/10 pt-4 text-xs text-charcoal/50">
          {siteConfig.businessName} — {siteConfig.location}, Sri Lanka.
        </p>
      </div>
    </footer>
  );
}
