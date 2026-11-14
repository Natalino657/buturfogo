import { siteConfig, type Locale } from "@/config/site";

type WhatsAppUrlOptions = {
  /** Selects the default pre-filled message. Defaults to "pt". */
  locale?: Locale;
  /** Custom pre-filled message; overrides the locale's default message. */
  message?: string;
};

/** Builds a wa.me link to the BUTURFOGO WhatsApp number with a pre-filled message. */
export function getWhatsAppUrl({
  locale = "pt",
  message,
}: WhatsAppUrlOptions = {}): string {
  const text = message ?? siteConfig.whatsapp.defaultMessage[locale];

  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(text)}`;
}
