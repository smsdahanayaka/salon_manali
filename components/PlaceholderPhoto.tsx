// Tasteful placeholder for bridal photography we don't have yet.
// See planning/pitch-strategy.md §3: never present placeholder imagery as
// this salon's real work. This component makes that visually obvious
// (a caption + a decorative mark) rather than pretending to be a photo.

type PlaceholderPhotoProps = {
  label: string;
  className?: string;
};

export default function PlaceholderPhoto({
  label,
  className = "",
}: PlaceholderPhotoProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-blush via-cream to-blush text-center ${className}`}
    >
      <svg
        aria-hidden="true"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gold/60"
      >
        <path
          d="M12 3c-1.5 2-2 3.5-2 5a2 2 0 1 0 4 0c0-1.5-.5-3-2-5Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="12" cy="15" r="6" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <span className="px-4 text-xs font-medium tracking-wide text-charcoal/50 uppercase">
        Photo placeholder — {label}
      </span>
    </div>
  );
}
