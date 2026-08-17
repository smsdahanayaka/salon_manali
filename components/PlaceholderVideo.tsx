// Placeholder for a real video (hero clip, styling reel, etc.) we don't
// have yet. Same honesty rule as PlaceholderPhoto — never pretend this is
// real footage. Swap for a real <video> tag once a file is provided
// (see planning/pitch-strategy.md §3).

type PlaceholderVideoProps = {
  label: string;
  className?: string;
};

export default function PlaceholderVideo({
  label,
  className = "",
}: PlaceholderVideoProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-maroon/15 via-blush to-cream text-center ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-md">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" className="text-gold-dark" />
        </svg>
      </div>
      <span className="px-4 text-xs font-medium tracking-wide text-charcoal/50 uppercase">
        Video placeholder — {label}
      </span>
    </div>
  );
}
