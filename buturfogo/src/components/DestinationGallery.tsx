"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { DestinationPhoto, type ResolvedPhoto } from "@/components/DestinationPhoto";
import { interpolate } from "@/lib/format";
import { cn } from "@/lib/utils";

type DestinationGalleryProps = {
  photos: readonly ResolvedPhoto[];
  labels: {
    /** Accessible name of the carousel. */
    label: string;
    previous: string;
    next: string;
    /** Placeholders: {current}, {total}. */
    position: string;
  };
  className?: string;
};

/**
 * Swipeable photo strip (native CSS scroll-snap) with previous/next buttons
 * and a position counter. One photo per view.
 */
export function DestinationGallery({
  photos,
  labels,
  className,
}: DestinationGalleryProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const total = photos.length;

  function handleScroll() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    track.scrollTo({
      left: index * track.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  const buttonClass =
    "inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:border-lava hover:text-lava disabled:pointer-events-none disabled:opacity-30";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.label}
      className={className}
    >
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] sm:rounded-2xl [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, index) => (
          <li
            key={photo.id}
            role="group"
            aria-roledescription="slide"
            aria-label={interpolate(labels.position, {
              current: String(index + 1),
              total: String(total),
            })}
            className="w-full shrink-0 snap-start"
          >
            <DestinationPhoto photo={photo} />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between gap-4 px-5 sm:px-0">
        <div aria-hidden="true" className="flex items-center gap-2">
          {photos.map((photo, index) => (
            <span
              key={photo.id}
              className={cn(
                "h-0.5 rounded-full transition-all duration-300",
                index === active ? "w-8 bg-lava" : "w-4 bg-cream/25"
              )}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {interpolate(labels.position, {
            current: String(active + 1),
            total: String(total),
          })}
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label={labels.previous}
            className={buttonClass}
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            aria-label={labels.next}
            className={buttonClass}
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
