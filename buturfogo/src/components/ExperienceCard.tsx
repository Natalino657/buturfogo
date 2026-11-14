import { Clock, Waves } from "lucide-react";

import { BookingLink } from "@/components/BookingLink";
import type { Experience } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatPrice, interpolate } from "@/lib/format";

type ExperienceCardProps = {
  locale: Locale;
  experience: Experience;
  dict: Pick<Dictionary, "experiences" | "durations" | "pricing" | "booking">;
};

/**
 * An activity with several durations: its name on one side, one tile per
 * duration (duration, price, booking button) on the other.
 */
export function ExperienceCard({ locale, experience, dict }: ExperienceCardProps) {
  const title = dict.experiences.items[experience.id].title;
  const titleId = `experience-${experience.id}`;

  return (
    <article
      aria-labelledby={titleId}
      className="relative overflow-hidden rounded-3xl border border-sand/25 bg-linear-to-br from-sand/12 via-white/3 to-transparent p-5 sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-12">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-sand/30 bg-sand/10 text-sand"
          >
            <Waves className="size-6" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">
              {dict.experiences.title}
            </p>
            <h3
              id={titleId}
              className="mt-1 font-heading text-2xl font-extrabold leading-tight tracking-tight text-balance text-cream sm:text-3xl"
            >
              {title}
            </h3>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {experience.options.map((option) => {
            const duration = dict.durations[option.duration];
            const serviceLabel = interpolate(dict.experiences.optionLabel, {
              experience: title,
              duration,
            });

            return (
              <li
                key={option.duration}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-volcanic/60 p-5"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-cream/85">
                  <Clock aria-hidden="true" className="size-4 shrink-0 text-lava" />
                  {duration}
                </p>
                <p className="flex flex-col">
                  <span className="font-heading text-4xl font-extrabold leading-none tracking-tight text-cream">
                    {formatPrice(option.price, locale)}
                  </span>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sand">
                    {dict.pricing.perVehicleShort}
                  </span>
                </p>
                <BookingLink
                  locale={locale}
                  service={{ label: serviceLabel, price: option.price }}
                  ariaLabel={interpolate(dict.booking.serviceCtaLabel, {
                    service: serviceLabel,
                  })}
                  size="sm"
                  className="mt-auto w-full"
                >
                  {dict.booking.serviceCta}
                </BookingLink>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
