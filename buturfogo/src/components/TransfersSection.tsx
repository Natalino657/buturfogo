import { CarFront, Plane, Ship, type LucideIcon } from "lucide-react";

import { ServiceList, ServiceRow } from "@/components/ServiceRow";
import { ServiceSection } from "@/components/ServiceSection";
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
    <ServiceSection
      id="transfers"
      titleId="transfers-title"
      eyebrow={siteConfig.name}
      title={dict.transfers.title}
      description={dict.transfers.description}
      note={dict.pricing.perVehicle}
      className="bg-volcanic"
    >
      <ServiceList>
        {transfers.map((transfer) => (
          <ServiceRow
            key={transfer.id}
            locale={locale}
            icon={icons[transfer.id]}
            title={dict.transfers.items[transfer.id]}
            stops={getRouteStops(transfer, dict)}
            price={transfer.price}
            serviceLabel={getRouteLabel(transfer, dict)}
            labels={labels}
          />
        ))}
      </ServiceList>
    </ServiceSection>
  );
}
