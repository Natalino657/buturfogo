import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

type IntroSectionProps = {
  dict: Dictionary["intro"];
};

/** Short presentation of Fogo Island, right after the Hero. */
export function IntroSection({ dict }: IntroSectionProps) {
  return (
    <section
      aria-labelledby="intro-title"
      className="bg-volcanic px-5 pt-16 pb-4 sm:px-6 sm:pt-24 lg:px-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          titleId="intro-title"
          eyebrow={dict.eyebrow}
          title={dict.title}
          align="center"
        />
        {/* Lead paragraph: 18px on phones → 22px on desktop. */}
        <p className="mx-auto mt-6 max-w-2xl font-heading text-[clamp(1.125rem,0.95rem+0.6vw,1.375rem)] leading-relaxed font-medium text-balance text-cream/80 sm:mt-8">
          {dict.text}
        </p>
        {/* Lava thread leading into "Explore a ilha", so both read as one chapter. */}
        <span
          aria-hidden="true"
          className="mx-auto mt-8 block h-10 w-px bg-linear-to-b from-lava/70 to-transparent sm:h-12"
        />
      </div>
    </section>
  );
}
