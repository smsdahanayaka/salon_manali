import type { Metadata } from "next";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Salon Manali — Devinuwara's own bridal & beauty salon in Matara, Sri Lanka. Learn about our salon.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-maroon">About Salon Manali</h1>

      <PlaceholderPhoto label="Salon Interior" className="mt-6 aspect-video w-full" />

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-charcoal/80">
        <p>
          Salon Manali is a bridal dressing &amp; beauty salon based on Tanagalle Road,{" "}
          <strong className="text-maroon">Devinuwara, Matara</strong>. Bridal dressing and makeup
          is what we&apos;re known for — helping brides in the Southern Province feel confident and
          beautiful on their big day.
        </p>
        <p>
          If you&apos;ve heard the name &ldquo;Salon Manali&rdquo; before — please note there are
          several salons with a similar name in other parts of Sri Lanka. This page is specifically
          about our Devinuwara, Matara salon.
        </p>
        <p className="text-charcoal/60 italic">
          (Full salon story and photos to be added once available.)
        </p>
      </div>

      {/* Meet the team — honest placeholder, no fabricated names */}
      <div className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-maroon">Meet the Team</h2>
        <p className="mt-1 mb-5 text-sm text-charcoal/70">
          Full team bios and photos coming soon.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {["Bridal Stylist", "Makeup Artist", "Hair Specialist"].map((role) => (
            <div key={role} className="text-center">
              <PlaceholderPhoto label={role} className="aspect-square w-full" />
              <p className="mt-2 text-sm font-medium text-charcoal/60">Name coming soon</p>
              <p className="text-xs text-charcoal/50">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
