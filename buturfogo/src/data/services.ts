/**
 * BUTURFOGO services and prices, as provided by the client.
 * Single source of truth: prices are in EUR and are always PER VEHICLE.
 * Display texts (place names, labels) live in the dictionaries.
 */

export type PlaceId =
  | "airport"
  | "port"
  | "hotelSaoFilipe"
  | "saoFilipe"
  | "chaDasCaldeiras"
  | "mosteiros"
  | "salinas"
  | "santaCatarina"
  | "saoLourenco"
  | "monteVelha"
  | "sabuceiroRecupera";

/** Qualifier shown after the last stop, e.g. "Chã das Caldeiras (Pico Grande)". */
export type RouteVariantId = "picoGrande" | "picoPequeno";

export type TourGroupId = "chaDasCaldeiras" | "aroundTheIsland";

export type DurationId = "min90" | "min120";

export type RouteService = {
  id: string;
  stops: readonly PlaceId[];
  variant?: RouteVariantId;
  /** EUR, per vehicle. */
  price: number;
};

export type TourService = RouteService & {
  group: TourGroupId;
};

export type ExperienceOption = {
  duration: DurationId;
  /** EUR, per vehicle. */
  price: number;
};

export type ExperienceId = "salinasVisit";

export type Experience = {
  id: ExperienceId;
  place: PlaceId;
  options: readonly ExperienceOption[];
};

export const currency = "EUR";

/** Point-to-point transport. */
export const transfers = [
  { id: "airport-hotel", stops: ["airport", "hotelSaoFilipe"], price: 5 },
  { id: "port-hotel", stops: ["port", "hotelSaoFilipe"], price: 5 },
  { id: "saofilipe-cha", stops: ["saoFilipe", "chaDasCaldeiras"], price: 45 },
  { id: "saofilipe-mosteiros", stops: ["saoFilipe", "mosteiros"], price: 45 },
  { id: "saofilipe-salinas", stops: ["saoFilipe", "salinas"], price: 30 },
] as const satisfies readonly RouteService[];

export type TransferId = (typeof transfers)[number]["id"];

/** Itineraries, grouped for display. Order within a group is the display order. */
export const tours = [
  {
    id: "cha-pico-grande",
    group: "chaDasCaldeiras",
    stops: ["saoFilipe", "chaDasCaldeiras"],
    variant: "picoGrande",
    price: 80,
  },
  {
    id: "cha-pico-pequeno",
    group: "chaDasCaldeiras",
    stops: ["saoFilipe", "chaDasCaldeiras"],
    variant: "picoPequeno",
    price: 60,
  },
  {
    id: "cha-montevelha-salinas",
    group: "chaDasCaldeiras",
    stops: ["saoFilipe", "chaDasCaldeiras", "monteVelha", "salinas"],
    price: 100,
  },
  {
    id: "santacatarina-mosteiros-saolourenco",
    group: "aroundTheIsland",
    stops: ["saoFilipe", "santaCatarina", "mosteiros", "saoLourenco"],
    price: 120,
  },
  {
    id: "santacatarina-mosteiros-salinas",
    group: "aroundTheIsland",
    stops: ["saoFilipe", "santaCatarina", "mosteiros", "salinas"],
    price: 100,
  },
  {
    id: "montevelha-saolourenco",
    group: "aroundTheIsland",
    stops: ["saoFilipe", "monteVelha", "saoLourenco"],
    price: 80,
  },
  {
    id: "sabuceiro-recupera",
    group: "aroundTheIsland",
    stops: ["saoFilipe", "sabuceiroRecupera"],
    price: 50,
  },
] as const satisfies readonly TourService[];

export const tourGroups = [
  "chaDasCaldeiras",
  "aroundTheIsland",
] as const satisfies readonly TourGroupId[];

/** Confirmed activities. Salinas: 1h30 = 30 €, 2 hours = 40 € (the extra 30 min cost 10 €). */
export const experiences = [
  {
    id: "salinasVisit",
    place: "salinas",
    options: [
      { duration: "min90", price: 30 },
      { duration: "min120", price: 40 },
    ],
  },
] as const satisfies readonly Experience[];
