import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SectionTone } from "@/components/SectionHeading";

type RouteStopsProps = {
  /** Stop names in travel order (see getRouteStops). */
  stops: readonly string[];
  /** Accessible name of the list, e.g. "Percurso" / "Route". */
  label?: string;
  tone?: SectionTone;
  className?: string;
};

/**
 * A route as chips joined by arrows: origin (muted) → stops → destination (lava).
 * Wraps onto several lines on narrow screens; long names wrap inside their chip.
 */
export function RouteStops({
  stops,
  label,
  tone = "dark",
  className,
}: RouteStopsProps) {
  const last = stops.length - 1;
  const dark = tone === "dark";

  return (
    <ol
      aria-label={label}
      className={cn("flex flex-wrap items-center gap-x-1.5 gap-y-2", className)}
    >
      {stops.map((stop, index) => (
        <li key={`${index}-${stop}`} className="flex min-w-0 max-w-full items-center gap-1.5">
          {index > 0 && (
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 shrink-0 text-lava"
            />
          )}
          <span
            className={cn(
              "min-w-0 rounded-full border px-2.5 py-1 text-[13px] leading-snug font-medium break-words",
              index === last
                ? dark
                  ? "border-lava/35 bg-lava/15 text-cream"
                  : "border-lava/30 bg-lava/10 text-volcanic"
                : index === 0
                  ? dark
                    ? "border-white/10 bg-white/[0.04] text-cream/60"
                    : "border-volcanic/10 bg-volcanic/[0.03] text-volcanic/60"
                  : dark
                    ? "border-white/10 bg-white/[0.06] text-cream/85"
                    : "border-volcanic/10 bg-volcanic/[0.05] text-volcanic/85"
            )}
          >
            {stop}
          </span>
        </li>
      ))}
    </ol>
  );
}
