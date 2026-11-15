import { Container } from "@/components/Container";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type AboutSectionProps = {
  dict: Dictionary["about"];
};

/**
 * "Sobre nós": the owner's confirmed story. Typographic composition (no team
 * photo is available yet): the "10+" years stand out on the left with the
 * journey drawn like a route; the story reads on the right.
 */
export function AboutSection({ dict }: AboutSectionProps) {
  const [lead, ...rest] = dict.paragraphs;
  const lastStep = dict.journey.steps.length - 1;

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-t border-white/[0.06] bg-volcanic py-20 sm:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Story: first in the DOM so the heading leads; on the right from lg. */}
        <div className="lg:order-last lg:col-span-7">
          <h2
            id="about-title"
            className="font-heading text-[clamp(1.875rem,1.35rem+1.5vw,2.5rem)] leading-[1.15] font-extrabold tracking-tight text-cream"
          >
            {dict.title}
          </h2>
          <p className="mt-6 font-heading text-[clamp(1.125rem,0.95rem+0.6vw,1.375rem)] leading-relaxed font-medium text-pretty text-cream/85">
            {lead}
          </p>
          {rest.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-2xl text-base leading-7 text-pretty text-cream/65 lg:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Experience highlight and journey. */}
        <div className="border-t border-white/10 pt-10 lg:col-span-5 lg:border-t-0 lg:border-r lg:pt-0 lg:pr-12">
          <p className="flex flex-col">
            <span className="font-heading text-[clamp(4.5rem,3rem+6vw,7.5rem)] leading-none font-extrabold tracking-tight text-cream">
              {dict.experience.years}
              <span className="text-lava">+</span>
            </span>
            <span className="mt-3 text-sm font-semibold tracking-[0.18em] text-sand uppercase">
              {dict.experience.label}
            </span>
          </p>

          <ol aria-label={dict.journey.label} className="mt-10">
            {dict.journey.steps.map((step, index) => (
              <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                {/* Route line between the dots. */}
                {index < lastStep && (
                  <span
                    aria-hidden="true"
                    className="absolute top-3.5 bottom-0 left-[5px] w-px bg-white/15"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative mt-1.5 size-[11px] shrink-0 rounded-full border-2",
                    index === lastStep
                      ? "border-lava bg-lava"
                      : "border-white/30 bg-volcanic"
                  )}
                />
                <span
                  className={cn(
                    "text-[15px] leading-6",
                    index === lastStep
                      ? "font-semibold text-cream"
                      : "text-cream/60"
                  )}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
