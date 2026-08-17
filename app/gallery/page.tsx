import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Bridal Gallery",
  description:
    "Browse bridal looks styled by Salon Manali in Devinuwara, Matara — traditional, modern, and mixed ceremony styles.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-maroon">Our Bridal Work</h1>
      <p className="mt-3 max-w-2xl text-sm text-charcoal/75">
        A look at the styles we create. (These are placeholder photos for now — real photos from
        Salon Manali replace them once available.)
      </p>

      <div className="mt-8">
        <GalleryGrid />
      </div>

      <div className="mt-10 rounded-2xl bg-blush/40 p-6 text-center">
        <p className="font-medium text-charcoal">Like what you see?</p>
        <Link
          href="/book"
          className="mt-4 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-cream shadow-sm hover:bg-gold-dark"
        >
          Book Your Date
        </Link>
      </div>
    </div>
  );
}
