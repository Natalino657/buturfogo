import { notFound } from "next/navigation";

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { Navbar } from "@/components/Navbar";
import { PhotoCredits } from "@/components/PhotoCredits";
import { ToursByDestination } from "@/components/ToursByDestination";
import { TransfersSection } from "@/components/TransfersSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
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
      <Navbar
        lang={lang}
        dict={{
          navigation: dict.navigation,
          languageSwitcher: dict.languageSwitcher,
          bookingCta: dict.booking.cta,
        }}
        whatsappUrl={whatsappUrl}
      />
      <main>
        <Hero dict={dict} whatsappUrl={whatsappUrl} />
        <WhatWeDoSection dict={dict.whatWeDo} />
        <IntroSection dict={dict.intro} />
        <ToursByDestination locale={lang} dict={dict} />
        <TransfersSection locale={lang} dict={dict} />
        <AboutSection dict={dict.about} />
        <ContactSection dict={dict.contact} whatsappUrl={whatsappUrl} />
      </main>
      <PhotoCredits dict={dict} />
    </>
  );
}
