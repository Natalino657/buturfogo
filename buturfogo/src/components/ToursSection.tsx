import { Map as MapIcon, Mountain, Waves, type LucideIcon } from "lucide-react";

import { ExperienceCard } from "@/components/ExperienceCard";
import { ServiceGroup } from "@/components/ServiceGroup";
import { ServiceList, ServiceRow } from "@/components/ServiceRow";
import { ServiceSection } from "@/components/ServiceSection";
import { siteConfig } from "@/config/site";
import { experiences, tourGroups, tours, type TourGroupId } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { interpolate } from "@/lib/format";
import { getRouteLabel, getRouteStops, getTourTitle } from "@/lib/services";

const groupIcons: Record<TourGroupId, LucideIcon> = {
  chaDasCaldeiras: Mountain,
  aroundTheIsland: MapIcon,
};

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
    <ServiceSection
      id="passeios"
      titleId="tours-title"
      eyebrow={siteConfig.name}
      title={dict.tours.title}
      description={dict.tours.description}
      note={dict.pricing.perVehicle}
      className="bg-[#202020]"
    >
      {tourGroups.map((group) => (
        <ServiceGroup
          key={group}
          titleId={`tours-group-${group}`}
          title={dict.tours.groups[group]}
          icon={groupIcons[group]}
        >
          <ServiceList>
            {tours
              .filter((tour) => tour.group === group)
              .map((tour) => (
                <ServiceRow
                  key={tour.id}
                  locale={locale}
                  titleAs="h4"
                  title={getTourTitle(tour, dict, locale)}
                  stops={getRouteStops(tour, dict)}
                  price={tour.price}
                  serviceLabel={interpolate(dict.tours.bookingLabel, {
                    route: getRouteLabel(tour, dict),
                  })}
                  labels={labels}
                />
              ))}
          </ServiceList>
        </ServiceGroup>
      ))}

      <ServiceGroup
        titleId="tours-group-experiences"
        title={dict.experiences.title}
        icon={Waves}
      >
        <div className="flex flex-col gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              locale={locale}
              experience={experience}
              dict={dict}
              labels={labels}
            />
          ))}
        </div>
      </ServiceGroup>
    </ServiceSection>
  );
}
