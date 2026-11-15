import Image from "next/image";

import { cn } from "@/lib/utils";

export type GridPhoto = {
  id: string;
  src: string;
  alt: string;
  /** Optional bold lead of the caption, e.g. the place name. */
  captionTitle?: string;
  /** Description only; authors and licences are credited in the footer (PhotoCredits). */
  caption: string;
};

type PhotoGridProps = {
  /** 1 to 4 photos. */
  photos: readonly GridPhoto[];
  className?: string;
};

/** Grid columns per photo count (phones always start from 2 columns). */
const gridColumns: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

/**
 * Picks one set of classes per photo, so no two classes compete for the same
 * property (the `cn` helper does not merge conflicting Tailwind classes).
 */
function tileClasses(count: number, index: number) {
  if (count === 1) {
    return { item: "", frame: "aspect-3/2 sm:aspect-21/9", sizes: "(min-width: 1280px) 1200px, 100vw" };
  }
  if (count === 3 && index === 0) {
    // Phones: the first photo takes the whole row.
    return { item: "col-span-2 sm:col-span-1", frame: "aspect-3/2 sm:aspect-4/3", sizes: "(min-width: 1280px) 400px, (min-width: 640px) 33vw, 100vw" };
  }
  if (count === 4) {
    return { item: "", frame: "aspect-square sm:aspect-4/3", sizes: "(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw" };
  }
  return { item: "", frame: "aspect-square sm:aspect-4/3", sizes: "(min-width: 1280px) 600px, (min-width: 640px) 50vw, 50vw" };
}

/**
 * Static photo grid — everything visible without horizontal scrolling.
 * 1 photo: one wide frame. 2: side by side. 3: on phones the first one full
 * width and two below, from sm one row of three. 4: two by two, one row from lg.
 */
export function PhotoGrid({ photos, className }: PhotoGridProps) {
  const count = photos.length;

  return (
    <ul
      className={cn(
        "grid gap-x-3 gap-y-6 sm:gap-x-4",
        gridColumns[count] ?? gridColumns[4],
        className
      )}
    >
      {photos.map((photo, index) => {
        const tile = tileClasses(count, index);

        return (
          <li key={photo.id} className={tile.item}>
            <figure>
              <div
                className={cn(
                  "relative overflow-hidden rounded-lg bg-white/5",
                  tile.frame
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={tile.sizes}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-[13px] leading-5 text-cream/60">
                {photo.captionTitle && (
                  <span className="font-semibold text-cream">
                    {photo.captionTitle}
                    <span aria-hidden="true"> · </span>
                  </span>
                )}
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
