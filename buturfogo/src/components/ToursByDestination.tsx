import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TourChapter } from "@/components/TourChapter";
import { chapters } from "@/data/chapters";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type ToursByDestinationProps = {
  locale: Locale;
  dict: Dictionary;
};

/** Chapters with photos are numbered ("01", "02"…); "Outros passeios" is not. */
const numberedChapters: string[] = chapters
  .filter((chapter) => chapter.destinations.length > 0)
  .map((chapter) => chapter.id);

/**
 * "Passeios pela ilha": one chapter per destination (or group of destinations),
 * each with its photos and, right below, its tours and prices.
 */
export function ToursByDestination({ locale, dict }: ToursByDestinationProps) {
  return (
    <section
      id="passeios"
      aria-labelledby="tours-title"
      className="scroll-mt-20 bg-volcanic py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          titleId="tours-title"
          title={dict.tours.title}
          note={dict.pricing.perVehicle}
        />

        <div className="mt-14 flex flex-col gap-20 sm:mt-16 sm:gap-24 lg:gap-28">
          {chapters.map((chapter) => {
            const index = numberedChapters.indexOf(chapter.id);
            return (
              <TourChapter
                key={chapter.id}
                locale={locale}
                chapter={chapter}
                number={index >= 0 ? index + 1 : undefined}
                dict={dict}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
