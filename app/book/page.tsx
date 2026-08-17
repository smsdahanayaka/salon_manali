import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { buildWhatsappLink, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Book your bridal appointment with Salon Manali in Devinuwara, Matara. Chat on WhatsApp, call, or send a bridal inquiry.",
};

export default function BookPage() {
  const quickWhatsapp = buildWhatsappLink(
    "Hi Salon Manali, I'd like to book an appointment."
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-maroon">Book Now</h1>
      <p className="mt-3 text-sm text-charcoal/75">
        In a hurry? Message or call us directly. Planning your wedding day? Fill in the form below
        so we have all the details.
      </p>

      {/* Fast path */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href={quickWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-sm font-semibold text-cream shadow-sm hover:bg-whatsapp-dark"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.28a9.9 9.9 0 0 0 4.68 1.19h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2Z" />
          </svg>
          Chat on WhatsApp
        </a>
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex items-center justify-center gap-2 rounded-full border border-maroon px-6 py-4 text-sm font-semibold text-maroon hover:bg-maroon/5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 5c0-1 1-2 2-2h1.5l2 4-1.5 1.5a12 12 0 0 0 6.5 6.5L16 13.5l4 2V17c0 1-1 2-2 2C10.5 19 4 12.5 4 5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          Call Now — {siteConfig.phoneDisplay}
        </a>
      </div>

      {/* Bridal inquiry form */}
      <div className="mt-10 rounded-2xl border border-charcoal/10 bg-white/60 p-6">
        <h2 className="font-serif text-xl font-semibold text-maroon">Bridal Inquiry</h2>
        <p className="mt-1 mb-5 text-sm text-charcoal/70">
          Tell us about your day and we&apos;ll get back to you.
        </p>
        <BookingForm />
      </div>

      {/* Location */}
      <div className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-maroon">Find Us</h2>
        <p className="mt-1 text-sm text-charcoal/75">
          {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.country}
        </p>
        <p className="text-sm text-charcoal/60">{siteConfig.hoursPlaceholder}</p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-charcoal/10">
          <iframe
            title="Salon Manali location map"
            src={siteConfig.mapEmbedSrc}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
