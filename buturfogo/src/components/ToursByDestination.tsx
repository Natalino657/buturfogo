import { ChapterTabs, type ChapterTab } from "@/components/ChapterTabs";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TourChapter } from "@/components/TourChapter";
import { chapters, type Chapter } from "@/data/chapters";
import { destinations } from "@/data/destinations";
import { photos } from "@/data/photos";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type ToursByDestinationProps = {
  locale: Locale;
  dict: Dictionary;
};

/** Tile name of a chapter in the destination picker. */
function getChapterName(chapter: Chapter, dict: Dictionary) {
  return chapter.id === "chaDasCaldeiras" || chapter.id === "salinas"
    ? dict.destinations[chapter.id].name
    : dict.tours.groups[chapter.id];
}

/** First photo of the chapter's first destination. */
function getChapterImage(chapter: Chapter) {
  const destination = destinations.find((d) => d.id === chapter.destinations[0]);
  return destination ? photos[destination.photos[0]].src : undefined;
}

/**
 * "Passeios pela ilha": chapters with photos are picked from a row of photo
 * tiles and shown one at a time; chapters without photos ("Outros passeios")
 * stay below, always visible.
 */
export function ToursByDestination({ locale, dict }: ToursByDestinationProps) {
  const tabs: ChapterTab[] = [];
  const others: Chapter[] = [];

  for (const chapter of chapters) {
    const image = getChapterImage(chapter);
    if (!image) {
      others.push(chapter);
      continue;
    }
    tabs.push({
      id: chapter.id,
      number: String(tabs.length + 1).padStart(2, "0"),
      name: getChapterName(chapter, dict),
      image,
      content: (
        <TourChapter locale={locale} chapter={chapter} hideTitle dict={dict} />
      ),
    });
  }

  return (
    <section
      id="passeios"
      aria-labelledby="tours-title"
      className="scroll-mt-20 border-t border-white/[0.06] bg-volcanic py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          titleId="tours-title"
          title={dict.tours.title}
          note={dict.pricing.perVehicle}
        />

        <div className="mt-10 sm:mt-12">
          <ChapterTabs label={dict.tours.pickDestination} tabs={tabs} />
        </div>

        {others.map((chapter) => (
          <div key={chapter.id} className="mt-20 sm:mt-24">
            <TourChapter locale={locale} chapter={chapter} dict={dict} />
          </div>
        ))}
      </Container>
    </section>
  );
}
