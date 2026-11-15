/**
 * The "Passeios pela ilha" part of the page, as chapters: each one shows the
 * photos of its destinations followed by its bookable options.
 * Prices and routes stay in services.ts; texts live in the dictionaries.
 */

import type { DestinationId } from "@/data/destinations";
import type { ExperienceId, TourGroupId } from "@/data/services";

export type ChapterId =
  | "chaDasCaldeiras"
  | "aroundTheIsland"
  | "salinas"
  | "otherTours";

export type ChapterOffer =
  | { kind: "tours"; group: TourGroupId }
  | { kind: "experience"; id: ExperienceId };

export type Chapter = {
  id: ChapterId;
  /** Destinations whose photos open the chapter, in order. Empty = no photos. */
  destinations: readonly DestinationId[];
  offer: ChapterOffer;
};

/** Display order. */
export const chapters = [
  {
    id: "chaDasCaldeiras",
    destinations: ["chaDasCaldeiras"],
    offer: { kind: "tours", group: "chaDasCaldeiras" },
  },
  {
    id: "aroundTheIsland",
    destinations: ["mosteiros", "santaCatarina", "monteVelha"],
    offer: { kind: "tours", group: "aroundTheIsland" },
  },
  {
    id: "salinas",
    destinations: ["salinas"],
    offer: { kind: "experience", id: "salinasVisit" },
  },
  {
    // Routes not tied to a destination (no photos).
    id: "otherTours",
    destinations: [],
    offer: { kind: "tours", group: "otherTours" },
  },
] as const satisfies readonly Chapter[];
