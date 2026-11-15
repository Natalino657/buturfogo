/**
 * Every photo used on the site, in one place (destinations, Hero, credits).
 * Alt texts / captions live in the dictionaries under `photos.alt`.
 *
 * All photos come from Wikimedia Commons under Creative Commons licences that
 * allow commercial use with attribution. Author, licence and source must stay
 * credited wherever a photo is shown (PhotoGrid, HeroSlides, PhotoCredits).
 * Files were resized (max 2400px) and converted to WebP; CC BY-SA requires the
 * adapted files to keep the same licence.
 */

export type PhotoLicense =
  | "CC BY 3.0"
  | "CC BY-SA 2.0"
  | "CC BY-SA 3.0"
  | "CC BY-SA 4.0";

export const licenseUrls: Record<PhotoLicense, string> = {
  "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/",
  "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

export type Photo = {
  /** Path under /public. */
  src: string;
  width: number;
  height: number;
  author: string;
  license: PhotoLicense;
  /** Wikimedia Commons file page. */
  sourceUrl: string;
};

const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(" ", "_"))}`;

const dir = "/images/destinations";

export const photos = {
  "cha-pico-ceu-azul": {
    src: `${dir}/cha-pico-ceu-azul.webp`,
    width: 2400,
    height: 1518,
    author: "David Trainer",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Mount fogo.jpg"),
  },
  "cha-pico-cone-lava": {
    src: `${dir}/cha-pico-cone-lava.webp`,
    width: 2400,
    height: 1597,
    author: "Cayambe",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Cape Verde Pico do Fogo wide.jpg"),
  },
  "cha-vinhas-socalcos": {
    src: `${dir}/cha-vinhas-socalcos.webp`,
    width: 2400,
    height: 1800,
    author: "Ji-Elle",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Pico do Fogo (4).jpg"),
  },
  "cha-vinha-lava": {
    src: `${dir}/cha-vinha-lava.webp`,
    width: 2400,
    height: 1607,
    author: "F H Mira",
    license: "CC BY-SA 2.0",
    sourceUrl: commons("Vignes dans les laves de Chã das Caldeiras.jpg"),
  },
  "cha-caldeira-aerea": {
    src: `${dir}/cha-caldeira-aerea.webp`,
    width: 2400,
    height: 1800,
    author: "Aldo Bien",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Ilha do Fogo aerial shot 1.jpg"),
  },
  "mosteiros-costa": {
    src: `${dir}/mosteiros-costa.webp`,
    width: 2400,
    height: 1800,
    author: "Flexman",
    license: "CC BY-SA 4.0",
    sourceUrl: commons("Fogo Ansicht 2.jpg"),
  },
  "mosteiros-encostas": {
    src: `${dir}/mosteiros-encostas.webp`,
    width: 2400,
    height: 1800,
    author: "Ji-Elle",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Mosteiros (6).jpg"),
  },
  "salinas-mar": {
    src: `${dir}/salinas-mar.webp`,
    width: 2400,
    height: 1800,
    author: "Ji-Elle",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Ponta das Salinas (Fogo) (7).jpg"),
  },
  "salinas-praia-calhau": {
    src: `${dir}/salinas-praia-calhau.webp`,
    width: 2400,
    height: 1800,
    author: "Ji-Elle",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Ponta das Salinas (Fogo) (6).jpg"),
  },
  "santa-catarina-encostas-sul": {
    src: `${dir}/santa-catarina-encostas-sul.webp`,
    width: 2400,
    height: 1350,
    author: "Martin Mergili",
    license: "CC BY 3.0",
    sourceUrl: commons(
      "Fogo island in Cape Verde - Aerial View from South - September 2022.jpg"
    ),
  },
  "monte-velha-floresta": {
    src: `${dir}/monte-velha-floresta.webp`,
    width: 2400,
    height: 1800,
    author: "Ji-Elle",
    license: "CC BY-SA 3.0",
    sourceUrl: commons("Fogo-Monte Velha.jpg"),
  },
} as const satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;
