import type { ReactNode } from "react";
import { Info } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

type ServiceSectionProps = {
  id: string;
  titleId: string;
  eyebrow: string;
  title: string;
  description: string;
  /** Short pricing note under the heading, e.g. "Preços por veículo." */
  note: string;
  children: ReactNode;
  className?: string;
};

/**
 * Layout shared by the commercial sections: heading and pricing note in a
 * narrow column (sticky on desktop), service lists in the wide one.
 */
export function ServiceSection({
  id,
  titleId,
  eyebrow,
  title,
  description,
  note,
  children,
  className,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24 lg:px-10",
        className
      )}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              titleId={titleId}
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <p className="mt-5 flex items-center gap-2 text-[13px] text-cream/55">
              <Info aria-hidden="true" className="size-4 shrink-0 text-sand" />
              {note}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:col-span-8 lg:gap-14">
          {children}
        </div>
      </div>
    </section>
  );
}
