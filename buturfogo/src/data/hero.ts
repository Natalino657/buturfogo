/**
 * Hero background photos, in display order. The first one loads with the page
 * (it is the LCP image); the others load after hydration.
 * Only real photos of Fogo, at least 2400px wide so they hold up full screen.
 */

import type { PhotoId } from "@/data/photos";

export type HeroSlide = {
  /** "fogo-hero" is the original Hero photo; the others come from photos.ts. */
  id: "fogo-hero" | PhotoId;
  /** object-position classes, so the subject stays in frame on every screen. */
  position: string;
};

/** The original Hero photo (not from Wikimedia Commons, no credit line). */
export const FOGO_HERO_SRC = "/images/hero/fogo-hero.webp";

export const heroSlides = [
  {
    id: "fogo-hero",
    position: "object-[72%_42%] sm:object-[68%_40%] md:object-center",
  },
  { id: "cha-pico-ceu-azul", position: "object-[60%_60%]" },
  { id: "cha-caldeira-aerea", position: "object-[55%_55%]" },
  { id: "santa-catarina-encostas-sul", position: "object-[55%_50%]" },
  { id: "mosteiros-costa", position: "object-[60%_50%]" },
] as const satisfies readonly HeroSlide[];

/** Seconds each photo stays on screen when rotating automatically. */
export const HERO_SLIDE_SECONDS = 7;
