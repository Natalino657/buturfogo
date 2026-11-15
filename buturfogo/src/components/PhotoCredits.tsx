import { Container } from "@/components/Container";
import { destinations, licenseUrls } from "@/data/destinations";
import type { Dictionary } from "@/i18n/dictionaries";

type PhotoCreditsProps = {
  dict: Pick<Dictionary, "photos">;
};

/** Footer list crediting every destination photo (required by CC BY-SA). */
export function PhotoCredits({ dict }: PhotoCreditsProps) {
  const linkClass =
    "whitespace-nowrap underline decoration-white/20 underline-offset-4 transition-colors hover:text-lava hover:decoration-lava";

  return (
    <footer
      aria-labelledby="photo-credits-title"
      className="border-t border-white/10 bg-volcanic py-12 sm:py-16"
    >
      <Container>
        <h2
          id="photo-credits-title"
          className="text-[11px] font-semibold tracking-[0.28em] text-sand uppercase sm:text-xs sm:tracking-[0.3em]"
        >
          {dict.photos.credits.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/55">
          {dict.photos.credits.note}
        </p>

        <ul className="mt-8 grid gap-x-10 gap-y-3 text-sm leading-6 text-cream/55 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.flatMap((destination) =>
            destination.photos.map((photo) => (
              <li key={photo.id}>
                <span className="text-cream/80">{dict.photos.alt[photo.id]}</span>
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
            ))
          )}
        </ul>
      </Container>
    </footer>
  );
}
