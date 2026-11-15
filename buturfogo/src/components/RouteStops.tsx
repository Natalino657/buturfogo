import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type RouteStopsProps = {
  /** Stop names in travel order (see getRouteStops). */
  stops: readonly string[];
  /** Accessible name of the list, e.g. "Percurso" / "Route". */
  label?: string;
  /** id of the list, e.g. to describe a form control with aria-describedby. */
  id?: string;
  className?: string;
};

/**
 * A route as secondary text joined by small neutral arrows: earlier stops muted,
 * the destination slightly brighter. Wraps on narrow screens.
 */
export function RouteStops({ stops, label, id, className }: RouteStopsProps) {
  const last = stops.length - 1;

  return (
    <ol
      id={id}
      aria-label={label}
      className={cn("flex flex-wrap items-center gap-x-1.5 gap-y-1", className)}
    >
      {stops.map((stop, index) => (
        <li
          key={`${index}-${stop}`}
          className="flex max-w-full min-w-0 items-center gap-1.5"
        >
          {index > 0 && (
            <ArrowRight
              aria-hidden="true"
              className="size-3 shrink-0 text-cream/30"
            />
          )}
          <span
            className={cn(
              "min-w-0 text-[13px] leading-5 break-words sm:text-sm",
              index === last ? "text-cream/80" : "text-cream/50"
            )}
          >
            {stop}
          </span>
        </li>
      ))}
    </ol>
  );
}
