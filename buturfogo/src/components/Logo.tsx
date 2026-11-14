import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/LogoMark";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  serviceLabelClassName?: string;
};

/** BUTURFOGO icon + wordmark with the service label underneath. Defaults match the desktop navbar. */
export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  serviceLabelClassName,
}: LogoProps) {
  const { wordmark, serviceLabel } = siteConfig;

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={cn("shrink-0", markClassName)} />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-heading text-2xl font-extrabold italic tracking-tight",
            wordmarkClassName
          )}
        >
          {wordmark.primary}
          <span className="text-lava">{wordmark.accent}</span>
        </span>
        <span
          className={cn(
            "font-body text-[9px] font-medium tracking-[0.3em] text-cream/70",
            serviceLabelClassName
          )}
        >
          {serviceLabel}
        </span>
      </span>
    </span>
  );
}
