import { CarFront, Plane, Ship, type LucideIcon } from "lucide-react";

import { BookingSelector } from "@/components/BookingSelector";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { transfers, type TransferId } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getBookingOption, getRouteLabel, getRouteStops } from "@/lib/services";

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

/** Transfers, kept apart from the tours: one option list and a single booking button. */
export function TransfersSection({ locale, dict }: TransfersSectionProps) {
  const options = transfers.map((transfer) => {
    const Icon = icons[transfer.id];
    return {
      ...getBookingOption(locale, {
        id: transfer.id,
        title: dict.transfers.items[transfer.id],
        stops: getRouteStops(transfer, dict),
        serviceLabel: getRouteLabel(transfer, dict),
        price: transfer.price,
      }),
      icon: (
        <Icon
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-4 shrink-0 text-cream/40"
        />
      ),
    };
  });

  return (
    <section
      id="transfers"
      aria-labelledby="transfers-title"
      className="scroll-mt-20 border-t border-white/[0.06] bg-volcanic py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          titleId="transfers-title"
          title={dict.transfers.title}
          note={dict.pricing.perVehicle}
          description={dict.transfers.description}
        />
        <BookingSelector
          className="mt-10"
          legend={dict.booking.selector.chooseTransfer}
          options={options}
          labels={{
            cta: dict.booking.selector.bookTransfer,
            hint: dict.booking.selector.hint,
            perVehicle: dict.pricing.perVehicleShort,
            route: dict.booking.selector.route,
            opensWhatsapp: dict.booking.opensWhatsapp,
          }}
        />
      </Container>
    </section>
  );
}
