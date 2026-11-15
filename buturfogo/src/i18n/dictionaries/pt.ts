import type { DestinationId, PhotoId } from "@/data/destinations";
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
    explore: "Explorar",
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
  intro: {
    eyebrow: "A ilha",
    title: "Ilha do Fogo",
    text: "Uma ilha moldada pelo vulcão. No centro ergue-se o Pico do Fogo, o ponto mais alto de Cabo Verde, rodeado de paisagens de lava, vinhas e vilas junto ao mar.",
  },
  destinations: {
    eyebrow: "Destinos",
    title: "Explore a ilha",
    description: "Da cratera ao mar, cinco lugares para conhecer o Fogo.",
    /** Accessible name of a destination's highlights list. */
    highlightsLabel: "Destaques",
    items: {
      chaDasCaldeiras: {
        name: "Chã das Caldeiras",
        description:
          "Uma planície no interior da antiga caldeira, aos pés do Pico do Fogo e cercada pela parede da Bordeira. Entre campos de lava, as aldeias de Portela e Bangaeira cultivam a vinha em solo vulcânico.",
        highlights: ["Pico do Fogo", "Bordeira", "Vinha e vinho do Fogo"],
      },
      monteVelha: {
        name: "Monte Velha",
        description:
          "Nas encostas da ilha, o Parque Florestal de Monte Velha é uma mancha de floresta onde o nevoeiro passa entre os eucaliptos. Um contraste verde com as paisagens de lava.",
        highlights: ["Parque florestal", "Trilhos"],
      },
      mosteiros: {
        name: "Mosteiros",
        description:
          "No nordeste da ilha, Mosteiros desce das encostas verdes até ao Atlântico. Do miradouro abre-se a vista sobre a costa, e em Igreja o mar enche piscinas naturais entre a rocha vulcânica.",
        highlights: [
          "Miradouro dos Mosteiros",
          "Piscinas naturais de Igreja",
          "Cafeeiros nas encostas",
        ],
      },
      salinas: {
        name: "Salinas de São Jorge",
        description:
          "Na costa noroeste, em São Jorge, a Ponta da Salina junta rocha de lava, mar azul e um pequeno porto de pescadores. Um recanto tranquilo junto ao oceano.",
        highlights: ["Porto de pescadores", "Praia", "Costa de lava"],
      },
      santaCatarina: {
        name: "Santa Catarina",
        description:
          "Santa Catarina ocupa o leste da ilha, entre as encostas do vulcão e o mar. As suas estradas sobem em direção a Chã das Caldeiras e seguem pela costa até Mosteiros.",
        // No highlights until confirmed by the client.
        highlights: [],
      },
    } satisfies Record<
      DestinationId,
      { name: string; description: string; highlights: string[] }
    >,
  },
  photos: {
    alt: {
      "cha-das-caldeiras-bordeira":
        "Parede da Bordeira e aldeias de Chã das Caldeiras",
      "cha-das-caldeiras-lava-2014":
        "Campo de lava de 2014 no interior da cratera, Chã das Caldeiras",
      "cha-das-caldeiras-vinha":
        "Vinha nas encostas do vulcão, Chã das Caldeiras",
      "monte-velha-floresta": "Floresta de Monte Velha com nevoeiro na encosta",
      "monte-velha-trilho": "Trilho no Parque Florestal de Monte Velha",
      "mosteiros-vila": "Vista de Mosteiros e da costa",
      "mosteiros-miradouro":
        "Vista do Miradouro dos Mosteiros sobre a costa",
      "mosteiros-piscinas-igreja": "Piscinas naturais de Igreja, Mosteiros",
      "salinas-porto": "Barcos de pesca na Ponta da Salina",
      "salinas-praia": "Pequeno porto e praia da Ponta da Salina",
      "santa-catarina-estrada":
        "Estrada em direção à caldeira, Santa Catarina",
    } satisfies Record<PhotoId, string>,
    /** Credit shown over each photo. Placeholders: {author}, {license}. */
    credit: "Foto: {author} · {license}",
    gallery: {
      /** Placeholder: {place}. */
      label: "Fotografias de {place}",
      previous: "Foto anterior",
      next: "Foto seguinte",
      /** Placeholders: {current}, {total}. */
      position: "Foto {current} de {total}",
    },
    credits: {
      title: "Créditos das fotografias",
      note: "Fotografias do Wikimedia Commons, redimensionadas e convertidas para WebP. Licenças Creative Commons indicadas em cada imagem.",
    },
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
