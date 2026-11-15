import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { BookingLink } from "@/components/BookingLink";
import { RouteStops } from "@/components/RouteStops";
import type { Locale } from "@/i18n/config";
import { formatPrice, interpolate } from "@/lib/format";
import { cn } from "@/lib/utils";

export type ServiceRowLabels = {
  /** "por veículo" / "per vehicle". */
  perVehicle: string;
  /** Visible button text, e.g. "Reservar". */
  cta: string;
  /** Accessible name template for the button, with a {service} placeholder. */
  ctaLabel: string;
  /** Accessible name of the route list. */
  route: string;
};

type ServiceRowProps = {
  locale: Locale;
  title: string;
  /** "h3"/"h4" for services; "p" for an option under an already titled service. */
  titleAs?: "h3" | "h4" | "p";
  /** Small muted icon before the title. */
  icon?: LucideIcon;
  /** Route stops in travel order (see getRouteStops). */
  stops?: readonly string[];
  /** EUR, per vehicle. */
  price: number;
  /** Service name used in the WhatsApp message and the button's accessible name. */
  serviceLabel: string;
  labels: ServiceRowLabels;
  className?: string;
};

/**
 * One bookable service as a list row: name and route on the left, price and
 * booking button on the right. Stacks on phones, with price and button on one line.
 * Render inside a <ul> (see ServiceList).
 */
export function ServiceRow({
  locale,
  title,
  titleAs: Title = "h3",
  icon: Icon,
  stops,
  price,
  serviceLabel,
  labels,
  className,
}: ServiceRowProps) {
  return (
    <li
      className={cn(
        "grid gap-x-8 gap-y-4 border-b border-white/[0.07] py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:py-6",
        className
      )}
    >
      <div className="min-w-0">
        <Title
          className={cn(
            "flex items-center gap-2.5 leading-snug text-balance",
            Title === "p"
              ? // Option under a titled service (e.g. a duration): lighter.
                "text-[15px] font-semibold text-cream/85 sm:text-base"
              : "font-heading text-[17px] font-bold text-cream sm:text-lg lg:text-[19px]"
          )}
        >
          {Icon && (
            <Icon
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-4 shrink-0 text-cream/40"
            />
          )}
          {title}
        </Title>
        {stops && stops.length > 0 && (
          <RouteStops
            stops={stops}
            label={labels.route}
            variant="inline"
            className="mt-1.5"
          />
        )}
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <p className="flex flex-col sm:items-end">
          <span className="font-heading text-xl leading-none font-bold tracking-tight text-cream sm:text-[22px]">
            {formatPrice(price, locale)}
          </span>
          <span className="mt-1.5 text-[11px] font-medium tracking-[0.14em] text-cream/45 uppercase">
            {labels.perVehicle}
          </span>
        </p>
        <BookingLink
          locale={locale}
          service={{ label: serviceLabel, price }}
          ariaLabel={interpolate(labels.ctaLabel, { service: serviceLabel })}
          variant="subtle"
          size="sm"
        >
          {labels.cta}
        </BookingLink>
      </div>
    </li>
  );
}

type ServiceListProps = {
  children: ReactNode;
  className?: string;
};

/** Hairline-separated list of ServiceRows. */
export function ServiceList({ children, className }: ServiceListProps) {
  return (
    <ul className={cn("border-t border-white/[0.07]", className)}>{children}</ul>
  );
}
