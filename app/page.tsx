import Link from "next/link";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import PlaceholderVideo from "@/components/PlaceholderVideo";
import ServiceCard from "@/components/ServiceCard";
import { buildWhatsappLink, services, siteConfig } from "@/lib/site-config";

const featuredLooks = ["Traditional Bridal Look", "Modern Bridal Look", "Family & Party Makeup", "Hair Styling"];

const trustPoints = [
  {
    title: "Local & Trusted",
    body: "A real bridal & beauty salon based right in Devinuwara, Matara.",
  },
  {
    title: "Bridal Specialists",
    body: "Bridal dressing and makeup is our flagship — it's what we do most, and do best.",
  },
  {
    title: "Easy to Reach",
    body: "Message us anytime on WhatsApp — quick replies, no hassle.",
  },
];

export default function HomePage() {
  const heroWhatsapp = buildWhatsappLink(
    "Hi Salon Manali, I found your website and I'd like to know more."
  );

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-14 sm:px-6 sm:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-gold-dark uppercase">
              {siteConfig.location}, Sri Lanka
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight font-bold text-maroon sm:text-4xl">
              Bridal Dressing &amp; Beauty in Devinuwara, Matara
            </h1>
            <p className="mt-4 text-base text-charcoal/80">
              Salon Manali is Devinuwara&apos;s own bridal &amp; beauty salon —
              specialising in bridal dressing and makeup for your big day.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-cream shadow-sm hover:bg-gold-dark"
              >
                Book Now
              </Link>
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-whatsapp px-6 py-3 text-center text-sm font-semibold text-whatsapp-dark hover:bg-whatsapp/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <PlaceholderPhoto label="Bridal Hero Photo" className="aspect-[4/5] w-full" />
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold text-maroon">Featured Work</h2>
          <Link href="/gallery" className="text-sm font-semibold text-gold-dark hover:underline">
            View gallery &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {featuredLooks.map((look) => (
            <PlaceholderPhoto key={look} label={look} className="aspect-square w-full" />
          ))}
        </div>
      </section>

      {/* See us in action — video */}
      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="mb-5 font-serif text-2xl font-semibold text-maroon">See Us In Action</h2>
        <PlaceholderVideo label="Bridal Styling Reel" className="aspect-video w-full" />
      </section>

      {/* Services preview */}
      <section className="bg-blush/30 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold text-maroon">Our Services</h2>
            <Link href="/services" className="text-sm font-semibold text-gold-dark hover:underline">
              See all services &rarr;
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="mb-6 font-serif text-2xl font-semibold text-maroon">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {trustPoints.map((point) => (
            <div key={point.title}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal">{point.title}</h3>
              <p className="mt-1 text-sm text-charcoal/70">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — honest placeholder, no fabricated quotes */}
      <section className="bg-blush/30 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-5 font-serif text-2xl font-semibold text-maroon">
            What Our Brides Say
          </h2>
          <div className="rounded-2xl border border-dashed border-charcoal/20 bg-white/50 p-8 text-center text-sm text-charcoal/60">
            Real client reviews are coming soon.
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-maroon">Ready to Book Your Date?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-charcoal/70">
          Reach us on WhatsApp for a quick reply, or visit our Book Now page for a full bridal
          inquiry.
        </p>
        <Link
          href="/book"
          className="mt-5 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-cream shadow-sm hover:bg-gold-dark"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
