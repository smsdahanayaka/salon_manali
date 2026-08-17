"use client";

import { useState } from "react";
import PlaceholderPhoto from "./PlaceholderPhoto";

type GalleryItem = {
  id: number;
  label: string;
  category: "Traditional" | "Modern" | "Mixed";
};

const items: GalleryItem[] = [
  { id: 1, label: "Traditional Kandyan Bridal Look", category: "Traditional" },
  { id: 2, label: "Traditional Bridal Jewellery Set", category: "Traditional" },
  { id: 3, label: "Modern White Wedding Look", category: "Modern" },
  { id: 4, label: "Modern Bridal Hairstyle", category: "Modern" },
  { id: 5, label: "Homecoming Bridal Look", category: "Mixed" },
  { id: 6, label: "Registration Day Look", category: "Mixed" },
  { id: 7, label: "Bridal Makeup Close-up", category: "Modern" },
  { id: 8, label: "Traditional Bridal Dressing", category: "Traditional" },
];

const filters = ["All", "Traditional", "Modern", "Mixed"] as const;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? "border-gold bg-gold text-cream"
                : "border-charcoal/20 text-charcoal/70 hover:border-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {visible.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenItem(item)}
            className="text-left"
            aria-label={`View ${item.label}`}
          >
            <PlaceholderPhoto label={item.label} className="aspect-[3/4] w-full" />
          </button>
        ))}
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenItem(null)}
        >
          <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <PlaceholderPhoto label={openItem.label} className="aspect-[3/4] w-full" />
            <button
              type="button"
              onClick={() => setOpenItem(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-charcoal shadow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
