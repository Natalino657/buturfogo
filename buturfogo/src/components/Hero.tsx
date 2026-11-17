import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { HeroSlides, type ResolvedHeroSlide } from "@/components/HeroSlides";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { FOGO_HERO_SRC, HERO_SLIDE_SECONDS, heroSlides } from "@/data/hero";
import { photos } from "@/data/photos";
import type { Dictionary } from "@/i18n/dictionaries";

type HeroProps = {
  dict: Pick<Dictionary, "hero" | "photos" | "booking">;
  /** Built on the server with the locale's pre-filled message. */
  whatsappUrl: string;
};

/** Resolves the hero slides: each photo gets its source and alt text. */
function getSlides(dict: HeroProps["dict"]): ResolvedHeroSlide[] {
  return heroSlides.map((slide): ResolvedHeroSlide => {
    if (slide.id === "fogo-hero") {
      return {
        id: slide.id,
        src: FOGO_HERO_SRC,
        alt: dict.hero.imageAlt,
        position: slide.position,
      };
    }
    const photo = photos[slide.id];
    return {
      id: slide.id,
      src: photo.src,
      alt: dict.photos.alt[slide.id],
      position: slide.position,
    };
  });
}

export function Hero({ dict: fullDict, whatsappUrl }: HeroProps) {
  const dict = fullDict.hero;

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-end overflow-hidden bg-volcanic md:items-center"
    >
      <HeroSlides
        slides={getSlides(fullDict)}
        interval={HERO_SLIDE_SECONDS}
        labels={dict.carousel}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-volcanic via-volcanic/55 to-volcanic/25 md:bg-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `
      linear-gradient(
        90deg,
        rgba(23,23,23,0.88) 0%,
        rgba(23,23,23,0.58) 55%,
        rgba(23,23,23,0.20) 100%
      ),
      linear-gradient(
        0deg,
        rgba(23,23,23,0.90) 0%,
        transparent 65%
      )
    `,
        }}
      />

      {/* Bottom padding leaves room for the slide controls on phones. */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-28 sm:px-6 sm:pb-24 md:py-24 lg:px-10">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <span className="h-px w-8 bg-lava sm:w-10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sand sm:text-xs sm:tracking-[0.3em]">
              {dict.location}
            </span>
          </div>

          {/* ~37px on phones → 56px on desktop. */}
          <h1 className="font-heading text-[clamp(2.25rem,1.5rem+3vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-cream">
            {dict.titleLead}
            <br />
            <span className="text-lava">{dict.titleHighlight}</span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-cream/80 sm:mt-8 sm:text-lg sm:leading-8 sm:text-cream/75">
            {dict.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-lava px-8 text-base font-semibold text-white transition-colors hover:bg-lava/90 sm:h-14"
            >
              <WhatsAppIcon className="size-5" />
              {dict.primaryCta}
              <span className="sr-only"> {fullDict.booking.opensWhatsapp}</span>
            </a>

            <Link
              href="#transfers"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/5 px-8 text-base text-cream transition-colors hover:bg-white/10 hover:text-white sm:h-14"
            >
              {dict.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {dict.scrollHint}
        </span>
        <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
      </div>
    </section>
  );
}
