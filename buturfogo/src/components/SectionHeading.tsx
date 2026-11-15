import { Info } from "lucide-react";

type SectionHeadingProps = {
  /** id of the <h2>, so the <section> can reference it with aria-labelledby. */
  titleId: string;
  title: string;
  /** Short note on the right, e.g. "Preços por veículo." */
  note?: string;
  description?: string;
  className?: string;
};

/**
 * Heading of a main section: title on the left, an optional short note on the
 * right, a hairline below, and an optional description under it.
 */
export function SectionHeading({
  titleId,
  title,
  note,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={className}>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-white/10 pb-5">
        <h2
          id={titleId}
          className="font-heading text-[clamp(1.875rem,1.35rem+1.5vw,2.5rem)] leading-[1.15] font-extrabold tracking-tight text-balance text-cream"
        >
          {title}
        </h2>
        {note && (
          <p className="flex items-center gap-1.5 pb-1.5 text-[13px] text-cream/55">
            <Info aria-hidden="true" className="size-3.5 shrink-0 text-sand" />
            {note}
          </p>
        )}
      </div>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-pretty text-cream/65 lg:text-[17px]">
          {description}
        </p>
      )}
    </header>
  );
}
