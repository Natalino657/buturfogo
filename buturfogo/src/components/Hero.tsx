import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-volcanic md:items-center"
    >
      <Image
        src="/images/hero/fogo-hero.png"
        alt="Pico do Fogo ao pôr do sol, Ilha do Fogo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_42%] sm:object-[68%_40%] md:object-center"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-volcanic via-volcanic/55 to-volcanic/25 md:bg-none"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:py-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <span className="h-px w-8 bg-lava sm:w-10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sand sm:text-xs sm:tracking-[0.3em]">
              Ilha do Fogo · Cabo Verde
            </span>
          </div>

          <h1 className="font-heading text-[2.35rem] font-extrabold leading-[1.12] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Descubra a ilha.
            <br />
            <span className="text-lava">Viva a experiência.</span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-cream/80 sm:mt-8 sm:text-lg sm:leading-8 sm:text-cream/75">
            Explore as paisagens vulcânicas, descubra lugares extraordinários e
            viva a Ilha do Fogo connosco.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="https://wa.me/2385993884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-lava px-8 text-base font-semibold text-white transition-colors hover:bg-lava/90 sm:h-14"
            >
              Reserve a sua viagem
              <ArrowUpRight className="ml-2 size-5" />
            </a>

            <Link
              href="#transfers"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/5 px-8 text-base text-cream transition-colors hover:bg-white/10 hover:text-white sm:h-14"
            >
              Explorar serviços
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Descubra mais
        </span>
        <ArrowDown className="size-4 animate-bounce" />
      </div>
    </section>
  );
}
