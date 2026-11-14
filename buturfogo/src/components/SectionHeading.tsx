import { cn } from "@/lib/utils";

export type SectionTone = "dark" | "light";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** id for the <h2>, so the <section> can reference it with aria-labelledby. */
  titleId?: string;
  align?: "left" | "center";
  /** "dark" on volcanic backgrounds, "light" on cream backgrounds. */
  tone?: SectionTone;
  className?: string;
};

/** Eyebrow + title + optional description, matching the Hero's eyebrow style. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          centered && "justify-center"
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-lava sm:w-10" />
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-xs sm:tracking-[0.3em]",
            tone === "dark" ? "text-sand" : "text-lava"
          )}
        >
          {eyebrow}
        </p>
        {centered && (
          <span aria-hidden="true" className="h-px w-8 bg-lava sm:w-10" />
        )}
      </div>

      <h2
        id={titleId}
        className={cn(
          "mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-cream" : "text-volcanic"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-7 text-pretty sm:text-lg sm:leading-8",
            tone === "dark" ? "text-cream/65" : "text-volcanic/70"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
