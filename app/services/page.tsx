import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bridal & Beauty Services",
  description:
    "Bridal dressing, makeup, hair styling and more from Salon Manali in Devinuwara, Matara. See our services and starting prices.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-maroon">Our Services</h1>
      <p className="mt-3 max-w-2xl text-sm text-charcoal/75">
        Bridal dressing and makeup is our flagship service. Prices below are starting-from
        estimates — final pricing depends on the package and the day&apos;s requirements.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-blush/40 p-6 text-center">
        <p className="font-medium text-charcoal">Not sure what you need?</p>
        <p className="mt-1 text-sm text-charcoal/70">Just message us — we&apos;re happy to help.</p>
        <Link
          href="/book"
          className="mt-4 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-cream shadow-sm hover:bg-gold-dark"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
