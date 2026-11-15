"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

import { interpolate } from "@/lib/format";
import { cn } from "@/lib/utils";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const noSubscription = () => () => {};

export type ResolvedHeroSlide = {
  id: string;
  src: string;
  alt: string;
  /** object-position classes. */
  position: string;
  /** CC BY-SA attribution, when the photo needs one. */
  credit?: { text: string; href: string };
};

type HeroSlidesProps = {
  slides: readonly ResolvedHeroSlide[];
  /** Seconds per slide when rotating automatically. */
  interval: number;
  labels: {
    /** Accessible name of the carousel. */
    label: string;
    /** Indicator button. Placeholders: {current}, {total}. */
    goTo: string;
    pause: string;
    play: string;
  };
};

/**
 * Hero background: photos that cross-fade, with discreet indicators, a
 * pause/play button and the active photo's credit.
 *
 * - Only the first photo loads with the page; the rest are added after
 *   hydration so they never compete with it.
 * - Rotates every `interval` seconds; never rotates (and switches without a
 *   fade) when the visitor prefers reduced motion. Hovering or focusing the
 *   controls pauses it too.
 */
export function HeroSlides({ slides, interval, labels }: HeroSlidesProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const total = slides.length;

  // false on the server and during hydration, true afterwards.
  const mounted = useSyncExternalStore(noSubscription, () => true, () => false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false
  );

  const rotating = mounted && !paused && !held && !reducedMotion && total > 1;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % total),
      interval * 1000
    );
    return () => window.clearTimeout(timer);
  }, [rotating, active, interval, total]);

  const credit = slides[active].credit;

  return (
    <>
      {/* Photos (behind the overlays and text of the Hero). */}
      {slides.map((slide, index) => {
        // The first photo is server-rendered; the others join after hydration.
        if (index > 0 && !mounted) return null;
        const visible = index === active;

        return (
          <div
            key={slide.id}
            aria-hidden={!visible}
            className={cn(
              "absolute inset-0 z-0",
              !reducedMotion && "transition-opacity duration-[1200ms] ease-in-out",
              visible ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={cn("object-cover", slide.position)}
            />
          </div>
        );
      })}

      {total > 1 && (
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={labels.label}
          onMouseEnter={() => setHeld(true)}
          onMouseLeave={() => setHeld(false)}
          onFocus={() => setHeld(true)}
          onBlur={() => setHeld(false)}
          className="absolute inset-x-0 bottom-3 z-20 sm:bottom-6"
        >
          {/* Phones: credit on its own line above the controls. From sm: one row,
              credit on the left, controls on the right. */}
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-x-3 px-5 sm:flex-nowrap sm:px-6 lg:px-10">
            {credit && (
              <a
                href={credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="basis-full text-right text-[11px] text-cream/45 transition-colors outline-none hover:text-cream/80 focus-visible:text-cream focus-visible:underline sm:mr-auto sm:basis-auto sm:text-left"
              >
                {credit.text}
              </a>
            )}

            <div className="flex items-center">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={interpolate(labels.goTo, {
                    current: String(index + 1),
                    total: String(total),
                  })}
                  aria-current={index === active ? "true" : undefined}
                  className="group/dot flex size-11 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-lava/70"
                >
                  <span
                    className={cn(
                      "h-0.5 rounded-full transition-all duration-500",
                      index === active
                        ? "w-7 bg-cream"
                        : "w-4 bg-cream/35 group-hover/dot:bg-cream/70"
                    )}
                  />
                </button>
              ))}
            </div>

            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? labels.play : labels.pause}
                className="flex size-11 items-center justify-center rounded-full text-cream/60 transition-colors outline-none hover:text-cream focus-visible:ring-2 focus-visible:ring-lava/70"
              >
                {paused ? (
                  <Play aria-hidden="true" className="size-4" />
                ) : (
                  <Pause aria-hidden="true" className="size-4" />
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
