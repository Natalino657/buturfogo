/**
 * Hero background photos, in display order. The first one loads with the page
 * (it is the LCP image); the others load after hydration.
 * Only real photos of Fogo, at least 2400px wide so they hold up full screen.
 */

import type { PhotoId } from "@/data/destinations";

export type HeroSlide =
  | {
      id: "fogo-hero";
      src: string;
      /** object-position per breakpoint, so the volcano stays in frame. */
      position: string;
    }
  | {
      /** A destination photo: alt text and CC BY-SA credit come from destinations.ts. */
      id: PhotoId;
      position: string;
    };

export const heroSlides = [
  {
    id: "fogo-hero",
    src: "/images/hero/fogo-hero.webp",
    position: "object-[72%_42%] sm:object-[68%_40%] md:object-center",
  },
  { id: "cha-das-caldeiras-bordeira", position: "object-[60%_50%]" },
  { id: "cha-das-caldeiras-lava-2014", position: "object-center" },
  { id: "salinas-praia", position: "object-[40%_60%]" },
] as const satisfies readonly HeroSlide[];

/** Seconds each photo stays on screen when rotating automatically. */
export const HERO_SLIDE_SECONDS = 7;
