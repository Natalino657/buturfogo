import { DestinationFeature } from "@/components/DestinationFeature";
import { SectionHeading } from "@/components/SectionHeading";
import { destinations } from "@/data/destinations";
import type { Dictionary } from "@/i18n/dictionaries";

type DestinationsSectionProps = {
  dict: Pick<Dictionary, "destinations" | "photos">;
};

/** "Explore a ilha": one editorial block per destination, alternating sides. */
export function DestinationsSection({ dict }: DestinationsSectionProps) {
  return (
    <section
      id="explorar"
      aria-labelledby="explore-title"
      className="scroll-mt-20 bg-volcanic px-5 pt-4 pb-20 sm:px-6 sm:pb-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Centred, on the same axis as the intro above. */}
        <SectionHeading
          titleId="explore-title"
          eyebrow={dict.destinations.eyebrow}
          title={dict.destinations.title}
          description={dict.destinations.description}
          align="center"
        />

        <div className="mt-10 flex flex-col gap-16 sm:mt-14 sm:gap-20 lg:gap-24">
          {destinations.map((destination, index) => (
            <DestinationFeature
              key={destination.id}
              destination={destination}
              index={index}
              dict={dict}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
