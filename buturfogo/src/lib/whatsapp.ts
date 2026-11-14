import { siteConfig } from "@/config/site";
import { defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type WhatsAppUrlOptions = {
  /** Selects the language of the default pre-filled message. Defaults to "pt". */
  locale?: Locale;
  /** Custom pre-filled message; overrides the locale's default message. */
  message?: string;
};

/**
 * Builds a wa.me link to the BUTURFOGO WhatsApp number with a pre-filled message.
 * Server-side helper: reads the dictionaries, so call it in Server Components
 * and pass the resulting URL to Client Components.
 */
export function getWhatsAppUrl({
  locale = defaultLocale,
  message,
}: WhatsAppUrlOptions = {}): string {
  const text = message ?? getDictionary(locale).booking.whatsappMessage;

  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}
