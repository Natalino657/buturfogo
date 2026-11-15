import { ChevronDown } from "lucide-react";

import { Container } from "@/components/Container";
import { licenseUrls, photos, type PhotoId } from "@/data/photos";
import type { Dictionary } from "@/i18n/dictionaries";

type PhotoCreditsProps = {
  dict: Pick<Dictionary, "photos">;
};

const photoIds = Object.keys(photos) as PhotoId[];

/**
 * Footer: one discreet "Créditos das fotografias" line that expands (native
 * <details>, works without JavaScript) into the full list required by the
 * Creative Commons licences: what the photo shows, author (linked to the
 * Commons page) and licence (linked to its text).
 */
export function PhotoCredits({ dict }: PhotoCreditsProps) {
  const linkClass =
    "whitespace-nowrap underline decoration-white/20 underline-offset-4 transition-colors hover:text-cream hover:decoration-lava";

  return (
    <footer className="border-t border-white/[0.06] bg-volcanic py-6 sm:py-8">
      <Container>
        <details className="group">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 rounded text-[13px] text-cream/50 transition-colors outline-none hover:text-cream/80 focus-visible:ring-2 focus-visible:ring-lava/70 [&::-webkit-details-marker]:hidden">
            {dict.photos.credits.title}
            <ChevronDown
              aria-hidden="true"
              className="size-3.5 transition-transform group-open:rotate-180"
            />
          </summary>

          <div className="mt-4 text-[13px] leading-6 text-cream/50">
            <p className="max-w-2xl">{dict.photos.credits.note}</p>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
              {photoIds.map((id) => {
                const photo = photos[id];
                return (
                  <li key={id}>
                    <span className="text-cream/70">{dict.photos.alt[id]}</span>
                    {" — "}
                    <a
                      href={photo.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {photo.author}
                    </a>
                    {", "}
                    <a
                      href={licenseUrls[photo.license]}
                      target="_blank"
                      rel="noopener noreferrer license"
                      className={linkClass}
                    >
                      {photo.license}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      </Container>
    </footer>
  );
}
