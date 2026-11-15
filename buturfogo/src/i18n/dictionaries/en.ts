import type { Dictionary } from "./pt";

/** English dictionary: same keys as the Portuguese one (see pt.ts). */
export const en: Dictionary = {
  metadata: {
    title: "BUTURFOGO | Transfers & Tours",
    description:
      "Discover the island. Experience its magic. Explore Fogo Island with BUTURFOGO Transfers & Tours.",
  },
  navigation: {
    home: "Home",
    tours: "Tours",
    transfers: "Transfers",
    about: "About us",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close",
  },
  languageSwitcher: {
    label: "Language",
    pt: "Português",
    en: "English",
  },
  hero: {
    location: "Fogo Island · Cape Verde",
    titleLead: "Discover the island.",
    titleHighlight: "Experience its magic.",
    description:
      "Explore volcanic landscapes, discover extraordinary places and experience Fogo Island with us.",
    primaryCta: "Book your trip",
    secondaryCta: "Explore our services",
    scrollHint: "Discover more",
    imageAlt: "Pico do Fogo at sunset, Fogo Island",
    carousel: {
      label: "Photos of Fogo Island",
      goTo: "Show photo {current} of {total}",
      pause: "Pause photos",
      play: "Play photos",
    },
  },
  whatWeDo: {
    title: "What we do",
    items: {
      airportHotel: {
        title: "Airport & Hotel Transfers",
        text: "Transport between the airport, the port and your accommodation.",
      },
      island: {
        title: "Island Transfers",
        text: "Private transport to explore different towns and points of interest.",
      },
      tours: {
        title: "Tours & Experiences",
        text: "Routes to discover the landscapes and the most special places on Fogo Island.",
      },
    },
  },
  intro: {
    title: "Fogo Island",
    text: "An island shaped by its volcano. At its heart rises Pico do Fogo, the highest point in Cabo Verde, surrounded by lava landscapes, vineyards and seaside villages.",
  },

  /* ---------------------------------------------------------------- Tours */

  tours: {
    title: "Tours across the island",
    groups: {
      chaDasCaldeiras: "Chã das Caldeiras",
      aroundTheIsland: "Around the island",
      otherTours: "Other tours",
    },
    bookingLabel: "Tour {route}",
  },
  destinations: {
    chaDasCaldeiras: {
      name: "Chã das Caldeiras",
      description:
        "A plain inside the ancient caldera, at the foot of Pico do Fogo and enclosed by the Bordeira wall. Among the lava fields, the villages of Portela and Bangaeira grow vines in volcanic soil.",
    },
    monteVelha: {
      name: "Monte Velha",
      description:
        "On the island's slopes, Monte Velha Forest Park is a stretch of woodland where mist drifts among the eucalyptus. A green contrast to the lava landscapes.",
    },
    mosteiros: {
      name: "Mosteiros",
      description:
        "On the island's northeast coast, Mosteiros descends from green slopes to the Atlantic. The viewpoint opens onto the coastline, and in Igreja the sea fills natural pools among the volcanic rock.",
    },
    salinas: {
      name: "Salinas",
      description:
        "On the northwest coast, in São Jorge, Ponta da Salina brings together lava rock, blue sea and a small fishing harbour. A quiet corner by the ocean.",
    },
    santaCatarina: {
      name: "Santa Catarina",
      description:
        "Santa Catarina spans the east of the island, between the volcano's slopes and the sea. Its roads climb towards Chã das Caldeiras and follow the coast to Mosteiros.",
    },
  },
  chapters: {
    aroundTheIsland:
      "Routes from São Filipe linking Santa Catarina, Mosteiros, Monte Velha and São Lourenço, from the coast to the volcano's slopes.",
    otherTours: "Other routes available from São Filipe.",
    cards: {
      santaCatarina:
        "The east of the island, between the volcano's slopes and the sea.",
      mosteiros:
        "On the northeast coast, between green slopes, the viewpoint and the Igreja natural pools.",
      monteVelha:
        "A forest park on the island's slopes, with trails among eucalyptus and mist.",
    },
  },
  experiences: {
    items: {
      salinasVisit: "Salinas visit",
    },
    optionLabel: "{experience} ({duration})",
  },

  /* ------------------------------------------------------------ Transfers */

  transfers: {
    title: "Transfers",
    description:
      "Transport from the airport and the port to your hotel in São Filipe, and from São Filipe to Chã das Caldeiras, Mosteiros and Salinas.",
    items: {
      "airport-hotel": "Airport Transfer",
      "port-hotel": "Port Transfer",
      "saofilipe-cha": "Chã das Caldeiras Transfer",
      "saofilipe-mosteiros": "Mosteiros Transfer",
      "saofilipe-salinas": "Salinas Transfer",
    },
  },

  /* ------------------------------------------------- Shared service texts */

  places: {
    airport: "Airport",
    port: "Port",
    hotelSaoFilipe: "Hotel (São Filipe)",
    saoFilipe: "São Filipe",
    chaDasCaldeiras: "Chã das Caldeiras",
    mosteiros: "Mosteiros",
    salinas: "Salinas",
    santaCatarina: "Santa Catarina",
    saoLourenco: "São Lourenço",
    monteVelha: "Monte Velha",
    sabuceiroRecupera: "Sabuceiro e Recupera nas Hortas",
  },
  routeVariants: {
    picoGrande: "Pico Grande",
    picoPequeno: "Pico Pequeno",
  },
  durations: {
    min90: "1 h 30 min",
    min120: "2 hours",
  },
  pricing: {
    perVehicle: "Prices per vehicle.",
    perVehicleShort: "per vehicle",
  },
  booking: {
    cta: "Book now",
    whatsappMessage:
      "Hello BUTURFOGO! I would like more information about your services.",
    serviceMessage:
      "Hello BUTURFOGO! I would like to book: {service} — {price} (price per vehicle).",
    selector: {
      chooseTour: "Choose a tour",
      chooseDuration: "Choose a duration",
      chooseTransfer: "Choose a transfer",
      bookTour: "Book selected tour",
      bookVisit: "Book selected visit",
      bookTransfer: "Book selected transfer",
      hint: "Select an option to book.",
      route: "Route",
    },
  },

  /* --------------------------------------------------------------- Photos */

  photos: {
    alt: {
      "cha-pico-ceu-azul": "Pico do Fogo under a blue sky",
      "cha-pico-cone-lava":
        "Pico do Fogo and a secondary cone above the lava fields",
      "cha-vinhas-socalcos": "Terraced vineyards at the foot of Pico do Fogo",
      "cha-vinha-lava": "Vines among the lava, with Pico do Fogo behind",
      "cha-caldeira-aerea": "Aerial view of the caldera and Pico do Fogo",
      "mosteiros-costa": "The Mosteiros coast seen from the slopes",
      "mosteiros-encostas": "Green slopes and houses of Mosteiros",
      "salinas-mar": "Blue sea and lava rocks at Ponta da Salina",
      "salinas-praia-calhau":
        "Pebble beach and lava cliffs at Ponta da Salina",
      "santa-catarina-encostas-sul":
        "The volcano's southern slopes, with Achada Furna and lava flows",
      "monte-velha-floresta": "Monte Velha forest with mist on the slope",
    },
    credit: "Photo: {author} · {license}",
    credits: {
      title: "Photo credits",
      note: "Photos from Wikimedia Commons, resized and converted to WebP. Authors and Creative Commons licences:",
    },
  },

  about: {
    title: "About us",
    paragraphs: [
      "BUTURFOGO was born from experience and a passion for welcoming people and showcasing the best of Cabo Verde.",
      "With over 10 years of experience in tourism, our journey began in passenger transport and evolved into transfer and sightseeing services.",
      "After more than a year working with transfers and tours on Sal Island, we now bring that experience to Fogo Island, aiming to provide safe, comfortable journeys and memorable experiences.",
    ],
    experience: {
      years: "10",
      label: "years of experience in tourism",
    },
    journey: {
      label: "Our journey",
      steps: [
        "Passenger transport",
        "Transfers and tours on Sal Island",
        "Fogo Island",
      ],
    },
  },
  contact: {
    title: "Ready to discover the island?",
    text: "Have questions or planning a tour? Get in touch and we'll help you plan your experience.",
    whatsappLabel: "WhatsApp",
    whatsappCta: "Chat on WhatsApp",
  },
};
