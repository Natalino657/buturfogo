import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { getServiceBookingUrl } from "@/lib/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type BookingLinkProps = {
  locale: Locale;
  /** When set, the WhatsApp message names this service and price; otherwise the general message is used. */
  service?: { label: string; price: number };
  children: ReactNode;
  /** Accessible name when the visible text alone is ambiguous (e.g. several "Book" buttons). */
  ariaLabel?: string;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  className?: string;
};

/** WhatsApp booking button, styled like the site's existing CTAs. Always at least 44px tall. */
export function BookingLink({
  locale,
  service,
  children,
  ariaLabel,
  variant = "primary",
  size = "md",
  className,
}: BookingLinkProps) {
  const href = service
    ? getServiceBookingUrl(locale, service.label, service.price)
    : getWhatsAppUrl({ locale });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-lava/70 focus-visible:ring-offset-2 focus-visible:ring-offset-volcanic",
        variant === "primary"
          ? "bg-lava text-white hover:bg-lava/90"
          : "border border-white/30 bg-white/5 text-cream hover:bg-white/10 hover:text-white",
        size === "md" ? "h-12 px-6 text-base" : "h-11 px-4 text-sm",
        className
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      {children}
    </a>
  );
}
