import type {
  DurationId,
  ExperienceId,
  PlaceId,
  RouteVariantId,
  TourGroupId,
  TransferId,
} from "@/data/services";

/**
 * Portuguese dictionary. Its shape defines the `Dictionary` type,
 * so every other language must provide exactly the same keys.
 */
export const pt = {
  metadata: {
    title: "BUTURFOGO | Transfers & Tours",
    description:
      "Descubra a ilha. Viva a experiência. Explore a Ilha do Fogo com BUTURFOGO Transfers & Tours.",
  },
  navigation: {
    home: "Início",
    transfers: "Transfer",
    tours: "Passeios",
    about: "Sobre nós",
    openMenu: "Abrir menu",
    closeMenu: "Fechar",
  },
  languageSwitcher: {
    label: "Idioma",
    pt: "Português",
    en: "English",
  },
  hero: {
    location: "Ilha do Fogo · Cabo Verde",
    titleLead: "Descubra a ilha.",
    titleHighlight: "Viva a experiência.",
    description:
      "Explore as paisagens vulcânicas, descubra lugares extraordinários e viva a Ilha do Fogo connosco.",
    primaryCta: "Reserve a sua viagem",
    secondaryCta: "Explorar serviços",
    scrollHint: "Descubra mais",
    imageAlt: "Pico do Fogo ao pôr do sol, Ilha do Fogo",
  },
  transfers: {
    title: "Transfers",
    description:
      "Transporte desde o aeroporto e o porto até ao seu hotel em São Filipe, e de São Filipe para Chã das Caldeiras, Mosteiros e Salinas.",
    items: {
      "airport-hotel": "Transfer Aeroporto",
      "port-hotel": "Transfer Porto",
      "saofilipe-cha": "Transfer para Chã das Caldeiras",
      "saofilipe-mosteiros": "Transfer para Mosteiros",
      "saofilipe-salinas": "Transfer para Salinas",
    } satisfies Record<TransferId, string>,
  },
  tours: {
    title: "Passeios e experiências",
    description: "Explore os destinos mais especiais da Ilha do Fogo.",
    groups: {
      chaDasCaldeiras: "Chã das Caldeiras",
      aroundTheIsland: "Pela ilha",
    } satisfies Record<TourGroupId, string>,
    /** Service name in the WhatsApp message. Placeholder: {route}. */
    bookingLabel: "Passeio {route}",
  },
  experiences: {
    title: "Experiências",
    items: {
      salinasVisit: { title: "Visita às Salinas" },
    } satisfies Record<ExperienceId, { title: string }>,
    /** Service name in the WhatsApp message. Placeholders: {experience}, {duration}. */
    optionLabel: "{experience} ({duration})",
  },
  /** Place names used in routes. Proper nouns stay the same in every language. */
  places: {
    airport: "Aeroporto",
    port: "Porto",
    hotelSaoFilipe: "Hotel (São Filipe)",
    saoFilipe: "São Filipe",
    chaDasCaldeiras: "Chã das Caldeiras",
    mosteiros: "Mosteiros",
    salinas: "Salinas",
    santaCatarina: "Santa Catarina",
    saoLourenco: "São Lourenço",
    monteVelha: "Monte Velha",
    sabuceiroRecupera: "Sabuceiro e Recupera nas Hortas",
  } satisfies Record<PlaceId, string>,
  routeVariants: {
    picoGrande: "Pico Grande",
    picoPequeno: "Pico Pequeno",
  } satisfies Record<RouteVariantId, string>,
  durations: {
    min90: "1h30",
    min120: "2 horas",
  } satisfies Record<DurationId, string>,
  pricing: {
    perVehicle: "Preços por veículo.",
    perVehicleShort: "por veículo",
  },
  serviceCard: {
    /** Accessible name of the route list. */
    route: "Percurso",
  },
  about: {
    title: "Sobre o BUTURFOGO",
  },
  booking: {
    cta: "Reservar agora",
    whatsappMessage:
      "Olá BUTURFOGO! Gostaria de mais informações sobre os vossos serviços.",
    /** Pre-filled message for a specific service. Placeholders: {service}, {price}. */
    serviceMessage:
      "Olá BUTURFOGO! Gostaria de reservar: {service} — {price} (preço por veículo).",
    serviceCta: "Reservar",
    /** Accessible name of a service's booking button. Placeholder: {service}. */
    serviceCtaLabel: "Reservar {service} pelo WhatsApp",
  },
};

export type Dictionary = typeof pt;
