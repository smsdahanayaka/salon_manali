import Link from "next/link";
import type { ServiceItem } from "@/lib/site-config";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border p-6 shadow-sm ${
        service.flagship
          ? "border-gold/40 bg-blush/50"
          : "border-charcoal/10 bg-white/60"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg font-semibold text-maroon">
          {service.name}
        </h3>
        {service.flagship && (
          <span className="shrink-0 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-cream">
            Flagship
          </span>
        )}
      </div>
      <p className="text-sm text-charcoal/75">{service.description}</p>
      <p className="text-sm font-semibold text-gold-dark">{service.priceFrom}</p>
      <Link
        href="/book"
        className="mt-1 inline-block text-sm font-semibold text-maroon underline underline-offset-4 hover:text-gold-dark"
      >
        Ask about this &rarr;
      </Link>
    </div>
  );
}
