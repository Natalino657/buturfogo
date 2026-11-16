"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ChapterTab = {
  id: string;
  /** "01", "02"… */
  number: string;
  name: string;
  /** Photo behind the name (decorative: the name is the label). */
  image: string;
  /** The chapter itself, rendered on the server. */
  content: ReactNode;
};

type ChapterTabsProps = {
  /** Accessible name of the picker, e.g. "Escolha um destino". */
  label: string;
  tabs: readonly ChapterTab[];
};

/**
 * Destination picker for "Passeios pela ilha": one photo tile per chapter and
 * only the chosen chapter below, so the visitor explores one place at a time
 * instead of scrolling through all of them. Standard tabs keyboard pattern
 * (arrow keys, Home, End).
 */
export function ChapterTabs({ label, tabs }: ChapterTabsProps) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent, index: number) {
    const last = tabs.length - 1;
    const next =
      event.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;

    event.preventDefault();
    setActiveId(tabs[next].id);
    buttons.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="grid grid-cols-3 gap-2 sm:gap-4"
      >
        {tabs.map((tab, index) => {
          const active = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={(element) => {
                buttons.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={active}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                "group relative aspect-4/5 cursor-pointer overflow-hidden rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-lava/70 focus-visible:ring-offset-2 focus-visible:ring-offset-volcanic sm:aspect-16/7",
                active && "ring-2 ring-lava"
              )}
            >
              <Image
                src={tab.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 400px, 33vw"
                className={cn(
                  "object-cover transition duration-500 group-hover:scale-105",
                  active ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                )}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-volcanic/90 via-volcanic/20 to-transparent"
              />
              <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-2.5 sm:p-4">
                <span className="font-heading text-[10px] font-bold tracking-[0.3em] text-lava sm:text-xs">
                  {tab.number}
                </span>
                <span className="font-heading text-[13px] leading-tight font-extrabold text-cream sm:text-xl">
                  {tab.name}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== activeId}
          className="mt-8 sm:mt-10"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
