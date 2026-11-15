import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type ServiceGroupProps = {
  /** id of the group's <h3>, used for aria-labelledby. */
  titleId: string;
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
};

/** A titled group of service rows (e.g. "Chã das Caldeiras", "Experiências"). */
export function ServiceGroup({
  titleId,
  title,
  icon: Icon,
  children,
  className,
}: ServiceGroupProps) {
  return (
    <div role="group" aria-labelledby={titleId} className={className}>
      <h3
        id={titleId}
        className="flex items-center gap-2.5 pb-4 text-xs font-semibold tracking-[0.24em] text-sand uppercase"
      >
        {Icon && (
          <Icon
            aria-hidden="true"
            strokeWidth={1.75}
            className="size-4 shrink-0 text-lava"
          />
        )}
        {title}
      </h3>
      {children}
    </div>
  );
}
