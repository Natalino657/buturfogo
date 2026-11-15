import type { RouteService } from "@/data/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/dictionaries";
import { formatList, formatPrice, interpolate } from "@/lib/format";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/** Ordered stop names of a route, with the variant appended to the last stop. */
export function getRouteStops(
  route: Pick<RouteService, "stops" | "variant">,
  dict: Pick<Dictionary, "places" | "routeVariants">
): string[] {
  const names = route.stops.map((stop) => dict.places[stop]);
  if (route.variant) {
    names[names.length - 1] += ` (${dict.routeVariants[route.variant]})`;
  }
  return names;
}

/** One-line route label, e.g. "São Filipe – Chã das Caldeiras (Pico Grande)". */
export function getRouteLabel(
  route: Pick<RouteService, "stops" | "variant">,
  dict: Pick<Dictionary, "places" | "routeVariants">
): string {
  return getRouteStops(route, dict).join(" – ");
}

/**
 * Card title of an itinerary: its destinations after the origin, as a list,
 * e.g. "Santa Catarina, Mosteiros e São Lourenço" or "Chã das Caldeiras (Pico Grande)".
 */
export function getTourTitle(
  route: Pick<RouteService, "stops" | "variant">,
  dict: Pick<Dictionary, "places" | "routeVariants">,
  locale: Locale
): string {
  return formatList(getRouteStops(route, dict).slice(1), locale);
}

/** One choice of a BookingSelector, resolved on the server for the current locale. */
export type BookingOption = {
  id: string;
  title: string;
  /** Route stops in travel order; empty for options without a route (e.g. a duration). */
  stops: string[];
  /** Formatted price, e.g. "80 €" / "€80". */
  price: string;
  /** WhatsApp link with the service's personalised message (see getServiceBookingUrl). */
  href: string;
};

/**
 * Builds a BookingOption. `serviceLabel` and `price` go into the WhatsApp
 * message, so it reads exactly as before.
 */
export function getBookingOption(
  locale: Locale,
  option: {
    id: string;
    title: string;
    stops?: readonly string[];
    serviceLabel: string;
    price: number;
  }
): BookingOption {
  return {
    id: option.id,
    title: option.title,
    stops: [...(option.stops ?? [])],
    price: formatPrice(option.price, locale),
    href: getServiceBookingUrl(locale, option.serviceLabel, option.price),
  };
}

/** WhatsApp link with a pre-filled booking message for a specific service and price. */
export function getServiceBookingUrl(
  locale: Locale,
  service: string,
  price: number
): string {
  const message = interpolate(getDictionary(locale).booking.serviceMessage, {
    service,
    price: formatPrice(price, locale),
  });

  return getWhatsAppUrl({ locale, message });
}
