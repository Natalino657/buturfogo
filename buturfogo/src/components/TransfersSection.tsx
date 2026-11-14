import { CarFront, Info, Plane, Ship, type LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/config/site";
import { transfers, type TransferId } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getRouteLabel, getRouteStops } from "@/lib/services";

const icons: Record<TransferId, LucideIcon> = {
  "airport-hotel": Plane,
  "port-hotel": Ship,
  "saofilipe-cha": CarFront,
  "saofilipe-mosteiros": CarFront,
  "saofilipe-salinas": CarFront,
};

type TransfersSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

export function TransfersSection({ locale, dict }: TransfersSectionProps) {
  const labels = {
    perVehicle: dict.pricing.perVehicleShort,
    cta: dict.booking.serviceCta,
    ctaLabel: dict.booking.serviceCtaLabel,
    route: dict.serviceCard.route,
  };

  return (
    <section
      id="transfers"
      aria-labelledby="transfers-title"
      className="scroll-mt-20 bg-volcanic px-5 py-20 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          titleId="transfers-title"
          eyebrow={siteConfig.name}
          title={dict.transfers.title}
          description={dict.transfers.description}
        />

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/10 px-4 py-2 text-sm font-medium text-sand">
          <Info aria-hidden="true" className="size-4 shrink-0" />
          {dict.pricing.perVehicle}
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {transfers.map((transfer) => (
            <li key={transfer.id}>
              <ServiceCard
                locale={locale}
                icon={icons[transfer.id]}
                title={dict.transfers.items[transfer.id]}
                stops={getRouteStops(transfer, dict)}
                options={[
                  {
                    price: transfer.price,
                    serviceLabel: getRouteLabel(transfer, dict),
                  },
                ]}
                labels={labels}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
