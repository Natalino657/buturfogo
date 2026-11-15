import { ArrowDownRight, CarFront, Mountain, Plane, type LucideIcon } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

type ServiceKey = keyof Dictionary["whatWeDo"]["items"];

/** Each card leads to the section where that service is booked. */
const services: readonly { key: ServiceKey; icon: LucideIcon; href: string }[] = [
  { key: "airportHotel", icon: Plane, href: "#transfers" },
  { key: "island", icon: CarFront, href: "#transfers" },
  { key: "tours", icon: Mountain, href: "#passeios" },
];

type WhatWeDoSectionProps = {
  dict: Dictionary["whatWeDo"];
};

/**
 * "O que fazemos": the three kinds of service, right after the Hero. No prices
 * and no booking buttons; each card is a quiet link to its section.
 * Phones: compact rows (icon beside the text). From sm: three cards.
 */
export function WhatWeDoSection({ dict }: WhatWeDoSectionProps) {
  return (
    <section
      aria-labelledby="what-we-do-title"
      className="bg-volcanic pt-16 pb-20 sm:pt-20 sm:pb-24"
    >
      <Container>
        <SectionHeading titleId="what-we-do-title" title={dict.title} />

        <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {services.map(({ key, icon: Icon, href }) => {
            const item = dict.items[key];
            return (
              <li key={key}>
                <a
                  href={href}
                  className="group flex h-full gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 outline-none hover:border-white/15 hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-lava/70 sm:flex-col sm:gap-5 sm:p-6 lg:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-lava"
                  >
                    <Icon strokeWidth={1.6} className="size-[18px]" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-heading text-[17px] leading-snug font-bold text-cream sm:text-lg">
                      {item.title}
                    </span>
                    <span className="mt-1.5 text-sm leading-6 text-pretty text-cream/60 sm:mt-2 sm:text-[15px]">
                      {item.text}
                    </span>
                  </span>
                  <ArrowDownRight
                    aria-hidden="true"
                    className="hidden size-4 shrink-0 self-end text-cream/30 transition-colors group-hover:text-lava sm:block"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
