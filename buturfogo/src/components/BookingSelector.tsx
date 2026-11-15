"use client";

import { useId, useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";

import { RouteStops } from "@/components/RouteStops";
import type { BookingOption } from "@/lib/services";
import { cn } from "@/lib/utils";

type SelectorOption = BookingOption & {
  /** Small decorative icon before the title (rendered on the server). */
  icon?: ReactNode;
};

type BookingSelectorProps = {
  /** Visible name of the group, e.g. "Escolha um passeio". */
  legend: string;
  options: readonly SelectorOption[];
  labels: {
    /** Button text, e.g. "Reservar passeio selecionado". */
    cta: string;
    /** Shown while nothing is selected, e.g. "Selecione uma opção para reservar." */
    hint: string;
    /** "por veículo", read after each price and shown in the summary. */
    perVehicle: string;
    /** Accessible name of each route list. */
    route: string;
  };
  className?: string;
};

const buttonBase =
  "inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md px-6 text-base font-semibold whitespace-nowrap transition-colors duration-200 sm:w-auto";

/**
 * A group of mutually exclusive options (native radio buttons) with a single
 * booking button. Nothing is selected at first and the button stays disabled
 * until the visitor picks an option; it then opens that option's WhatsApp
 * message. Each instance keeps its own selection.
 */
export function BookingSelector({
  legend,
  options,
  labels,
  className,
}: BookingSelectorProps) {
  const baseId = useId();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = options.find((option) => option.id === selectedId) ?? null;
  const statusId = `${baseId}-status`;

  return (
    <div className={className}>
      <fieldset>
        <legend className="pb-4 text-xs font-semibold tracking-[0.24em] text-sand uppercase">
          {legend}
        </legend>

        <div className="border-t border-white/[0.07]">
          {options.map((option) => {
            const inputId = `${baseId}-${option.id}`;
            const routeId = `${inputId}-route`;
            const priceId = `${inputId}-price`;
            const checked = option.id === selectedId;

            return (
              <div
                key={option.id}
                className={cn(
                  // Phones: [mark | name + route | price]. From lg: [mark | name | route | price].
                  "relative grid grid-cols-[18px_minmax(0,1fr)_auto] items-start gap-x-4 gap-y-1 border-b border-white/[0.07] px-3 py-4 transition-colors duration-200 sm:py-5",
                  "lg:grid-cols-[18px_minmax(0,5fr)_minmax(0,6fr)_auto] lg:items-center lg:gap-x-8",
                  "has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-lava/70",
                  checked
                    ? "bg-white/[0.035] before:absolute before:inset-y-3 before:left-0 before:w-0.5 before:rounded-full before:bg-lava"
                    : "hover:bg-white/[0.02]"
                )}
              >
                <input
                  type="radio"
                  id={inputId}
                  name={baseId}
                  value={option.id}
                  checked={checked}
                  onChange={() => setSelectedId(option.id)}
                  aria-describedby={
                    option.stops.length > 0 ? `${routeId} ${priceId}` : priceId
                  }
                  className="sr-only"
                />

                {/* Radio mark. */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "col-start-1 row-start-1 mt-0.5 flex size-[18px] items-center justify-center rounded-full border transition-colors lg:mt-0",
                    checked ? "border-lava" : "border-white/25"
                  )}
                >
                  <span
                    className={cn(
                      "size-2 rounded-full bg-lava transition-transform duration-200",
                      checked ? "scale-100" : "scale-0"
                    )}
                  />
                </span>

                {/* The label's ::after covers the whole row, so a click anywhere selects it. */}
                <label
                  htmlFor={inputId}
                  className="col-start-2 row-start-1 flex min-w-0 cursor-pointer items-center gap-2.5 font-heading text-base leading-snug font-bold text-balance text-cream after:absolute after:inset-0 sm:text-[17px]"
                >
                  {option.icon}
                  {option.title}
                </label>

                {option.stops.length > 0 && (
                  <RouteStops
                    id={routeId}
                    stops={option.stops}
                    label={labels.route}
                    className="col-start-2 row-start-2 lg:col-start-3 lg:row-start-1"
                  />
                )}

                <p
                  id={priceId}
                  className="col-start-3 row-start-1 text-right font-heading text-lg leading-6 font-bold tracking-tight whitespace-nowrap text-cream lg:col-start-4 lg:text-xl"
                >
                  {option.price}
                  <span className="sr-only"> {labels.perVehicle}</span>
                </p>
              </div>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p
          id={statusId}
          aria-live="polite"
          className="min-h-5 text-[13px] text-cream/55"
        >
          {selected ? (
            <>
              <span className="text-cream/85">{selected.title}</span>
              {" — "}
              {selected.price} {labels.perVehicle}
            </>
          ) : (
            labels.hint
          )}
        </p>

        {selected ? (
          <a
            href={selected.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby={statusId}
            className={cn(
              buttonBase,
              "bg-lava text-white outline-none hover:bg-lava/90 focus-visible:ring-2 focus-visible:ring-lava/70 focus-visible:ring-offset-2 focus-visible:ring-offset-volcanic"
            )}
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            {labels.cta}
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-describedby={statusId}
            className={cn(
              buttonBase,
              "cursor-not-allowed border border-white/10 text-cream/40"
            )}
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            {labels.cta}
          </button>
        )}
      </div>
    </div>
  );
}
