import { DestinationGallery } from "@/components/DestinationGallery";
import { DestinationPhoto, type ResolvedPhoto } from "@/components/DestinationPhoto";
import type { DestinationEntry } from "@/data/destinations";
import type { Dictionary } from "@/i18n/dictionaries";
import { interpolate } from "@/lib/format";
import { cn } from "@/lib/utils";

type DestinationFeatureProps = {
  destination: DestinationEntry;
  /** Position in the list: drives the "01" label and which side the photo is on. */
  index: number;
  dict: Pick<Dictionary, "destinations" | "photos">;
};

/** One destination as an editorial block: large photo(s) beside a short text. */
export function DestinationFeature({
  destination,
  index,
  dict,
}: DestinationFeatureProps) {
  const text = dict.destinations.items[destination.id];
  const titleId = `destination-${destination.id}`;
  const photoOnRight = index % 2 === 1;
  const highlights: readonly string[] = text.highlights;

  const photos: ResolvedPhoto[] = destination.photos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: dict.photos.alt[photo.id],
    credit: interpolate(dict.photos.credit, {
      author: photo.author,
      license: photo.license,
    }),
    sourceUrl: photo.sourceUrl,
  }));

  return (
    <article
      aria-labelledby={titleId}
      className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
    >
      {/* The photo gets the larger share: 7/12 on laptops, 8/12 on wide screens. */}
      <div
        className={cn(
          "-mx-5 sm:mx-0 lg:col-span-7 xl:col-span-8",
          photoOnRight && "lg:order-last"
        )}
      >
        {photos.length > 1 ? (
          <DestinationGallery
            photos={photos}
            labels={{
              ...dict.photos.gallery,
              label: interpolate(dict.photos.gallery.label, {
                place: text.name,
              }),
            }}
          />
        ) : (
          <DestinationPhoto photo={photos[0]} className="sm:rounded-2xl" />
        )}
      </div>

      <div className="max-w-md lg:col-span-5 xl:col-span-4">
        <p className="font-heading text-xs font-bold tracking-[0.3em] text-lava">
          {String(index + 1).padStart(2, "0")}
        </p>
        {/* 30px on phones → 40px on desktop. */}
        <h3
          id={titleId}
          className="mt-2 font-heading text-[clamp(1.875rem,1.45rem+1.2vw,2.5rem)] font-extrabold leading-[1.1] tracking-tight text-balance text-cream"
        >
          {text.name}
        </h3>
        <p className="mt-4 text-base leading-7 text-pretty text-cream/70 lg:text-[17px]">
          {text.description}
        </p>

        {highlights.length > 0 && (
          <ul
            aria-label={dict.destinations.highlightsLabel}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 text-[13px] text-cream/60"
              >
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-full bg-lava"
                />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
