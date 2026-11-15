import Image from "next/image";

import { cn } from "@/lib/utils";

/** A photo ready to render: texts already resolved for the current locale. */
export type ResolvedPhoto = {
  id: string;
  src: string;
  alt: string;
  /** Visible attribution, e.g. "Foto: Ji-Elle · CC BY-SA 3.0". */
  credit: string;
  sourceUrl: string;
};

type DestinationPhotoProps = {
  photo: ResolvedPhoto;
  className?: string;
};

/** Large editorial photo with its CC BY-SA attribution linked to the source. */
export function DestinationPhoto({ photo, className }: DestinationPhotoProps) {
  return (
    <figure
      className={cn(
        "relative aspect-4/5 overflow-hidden bg-white/5 sm:aspect-4/3",
        className
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1280px) 750px, (min-width: 1024px) 58vw, 100vw"
        className="object-cover"
      />
      <figcaption className="absolute right-3 bottom-3 max-w-[calc(100%-1.5rem)]">
        <a
          href={photo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block truncate rounded-full bg-volcanic/65 px-2.5 py-1 text-[10px] leading-4 text-cream/80 backdrop-blur-sm transition-colors hover:text-cream"
        >
          {photo.credit}
        </a>
      </figcaption>
    </figure>
  );
}
