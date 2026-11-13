import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[850px] items-center overflow-hidden bg-volcanic pt-20 md:min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(23,23,23,0.92) 0%,
              rgba(23,23,23,0.65) 50%,
              rgba(23,23,23,0.25) 100%
            ),
            linear-gradient(
              0deg,
              rgba(23,23,23,0.85) 0%,
              transparent 60%
            ),
            url('/images/hero/fogo-hero.png')
          `,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-lava" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sand">
              Ilha do Fogo · Cabo Verde
            </span>
          </div>

          <h1 className="font-heading text-5xl font-extrabold leading-[1.12] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Descubra a ilha.
            <br />
            <span className="text-lava">Viva a experiência.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-cream/75 sm:text-lg">
            Explore as paisagens vulcânicas, descubra lugares extraordinários e
            viva a Ilha do Fogo connosco.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 bg-lava px-8 text-base font-semibold text-white hover:bg-lava/90"
            >
              <a
                href="https://wa.me/2385993884"
                target="_blank"
                rel="noreferrer"
              >
                Reserve a sua viagem
                <ArrowUpRight className="ml-2 size-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-white/30 bg-white/5 px-8 text-base text-cream hover:bg-white/10 hover:text-white"
            >
              <Link href="#transfers">Explorar serviços</Link>
            </Button>
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
