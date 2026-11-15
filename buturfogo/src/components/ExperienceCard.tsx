import { Clock } from "lucide-react";

import { ServiceList, ServiceRow, type ServiceRowLabels } from "@/components/ServiceRow";
import type { Experience } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { interpolate } from "@/lib/format";

type ExperienceCardProps = {
  locale: Locale;
  experience: Experience;
  dict: Pick<Dictionary, "experiences" | "durations">;
  labels: ServiceRowLabels;
};

/**
 * An activity with several durations, compact: its name, then one row per
 * duration (duration, price, booking button with its own WhatsApp message).
 */
export function ExperienceCard({
  locale,
  experience,
  dict,
  labels,
}: ExperienceCardProps) {
  const title = dict.experiences.items[experience.id].title;
  const titleId = `experience-${experience.id}`;

  return (
    <article aria-labelledby={titleId}>
      <h4
        id={titleId}
        className="pb-3 font-heading text-[17px] leading-snug font-bold text-cream sm:text-lg lg:text-[19px]"
      >
        {title}
      </h4>
      <ServiceList>
        {experience.options.map((option) => {
          const duration = dict.durations[option.duration];

          return (
            <ServiceRow
              key={option.duration}
              locale={locale}
              titleAs="p"
              icon={Clock}
              title={duration}
              price={option.price}
              serviceLabel={interpolate(dict.experiences.optionLabel, {
                experience: title,
                duration,
              })}
              labels={labels}
              className="py-4 sm:py-4"
            />
          );
        })}
      </ServiceList>
    </article>
  );
}
