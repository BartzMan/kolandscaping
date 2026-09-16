import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  invert = false,
  compact = false,
}: {
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 min-h-11"
      aria-label="K&O Landscaping home"
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-sm border",
          invert
            ? "border-cream/25 bg-cream/10 text-cream"
            : "border-olive/20 bg-olive text-cream",
        )}
      >
        <svg viewBox="0 0 32 32" className="size-6" aria-hidden>
          <rect x="7" y="9" width="18" height="13" rx="1.2" fill="currentColor" opacity="0.35" />
          <rect x="9" y="11" width="14" height="9" rx="0.8" fill="currentColor" />
          <rect x="6" y="21.5" width="20" height="2" rx="0.4" fill="currentColor" opacity="0.7" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-medium tracking-tight",
            invert ? "text-cream" : "text-ink",
          )}
        >
          K&O
        </span>
        {!compact && (
          <span
            className={cn(
              "mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em]",
              invert ? "text-cream/70" : "text-muted",
            )}
          >
            Landscaping
          </span>
        )}
      </span>
    </Link>
  );
}
