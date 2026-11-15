import { notFound } from "next/navigation";

import { DestinationsSection } from "@/components/DestinationsSection";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
import { PhotoCredits } from "@/components/PhotoCredits";
import { ToursSection } from "@/components/ToursSection";
import { TransfersSection } from "@/components/TransfersSection";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const whatsappUrl = getWhatsAppUrl({ locale: lang });

  return (
    <>
      <main className="">
        <Navbar
          lang={lang}
          dict={{
            navigation: dict.navigation,
            languageSwitcher: dict.languageSwitcher,
            bookingCta: dict.booking.cta,
          }}
          whatsappUrl={whatsappUrl}
        />
        <Hero dict={dict.hero} whatsappUrl={whatsappUrl} />
        <IntroSection dict={dict.intro} />
        <DestinationsSection dict={dict} />

        <TransfersSection locale={lang} dict={dict} />

        <ToursSection locale={lang} dict={dict} />

        <section
          id="sobre"
          className="scroll-mt-20 bg-volcanic px-6 py-24 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-cream">
            {dict.about.title}
          </h2>
        </section>
      </main>
      <PhotoCredits dict={dict} />
    </>
  );
}
