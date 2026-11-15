import { BookingSelector } from "@/components/BookingSelector";
import { PhotoGrid, type GridPhoto } from "@/components/PhotoGrid";
import type { Chapter } from "@/data/chapters";
import { destinations } from "@/data/destinations";
import { photos } from "@/data/photos";
import { experiences, tours } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { interpolate } from "@/lib/format";
import {
  getBookingOption,
  getRouteLabel,
  getRouteStops,
  getTourTitle,
  type BookingOption,
} from "@/lib/services";

type TourChapterProps = {
  locale: Locale;
  chapter: Chapter;
  /** Chapter number ("01"); omitted for chapters without photos. */
  number?: number;
  dict: Dictionary;
};

/** Title and description of a chapter. */
function getChapterText(chapter: Chapter, dict: Dictionary) {
  switch (chapter.id) {
    case "chaDasCaldeiras":
    case "salinas":
      return dict.destinations[chapter.id];
    case "aroundTheIsland":
    case "otherTours":
      return {
        name: dict.tours.groups[chapter.id],
        description: dict.chapters[chapter.id],
      };
  }
}

/**
 * Photos of the chapter's destinations (see destinations.ts). With several
 * destinations ("Pela ilha"), each photo is captioned with its place name, and
 * the first photo of each place with that place's short line.
 */
function getChapterPhotos(chapter: Chapter, dict: Dictionary): GridPhoto[] {
  const several = chapter.destinations.length > 1;
  const cards: Partial<Record<string, string>> = dict.chapters.cards;

  return chapter.destinations.flatMap((destinationId) => {
    const destination = destinations.find((d) => d.id === destinationId);
    if (!destination) return [];

    return destination.photos.map((photoId, index): GridPhoto => {
      const photo = photos[photoId];
      const card = index === 0 ? cards[destinationId] : undefined;
      return {
        id: photoId,
        src: photo.src,
        alt: dict.photos.alt[photoId],
        captionTitle: several ? dict.destinations[destinationId].name : undefined,
        caption: several && card ? card : dict.photos.alt[photoId],
      };
    });
  });
}

/** Bookable options of the chapter; same WhatsApp messages as before. */
function getChapterOptions(
  chapter: Chapter,
  locale: Locale,
  dict: Dictionary
): BookingOption[] {
  const { offer } = chapter;

  if (offer.kind === "tours") {
    return tours
      .filter((tour) => tour.group === offer.group)
      .map((tour) =>
        getBookingOption(locale, {
          id: tour.id,
          title: getTourTitle(tour, dict, locale),
          stops: getRouteStops(tour, dict),
          serviceLabel: interpolate(dict.tours.bookingLabel, {
            route: getRouteLabel(tour, dict),
          }),
          price: tour.price,
        })
      );
  }

  const experience = experiences.find((e) => e.id === offer.id);
  if (!experience) return [];
  const name = dict.experiences.items[experience.id];

  return experience.options.map((option) => {
    const duration = dict.durations[option.duration];
    return getBookingOption(locale, {
      id: option.duration,
      title: `${name} · ${duration}`,
      serviceLabel: interpolate(dict.experiences.optionLabel, {
        experience: name,
        duration,
      }),
      price: option.price,
    });
  });
}

/**
 * One chapter of "Passeios pela ilha": number, title and short text, the
 * photos, then the options with a single booking button. Everything sits in
 * one left-aligned column so titles, text, photos and prices line up.
 */
export function TourChapter({ locale, chapter, number, dict }: TourChapterProps) {
  const { name, description } = getChapterText(chapter, dict);
  const photos = getChapterPhotos(chapter, dict);
  const options = getChapterOptions(chapter, locale, dict);
  const isExperience = chapter.offer.kind === "experience";
  const titleId = `chapter-${chapter.id}`;

  return (
    <article aria-labelledby={titleId}>
      <header className="max-w-2xl">
        {number !== undefined && (
          <p className="font-heading text-xs font-bold tracking-[0.3em] text-lava">
            {String(number).padStart(2, "0")}
          </p>
        )}
        <h3
          id={titleId}
          className={
            number !== undefined
              ? "mt-2 font-heading text-[clamp(1.75rem,1.4rem+1vw,2.25rem)] leading-[1.15] font-extrabold tracking-tight text-cream"
              : "font-heading text-[clamp(1.375rem,1.2rem+0.6vw,1.75rem)] leading-[1.2] font-extrabold tracking-tight text-cream"
          }
        >
          {name}
        </h3>
        <p className="mt-3 text-base leading-7 text-pretty text-cream/65 lg:text-[17px]">
          {description}
        </p>
      </header>

      {photos.length > 0 && <PhotoGrid className="mt-8" photos={photos} />}

      <BookingSelector
        className="mt-10"
        legend={
          isExperience
            ? dict.booking.selector.chooseDuration
            : dict.booking.selector.chooseTour
        }
        options={options}
        labels={{
          cta: isExperience
            ? dict.booking.selector.bookVisit
            : dict.booking.selector.bookTour,
          hint: dict.booking.selector.hint,
          perVehicle: dict.pricing.perVehicleShort,
          route: dict.booking.selector.route,
            opensWhatsapp: dict.booking.opensWhatsapp,
        }}
      />
    </article>
  );
}
