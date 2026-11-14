import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { BookingLink } from "@/components/BookingLink";
import { RouteStops } from "@/components/RouteStops";
import type { SectionTone } from "@/components/SectionHeading";
import type { Locale } from "@/i18n/config";
import { formatPrice, interpolate } from "@/lib/format";
import { cn } from "@/lib/utils";

export type PriceOption = {
  /** Option name shown next to the price, e.g. a duration ("1h30"). Omit for single-price services. */
  label?: string;
  /** EUR, per vehicle. */
  price: number;
  /** Service name used in the WhatsApp message and the button's accessible name. */
  serviceLabel: string;
};

type ServiceCardProps = {
  locale: Locale;
  title: string;
  /** Heading level of the title: "h4" when the card sits under a group <h3>. */
  titleAs?: "h3" | "h4";
  eyebrow?: string;
  /** Route stops in travel order (see getRouteStops). */
  stops?: readonly string[];
  /** One option = single price layout; several = one row (and button) per option. */
  options: readonly PriceOption[];
  labels: {
    /** "por veículo" / "per vehicle". */
    perVehicle: string;
    /** Visible button text, e.g. "Reservar". */
    cta: string;
    /** Accessible name template for the button, with a {service} placeholder. */
    ctaLabel: string;
    /** Accessible name of the route list. */
    route?: string;
  };
  icon?: LucideIcon;
  /** Optional client photo; the card is fully designed without one. */
  image?: { src: string; alt: string };
  tone?: SectionTone;
  className?: string;
};

export function ServiceCard({
  locale,
  title,
  titleAs: Title = "h3",
  eyebrow,
  stops,
  options,
  labels,
  icon: Icon,
  image,
  tone = "dark",
  className,
}: ServiceCardProps) {
  const dark = tone === "dark";
  const single = options.length === 1 ? options[0] : null;

  const bookingProps = (option: PriceOption) => ({
    locale,
    service: { label: option.serviceLabel, price: option.price },
    ariaLabel: interpolate(labels.ctaLabel, { service: option.serviceLabel }),
  });

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        dark
          ? "border-white/10 bg-linear-to-b from-white/7 to-white/2 hover:border-lava/40 hover:shadow-[0_24px_48px_-24px_rgba(247,90,27,0.35)]"
          : "border-volcanic/10 bg-white shadow-sm hover:border-lava/40 hover:shadow-[0_24px_48px_-24px_rgba(23,23,23,0.25)]",
        className
      )}
    >
      {/* Lava hairline that lights up on hover. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-lava to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {image && (
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-linear-to-t to-transparent",
              dark ? "from-volcanic/70" : "from-volcanic/40"
            )}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div className="flex items-start gap-4">
          {Icon && !image && (
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-lava/25 bg-lava/10 text-lava"
            >
              <Icon className="size-5" />
            </span>
          )}
          <div className="min-w-0">
            {eyebrow && (
              <p
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.22em]",
                  dark ? "text-sand" : "text-lava"
                )}
              >
                {eyebrow}
              </p>
            )}
            <Title
              className={cn(
                "font-heading text-lg font-bold leading-snug text-balance sm:text-xl",
                eyebrow && "mt-1",
                dark ? "text-cream" : "text-volcanic"
              )}
            >
              {title}
            </Title>
          </div>
        </div>

        {stops && stops.length > 0 && (
          <RouteStops stops={stops} label={labels.route} tone={tone} />
        )}

        <div
          className={cn(
            "mt-auto border-t pt-5",
            dark ? "border-white/10" : "border-volcanic/10"
          )}
        >
          {single ? (
            <div className="flex flex-wrap items-end justify-between gap-4">
              <p className="flex flex-col">
                <span
                  className={cn(
                    "font-heading text-3xl font-extrabold leading-none tracking-tight",
                    dark ? "text-cream" : "text-volcanic"
                  )}
                >
                  {formatPrice(single.price, locale)}
                </span>
                <span
                  className={cn(
                    "mt-2 text-[11px] font-semibold uppercase tracking-[0.18em]",
                    dark ? "text-sand" : "text-volcanic/60"
                  )}
                >
                  {labels.perVehicle}
                </span>
              </p>
              <BookingLink {...bookingProps(single)} size="sm">
                {labels.cta}
              </BookingLink>
            </div>
          ) : (
            <>
              <ul
                className={cn(
                  "divide-y",
                  dark ? "divide-white/10" : "divide-volcanic/10"
                )}
              >
                {options.map((option) => (
                  <li
                    key={option.serviceLabel}
                    // Below 360px every row stacks (price above a full-width button) so all
                    // options look the same instead of wrapping unevenly.
                    className="flex items-center justify-between gap-x-4 gap-y-3 py-3 first:pt-0 max-[359px]:flex-col max-[359px]:items-stretch"
                  >
                    <p className="flex items-baseline gap-3">
                      <span
                        className={cn(
                          "text-sm font-medium",
                          dark ? "text-cream/75" : "text-volcanic/75"
                        )}
                      >
                        {option.label}
                      </span>
                      <span
                        className={cn(
                          "font-heading text-2xl font-extrabold tracking-tight",
                          dark ? "text-cream" : "text-volcanic"
                        )}
                      >
                        {formatPrice(option.price, locale)}
                      </span>
                    </p>
                    <BookingLink {...bookingProps(option)} size="sm">
                      {labels.cta}
                    </BookingLink>
                  </li>
                ))}
              </ul>
              <p
                className={cn(
                  "mt-3 text-[11px] font-semibold uppercase tracking-[0.18em]",
                  dark ? "text-sand" : "text-volcanic/60"
                )}
              >
                {labels.perVehicle}
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
