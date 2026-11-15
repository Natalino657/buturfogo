import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionTone } from "@/components/SectionHeading";

type RouteStopsProps = {
  /** Stop names in travel order (see getRouteStops). */
  stops: readonly string[];
  /** Accessible name of the list, e.g. "Percurso" / "Route". */
  label?: string;
  tone?: SectionTone;
  /**
   * "chips": each stop in a pill (cards).
   * "inline": secondary text joined by small arrows (list rows).
   */
  variant?: "chips" | "inline";
  className?: string;
};

/**
 * A route joined by lava arrows: origin (muted) → stops → destination (emphasised).
 * Wraps onto several lines on narrow screens; long names wrap too.
 */
export function RouteStops({
  stops,
  label,
  tone = "dark",
  variant = "chips",
  className,
}: RouteStopsProps) {
  const last = stops.length - 1;
  const dark = tone === "dark";
  const inline = variant === "inline";

  return (
    <ol
      aria-label={label}
      className={cn(
        "flex flex-wrap items-center",
        inline ? "gap-x-1.5 gap-y-1" : "gap-x-1.5 gap-y-2",
        className
      )}
    >
      {stops.map((stop, index) => (
        <li
          key={`${index}-${stop}`}
          className="flex min-w-0 max-w-full items-center gap-1.5"
        >
          {index > 0 && (
            <ArrowRight
              aria-hidden="true"
              className={cn(
                "shrink-0 text-lava/70",
                inline ? "size-3" : "size-3.5"
              )}
            />
          )}
          {inline ? (
            <span
              className={cn(
                "min-w-0 text-[13px] leading-5 break-words sm:text-sm",
                index === last
                  ? dark
                    ? "text-cream/80"
                    : "text-volcanic/80"
                  : dark
                    ? "text-cream/50"
                    : "text-volcanic/55"
              )}
            >
              {stop}
            </span>
          ) : (
            <span
              className={cn(
                "min-w-0 rounded-full border px-2.5 py-1 text-[13px] leading-snug font-medium break-words",
                index === last
                  ? dark
                    ? "border-white/20 bg-white/[0.06] font-semibold text-cream"
                    : "border-volcanic/20 bg-volcanic/[0.05] font-semibold text-volcanic"
                  : index === 0
                    ? dark
                      ? "border-white/10 text-cream/65"
                      : "border-volcanic/10 bg-volcanic/[0.03] text-volcanic/60"
                    : dark
                      ? "border-white/10 bg-white/[0.03] text-cream/85"
                      : "border-volcanic/10 bg-volcanic/[0.05] text-volcanic/85"
              )}
            >
              {stop}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
