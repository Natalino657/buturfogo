import Image from "next/image";

import { cn } from "@/lib/utils";

export type GridPhoto = {
  id: string;
  src: string;
  alt: string;
  /** Optional bold lead of the caption, e.g. the place name. */
  captionTitle?: string;
  caption: string;
  /** Attribution, e.g. "Foto: Ji-Elle · CC BY-SA 3.0", linked to the source. */
  credit: string;
  sourceUrl: string;
};

type PhotoGridProps = {
  /** 1 to 3 photos. */
  photos: readonly GridPhoto[];
  className?: string;
};

/**
 * Static photo grid — everything visible without horizontal scrolling.
 * Phones: the first photo full width, the others two per row below.
 * From sm up: one column per photo, all the same size.
 */
export function PhotoGrid({ photos, className }: PhotoGridProps) {
  const count = photos.length;

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4",
        count === 2 && "sm:grid-cols-2",
        count >= 3 && "sm:grid-cols-3",
        className
      )}
    >
      {photos.map((photo, index) => {
        // On phones the first photo (or a lone one) takes the full row.
        const wide = index === 0 && count !== 2;

        return (
          <li key={photo.id} className={cn(wide && "col-span-2 sm:col-span-1", count === 1 && "sm:col-span-full")}>
            <figure>
              <div
                className={cn(
                  "relative overflow-hidden rounded-lg bg-white/5",
                  wide ? "aspect-3/2" : "aspect-square",
                  "sm:aspect-4/3",
                  count === 1 && "sm:aspect-21/9"
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    count === 1
                      ? "(min-width: 1280px) 1200px, 100vw"
                      : "(min-width: 1280px) 400px, (min-width: 640px) 33vw, 50vw"
                  }
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
                <a
                  href={photo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block w-fit text-[11px] text-cream/35 underline-offset-2 transition-colors outline-none hover:text-cream/70 hover:underline focus-visible:text-cream focus-visible:underline"
                >
                  {photo.credit}
                </a>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
