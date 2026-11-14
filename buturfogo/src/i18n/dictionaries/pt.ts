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
    description: "Em breve, descubra os nossos serviços de transporte.",
  },
  tours: {
    title: "Passeios e experiências",
    description: "Explore os destinos mais especiais da Ilha do Fogo.",
  },
  about: {
    title: "Sobre o BUTURFOGO",
  },
  booking: {
    cta: "Reservar agora",
    whatsappMessage:
      "Olá BUTURFOGO! Gostaria de mais informações sobre os vossos serviços.",
  },
};

export type Dictionary = typeof pt;
