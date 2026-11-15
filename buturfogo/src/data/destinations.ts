/**
 * Destinations and the photos that illustrate them (ids from photos.ts).
 * Texts (names, descriptions, captions) live in the dictionaries.
 */

import type { PhotoId } from "@/data/photos";
import type { PlaceId } from "@/data/services";

export type DestinationId = Extract<
  PlaceId,
  "chaDasCaldeiras" | "monteVelha" | "mosteiros" | "salinas" | "santaCatarina"
>;

export type Destination = {
  id: DestinationId;
  /** Photos shown for the destination, in order (1 to 4, see PhotoGrid). */
  photos: readonly PhotoId[];
};

export const destinations = [
  {
    id: "chaDasCaldeiras",
    photos: [
      "cha-pico-ceu-azul",
      "cha-pico-cone-lava",
      "cha-vinhas-socalcos",
      "cha-vinha-lava",
    ],
  },
  { id: "monteVelha", photos: ["monte-velha-floresta"] },
  { id: "mosteiros", photos: ["mosteiros-costa", "mosteiros-encostas"] },
  { id: "salinas", photos: ["salinas-mar", "salinas-praia-calhau"] },
  { id: "santaCatarina", photos: ["santa-catarina-encostas-sul"] },
] as const satisfies readonly Destination[];
