/**
 * Destinations shown in "Explore a ilha", and the photos that illustrate them.
 * Texts (names, descriptions, highlights, alt texts) live in the dictionaries.
 *
 * Every photo comes from Wikimedia Commons under a CC BY-SA licence: the
 * author, licence and source must stay credited wherever the photo is shown
 * (see PhotoGrid and PhotoCredits). Files were resized and converted to WebP.
 */

import type { PlaceId } from "@/data/services";

export type DestinationId = Extract<
  PlaceId,
  "chaDasCaldeiras" | "monteVelha" | "mosteiros" | "salinas" | "santaCatarina"
>;

export type PhotoLicense = "CC BY-SA 3.0" | "CC BY-SA 4.0";

export const licenseUrls: Record<PhotoLicense, string> = {
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

export type Photo = {
  id: string;
  /** Path under /public. */
  src: string;
  width: number;
  height: number;
  author: string;
  license: PhotoLicense;
  /** Wikimedia Commons file page. */
  sourceUrl: string;
};

export type Destination = {
  id: DestinationId;
  /** Photos shown for the destination, in order (see TourChapter). */
  photos: readonly Photo[];
};

const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(" ", "_"))}`;

/** Display order. Image and text alternate sides from one destination to the next. */
export const destinations = [
  {
    id: "chaDasCaldeiras",
    photos: [
      {
        id: "cha-das-caldeiras-bordeira",
        src: "/images/destinations/cha-das-caldeiras-bordeira.webp",
        width: 2400,
        height: 1800,
        author: "Ji-Elle",
        license: "CC BY-SA 3.0",
        sourceUrl: commons("Chã das Caldeiras-Deux villages (1).jpg"),
      },
      {
        id: "cha-das-caldeiras-lava-2014",
        src: "/images/destinations/cha-das-caldeiras-lava-2014.webp",
        width: 2400,
        height: 1800,
        author: "Flexman",
        license: "CC BY-SA 4.0",
        sourceUrl: commons("Nationalpark Fogo 2016.jpg"),
      },
      {
        id: "cha-das-caldeiras-vinha",
        src: "/images/destinations/cha-das-caldeiras-vinha.webp",
        width: 2400,
        height: 1800,
        author: "Ji-Elle",
        license: "CC BY-SA 3.0",
        sourceUrl: commons("Chã das Caldeiras-Vigne (1).JPG"),
      },
    ],
  },
  {
    id: "monteVelha",
    photos: [
      {
        id: "monte-velha-floresta",
        src: "/images/destinations/monte-velha-floresta.webp",
        width: 2400,
        height: 1800,
        author: "Ji-Elle",
        license: "CC BY-SA 3.0",
        sourceUrl: commons("Fogo-Monte Velha.jpg"),
      },
    ],
  },
  {
    id: "mosteiros",
    photos: [
      {
        id: "mosteiros-vila",
        src: "/images/destinations/mosteiros-vila.webp",
        width: 1280,
        height: 929,
        author: "Hlohning",
        license: "CC BY-SA 3.0",
        sourceUrl: commons("Fogo-mosteiros.jpg"),
      },
    ],
  },
  {
    id: "salinas",
    photos: [
      {
        id: "salinas-porto",
        src: "/images/destinations/salinas-porto.webp",
        width: 1920,
        height: 1089,
        author: "Flexman",
        license: "CC BY-SA 4.0",
        sourceUrl: commons("Fogo, Ponta da Salina.jpg"),
      },
      {
        id: "salinas-praia",
        src: "/images/destinations/salinas-praia.webp",
        width: 2400,
        height: 1800,
        author: "Ji-Elle",
        license: "CC BY-SA 3.0",
        sourceUrl: commons("Ponta das Salinas (Fogo) (1).jpg"),
      },
    ],
  },
  {
    id: "santaCatarina",
    photos: [
      {
        id: "santa-catarina-estrada",
        src: "/images/destinations/santa-catarina-estrada.webp",
        width: 2400,
        height: 1597,
        author: "Cayambe",
        license: "CC BY-SA 3.0",
        sourceUrl: commons("Cape Verde Fogo landscape road towards caldera.jpg"),
      },
    ],
  },
] as const satisfies readonly Destination[];

export type DestinationEntry = (typeof destinations)[number];
export type DestinationPhoto = DestinationEntry["photos"][number];
export type PhotoId = DestinationPhoto["id"];
