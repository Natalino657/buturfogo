import type { DestinationId } from "@/data/destinations";
import type { PhotoId } from "@/data/photos";
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
    tours: "Passeios",
    transfers: "Transfer",
    about: "Sobre nós",
    contact: "Contactos",
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
    /** Background photo controls. */
    carousel: {
      label: "Fotografias da Ilha do Fogo",
      /** Placeholders: {current}, {total}. */
      goTo: "Mostrar fotografia {current} de {total}",
      pause: "Pausar fotografias",
      play: "Retomar fotografias",
    },
  },
  /** "O que fazemos": overview of the services in services.ts (no prices). */
  whatWeDo: {
    title: "O que fazemos",
    items: {
      airportHotel: {
        title: "Transfers de aeroporto e hotel",
        text: "Transporte entre o aeroporto, porto e alojamento.",
      },
      island: {
        title: "Deslocações na ilha",
        text: "Transporte privado para explorar diferentes localidades e pontos de interesse.",
      },
      tours: {
        title: "Tours e experiências",
        text: "Percursos para descobrir as paisagens e os lugares mais especiais da Ilha do Fogo.",
      },
    },
  },
  intro: {
    title: "Ilha do Fogo",
    text: "Uma ilha moldada pelo vulcão. No centro ergue-se o Pico do Fogo, o ponto mais alto de Cabo Verde, rodeado de paisagens de lava, vinhas e vilas junto ao mar.",
  },

  /* ---------------------------------------------------------------- Tours */

  tours: {
    title: "Passeios pela ilha",
    groups: {
      chaDasCaldeiras: "Chã das Caldeiras",
      aroundTheIsland: "Pela ilha",
      otherTours: "Outros passeios",
    } satisfies Record<TourGroupId, string>,
    /** Service name in the WhatsApp message. Placeholder: {route}. */
    bookingLabel: "Passeio {route}",
  },
  /** Destination names and descriptions. */
  destinations: {
    chaDasCaldeiras: {
      name: "Chã das Caldeiras",
      description:
        "Uma planície no interior da antiga caldeira, aos pés do Pico do Fogo e cercada pela parede da Bordeira. Entre campos de lava, as aldeias de Portela e Bangaeira cultivam a vinha em solo vulcânico.",
    },
    monteVelha: {
      name: "Monte Velha",
      description:
        "Nas encostas da ilha, o Parque Florestal de Monte Velha é uma mancha de floresta onde o nevoeiro passa entre os eucaliptos. Um contraste verde com as paisagens de lava.",
    },
    mosteiros: {
      name: "Mosteiros",
      description:
        "No nordeste da ilha, Mosteiros desce das encostas verdes até ao Atlântico. Do miradouro abre-se a vista sobre a costa, e em Igreja o mar enche piscinas naturais entre a rocha vulcânica.",
    },
    salinas: {
      // Location detail (São Jorge) pending confirmation by the client.
      name: "Salinas",
      description:
        "Na costa noroeste, em São Jorge, a Ponta da Salina junta rocha de lava, mar azul e um pequeno porto de pescadores. Um recanto tranquilo junto ao oceano.",
    },
    santaCatarina: {
      name: "Santa Catarina",
      description:
        "Santa Catarina ocupa o leste da ilha, entre as encostas do vulcão e o mar. As suas estradas sobem em direção a Chã das Caldeiras e seguem pela costa até Mosteiros.",
    },
  } satisfies Record<DestinationId, { name: string; description: string }>,
  /** Chapters of "Passeios pela ilha" that are not a single destination. */
  chapters: {
    aroundTheIsland:
      "Percursos a partir de São Filipe que ligam Santa Catarina, Mosteiros, Monte Velha e São Lourenço, da costa às encostas do vulcão.",
    otherTours: "Outros percursos disponíveis a partir de São Filipe.",
    /** One line per destination, under its photo in "Pela ilha". */
    cards: {
      santaCatarina: "O leste da ilha, entre as encostas do vulcão e o mar.",
      mosteiros:
        "No nordeste, entre encostas verdes, o miradouro e as piscinas naturais de Igreja.",
      monteVelha:
        "Parque florestal nas encostas da ilha, com trilhos entre eucaliptos e nevoeiro.",
    } satisfies Partial<Record<DestinationId, string>>,
  },
  experiences: {
    items: {
      salinasVisit: "Visita às Salinas",
    } satisfies Record<ExperienceId, string>,
    /** Service name in the WhatsApp message. Placeholders: {experience}, {duration}. */
    optionLabel: "{experience} ({duration})",
  },

  /* ------------------------------------------------------------ Transfers */

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

  /* ------------------------------------------------- Shared service texts */

  /** Place names used in routes. Proper nouns stay the same in every language. */
  places: {
    airport: "Aeroporto",
    port: "Porto",
    hotelSaoFilipe: "Hotel (São Filipe)",
    saoFilipe: "São Filipe",
    chaDasCaldeiras: "Chã das Caldeiras",
    mosteiros: "Mosteiros(Pai António)",
    salinas: "Salinas",
    santaCatarina: "Santa Catarina",
    saoLourenco: "São Lourenço",
    monteVelha: "Monte Velha",
    sabuceiroRecupera: "Sambucheiro e Recupera nas Hortas",
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
    /** Vehicles are 4-seaters (confirmed by the owner). */
    perVehicle: "Preços por veículo de 4 lugares.",
    perVehicleShort: "por veículo de 4 lugares",
  },
  booking: {
    /** Navbar button. */
    cta: "Reservar agora",
    /** General WhatsApp message (Hero and Navbar buttons). */
    whatsappMessage:
      "Olá BUTURFOGO! Gostaria de mais informações sobre os vossos serviços.",
    /** Message for a specific service. Placeholders: {service}, {price}. */
    serviceMessage:
      "Olá BUTURFOGO! Gostaria de reservar: {service} — {price} (preço por veículo).",
    /** Screen-reader note on every button that opens WhatsApp. */
    opensWhatsapp: "(abre o WhatsApp)",
    /** Option lists with a single booking button (BookingSelector). */
    selector: {
      chooseTour: "Escolha um passeio",
      chooseDuration: "Escolha a duração",
      chooseTransfer: "Escolha um transfer",
      bookTour: "Reservar passeio selecionado",
      bookVisit: "Reservar visita selecionada",
      bookTransfer: "Reservar transfer selecionado",
      hint: "Selecione uma opção para reservar.",
      /** Accessible name of each route list. */
      route: "Percurso",
    },
  },

  /* --------------------------------------------------------------- Photos */

  photos: {
    /** Alt text and caption of each photo (see photos.ts). */
    alt: {
      "cha-pico-ceu-azul": "Pico do Fogo sob céu azul",
      "cha-pico-cone-lava":
        "Pico do Fogo e cone secundário sobre os campos de lava",
      "cha-vinhas-socalcos": "Vinhas em socalcos aos pés do Pico do Fogo",
      "cha-vinha-lava": "Vinha entre a lava, com o Pico do Fogo ao fundo",
      "cha-caldeira-aerea": "Vista aérea da caldeira e do Pico do Fogo",
      "mosteiros-costa": "Costa de Mosteiros vista das encostas",
      "mosteiros-encostas": "Encostas verdes e casas de Mosteiros",
      "salinas-mar": "Mar azul e rochas de lava na Ponta da Salina",
      "salinas-praia-calhau":
        "Praia de calhau e falésias de lava na Ponta da Salina",
      "santa-catarina-encostas-sul":
        "Encostas sul do vulcão, com Achada Furna e escoadas de lava",
      "monte-velha-floresta": "Floresta de Monte Velha com nevoeiro na encosta",
    } satisfies Record<PhotoId, string>,
    /** Credit under each photo. Placeholders: {author}, {license}. */
    credit: "Foto: {author} · {license}",
    credits: {
      title: "Créditos das fotografias",
      note: "Fotografias do Wikimedia Commons, redimensionadas e convertidas para WebP. Autores e licenças Creative Commons:",
    },
  },

  /** Facts confirmed by the BUTURFOGO owner; do not add names, dates or certifications. */
  about: {
    title: "Sobre nós",
    paragraphs: [
      "A BUTURFOGO nasce da experiência e da paixão por receber pessoas e mostrar o melhor de Cabo Verde.",
      "Com mais de 10 anos de experiência na área do turismo, a nossa trajetória começou no transporte de passageiros e evoluiu para serviços de transfers e passeios turísticos.",
      "Depois de uma experiência de mais de um ano a trabalhar com transfers e tours na Ilha do Sal, trazemos agora esse conhecimento para a Ilha do Fogo, com o objetivo de proporcionar viagens seguras, cómodas e experiências memoráveis.",
    ],
    experience: {
      /** Shown as "10+" (the "+" is added in lava by AboutSection). */
      years: "10",
      label: "anos de experiência em turismo",
    },
    journey: {
      /** Accessible name of the steps list. */
      label: "O nosso percurso",
      steps: [
        "Transporte de passageiros",
        "Transfers e tours na Ilha do Sal",
        "Ilha do Fogo",
      ],
    },
  },
  contact: {
    title: "Vamos descobrir a ilha?",
    text: "Tem dúvidas ou pretende organizar um passeio? Fale connosco e ajudamos a planear a sua experiência.",
    whatsappLabel: "WhatsApp",
    whatsappCta: "Falar no WhatsApp",
    emailLabel: "Email",
  },
};

export type Dictionary = typeof pt;
