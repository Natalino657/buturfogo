import type { Dictionary } from "./pt";

export const en: Dictionary = {
  metadata: {
    title: "BUTURFOGO | Transfers & Tours",
    description:
      "Discover the island. Experience its magic. Explore Fogo Island with BUTURFOGO Transfers & Tours.",
  },
  navigation: {
    home: "Home",
    explore: "Explore",
    transfers: "Transfers",
    tours: "Tours",
    about: "About us",
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
  },
  intro: {
    eyebrow: "The island",
    title: "Fogo Island",
    text: "An island shaped by its volcano. At its heart rises Pico do Fogo, the highest point in Cabo Verde, surrounded by lava landscapes, vineyards and seaside villages.",
  },
  destinations: {
    eyebrow: "Destinations",
    title: "Explore the island",
    description: "From the crater to the sea, five places to discover Fogo.",
    highlightsLabel: "Highlights",
    items: {
      chaDasCaldeiras: {
        name: "Chã das Caldeiras",
        description:
          "A plain inside the ancient caldera, at the foot of Pico do Fogo and enclosed by the Bordeira wall. Among the lava fields, the villages of Portela and Bangaeira grow vines in volcanic soil.",
        highlights: ["Pico do Fogo", "Bordeira", "Fogo vineyards and wine"],
      },
      monteVelha: {
        name: "Monte Velha",
        description:
          "On the island's slopes, Monte Velha Forest Park is a stretch of woodland where mist drifts among the eucalyptus. A green contrast to the lava landscapes.",
        highlights: ["Forest park", "Walking trails"],
      },
      mosteiros: {
        name: "Mosteiros",
        description:
          "On the island's northeast coast, Mosteiros descends from green slopes to the Atlantic. The viewpoint opens onto the coastline, and in Igreja the sea fills natural pools among the volcanic rock.",
        highlights: [
          "Mosteiros viewpoint",
          "Igreja natural pools",
          "Coffee on the slopes",
        ],
      },
      salinas: {
        name: "Salinas de São Jorge",
        description:
          "On the northwest coast, in São Jorge, Ponta da Salina brings together lava rock, blue sea and a small fishing harbour. A quiet corner by the ocean.",
        highlights: ["Fishing harbour", "Beach", "Lava coastline"],
      },
      santaCatarina: {
        name: "Santa Catarina",
        description:
          "Santa Catarina spans the east of the island, between the volcano's slopes and the sea. Its roads climb towards Chã das Caldeiras and follow the coast to Mosteiros.",
        highlights: [],
      },
    },
  },
  photos: {
    alt: {
      "cha-das-caldeiras-bordeira":
        "The Bordeira wall and the villages of Chã das Caldeiras",
      "cha-das-caldeiras-lava-2014":
        "2014 lava field inside the crater, Chã das Caldeiras",
      "cha-das-caldeiras-vinha":
        "Vineyard on the volcano's slopes, Chã das Caldeiras",
      "monte-velha-floresta": "Monte Velha forest with mist on the slope",
      "monte-velha-trilho": "Trail in Monte Velha Forest Park",
      "mosteiros-vila": "View of Mosteiros and the coast",
      "mosteiros-miradouro": "View from the Mosteiros viewpoint over the coast",
      "mosteiros-piscinas-igreja": "Igreja natural pools, Mosteiros",
      "salinas-porto": "Fishing boats at Ponta da Salina",
      "salinas-praia": "Small harbour and beach at Ponta da Salina",
      "santa-catarina-estrada": "Road towards the caldera, Santa Catarina",
    },
    credit: "Photo: {author} · {license}",
    gallery: {
      label: "Photos of {place}",
      previous: "Previous photo",
      next: "Next photo",
      position: "Photo {current} of {total}",
    },
    credits: {
      title: "Photo credits",
      note: "Photos from Wikimedia Commons, resized and converted to WebP. Creative Commons licences are shown on each image.",
    },
  },
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
  tours: {
    title: "Tours and experiences",
    description: "Explore the most special destinations on Fogo Island.",
    groups: {
      chaDasCaldeiras: "Chã das Caldeiras",
      aroundTheIsland: "Around the island",
    },
    bookingLabel: "Tour {route}",
  },
  experiences: {
    title: "Experiences",
    items: {
      salinasVisit: { title: "Salinas visit" },
    },
    optionLabel: "{experience} ({duration})",
  },
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
  serviceCard: {
    route: "Route",
  },
  about: {
    title: "About BUTURFOGO",
  },
  booking: {
    cta: "Book now",
    whatsappMessage:
      "Hello BUTURFOGO! I would like more information about your services.",
    serviceMessage:
      "Hello BUTURFOGO! I would like to book: {service} — {price} (price per vehicle).",
    serviceCta: "Book",
    serviceCtaLabel: "Book {service} via WhatsApp",
  },
};
