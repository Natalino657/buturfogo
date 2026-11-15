import { Container } from "@/components/Container";
import type { Dictionary } from "@/i18n/dictionaries";

type IntroSectionProps = {
  dict: Dictionary["intro"];
};

/**
 * Short presentation of Fogo Island, right after the Hero: a slightly lighter
 * band with hairlines, so it reads apart from the destinations below.
 */
export function IntroSection({ dict }: IntroSectionProps) {
  return (
    <section
      aria-labelledby="intro-title"
      className="border-y border-white/[0.06] bg-volcanic-raised py-20 sm:py-24"
    >
      <Container className="text-center">
        <h2
          id="intro-title"
          className="font-heading text-[clamp(1.875rem,1.35rem+1.5vw,2.5rem)] leading-[1.15] font-extrabold tracking-tight text-cream"
        >
          {dict.title}
        </h2>
        {/* Lead paragraph: 18px on phones → 22px on desktop. */}
        <p className="mx-auto mt-6 max-w-2xl font-heading text-[clamp(1.125rem,0.95rem+0.6vw,1.375rem)] leading-relaxed font-medium text-balance text-cream/80">
          {dict.text}
        </p>
      </Container>
    </section>
  );
}
