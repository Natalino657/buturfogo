import { Info, Map as MapIcon, Mountain, type LucideIcon } from "lucide-react";

import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/config/site";
import { experiences, tourGroups, tours, type TourGroupId } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { interpolate } from "@/lib/format";
import { getRouteLabel, getRouteStops, getTourTitle } from "@/lib/services";
import { cn } from "@/lib/utils";

const groupIcons: Record<TourGroupId, LucideIcon> = {
  chaDasCaldeiras: Mountain,
  aroundTheIsland: MapIcon,
};

/** The volcano group is the featured one: framed in a lava-tinted panel. */
const featuredGroup: TourGroupId = "chaDasCaldeiras";

type ToursSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

export function ToursSection({ locale, dict }: ToursSectionProps) {
  const labels = {
    perVehicle: dict.pricing.perVehicleShort,
    cta: dict.booking.serviceCta,
    ctaLabel: dict.booking.serviceCtaLabel,
    route: dict.serviceCard.route,
  };

  return (
    <section
      id="passeios"
      aria-labelledby="tours-title"
      className="scroll-mt-20 bg-[#202020] px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          titleId="tours-title"
          eyebrow={siteConfig.name}
          title={dict.tours.title}
          description={dict.tours.description}
        />

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/10 px-4 py-2 text-sm font-medium text-sand">
          <Info aria-hidden="true" className="size-4 shrink-0" />
          {dict.pricing.perVehicle}
        </p>

        <div className="mt-12 flex flex-col gap-14 sm:gap-16">
          {tourGroups.map((group) => {
            const featured = group === featuredGroup;
            const Icon = groupIcons[group];
            const titleId = `tours-group-${group}`;
            const items = tours.filter((tour) => tour.group === group);

            return (
              <div
                key={group}
                role="group"
                aria-labelledby={titleId}
                className={cn(
                  featured &&
                    "-mx-5 border-y border-lava/25 bg-linear-to-b from-lava/12 via-lava/4 to-transparent px-5 py-8 sm:mx-0 sm:rounded-3xl sm:border sm:p-8 lg:p-10"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-xl border",
                      featured
                        ? "size-12 border-lava/40 bg-lava text-white"
                        : "size-11 border-lava/25 bg-lava/10 text-lava"
                    )}
                  >
                    <Icon className={featured ? "size-6" : "size-5"} />
                  </span>
                  <h3
                    id={titleId}
                    className={cn(
                      "font-heading font-extrabold leading-tight tracking-tight text-cream",
                      featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    )}
                  >
                    {dict.tours.groups[group]}
                  </h3>
                </div>

                <ul
                  className={cn(
                    "mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2",
                    featured
                      ? // 3 cards: the odd one out spans both columns on tablets.
                        "lg:grid-cols-3 sm:max-lg:[&>li:last-child:nth-child(odd)]:col-span-2"
                      : "xl:grid-cols-4"
                  )}
                >
                  {items.map((tour) => (
                    <li key={tour.id}>
                      <ServiceCard
                        locale={locale}
                        titleAs="h4"
                        title={getTourTitle(tour, dict, locale)}
                        stops={getRouteStops(tour, dict)}
                        options={[
                          {
                            price: tour.price,
                            serviceLabel: interpolate(dict.tours.bookingLabel, {
                              route: getRouteLabel(tour, dict),
                            }),
                          },
                        ]}
                        labels={labels}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              locale={locale}
              experience={experience}
              dict={dict}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
