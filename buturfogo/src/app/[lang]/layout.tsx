import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BUTURFOGO | Transfers & Tours",
  description:
    "Descubra a ilha. Viva a experiência. Explore a Ilha do Fogo com BUTURFOGO Transfers & Tours.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
