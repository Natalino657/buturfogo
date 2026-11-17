import { siteConfig } from "@/config/site";
import { FOGO_HERO_SRC } from "@/data/hero";
import { currency, experiences, tours, transfers } from "@/data/services";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { interpolate } from "@/lib/format";
import { getRouteLabel } from "@/lib/services";

type StructuredDataProps = {
  locale: Locale;
  dict: Dictionary;
};

/** One bookable service with its price (EUR, per vehicle), as in services.ts. */
function offer(name: string, price: number, note: string) {
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
    price,
    priceCurrency: currency,
    description: note,
  };
}

/**
 * Every transfer, tour and experience, named as in the WhatsApp booking
 * message, so search engines see the same services and prices as visitors.
 */
function getOffers(dict: Dictionary) {
  const note = dict.pricing.perVehicle;

  return [
    ...transfers.map((transfer) =>
      offer(
        interpolate(dict.transfers.bookingLabel, {
          route: getRouteLabel(transfer, dict),
        }),
        transfer.price,
        note
      )
    ),
    ...tours.map((tour) =>
      offer(
        interpolate(dict.tours.bookingLabel, {
          route: getRouteLabel(tour, dict),
        }),
        tour.price,
        note
      )
    ),
    ...experiences.flatMap((experience) =>
      experience.options.map((option) =>
        offer(
          interpolate(dict.experiences.optionLabel, {
            experience: dict.experiences.items[experience.id],
            duration: dict.durations[option.duration],
          }),
          option.price,
          note
        )
      )
    ),
  ];
}

/**
 * schema.org data (JSON-LD) telling search engines what the site and the
 * business are, and which services it sells. Only facts already on the page
 * are stated: there is no street address, opening hours or rating to declare.
 */
export function StructuredData({ locale, dict }: StructuredDataProps) {
  const { url } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteConfig.name,
        inLanguage: locales,
      },
      {
        "@type": "TravelAgency",
        "@id": `${url}/#business`,
        name: siteConfig.name,
        url: `${url}/${locale}`,
        description: dict.metadata.description,
        image: `${url}${FOGO_HERO_SRC}`,
        telephone: `+${siteConfig.whatsapp.phone}`,
        email: siteConfig.email,
        areaServed: {
          "@type": "Place",
          name: "Ilha do Fogo, Cabo Verde",
        },
        makesOffer: getOffers(dict),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
