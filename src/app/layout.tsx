import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { localBusinessJsonLd } from "@/lib/jsonld";
import { clinica } from "@/content/clinica";

// Serifa literária — títulos e destaques (inclui o itálico das perguntas).
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Sans humanista — corpo do texto e interface.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinica.siteUrl),
  title: {
    // Nos títulos/busca usamos o nome por extenso "Despertar ParaPSI"
    // (reduz a ambiguidade com "Despertar PSI"/"Para Psi"). O símbolo
    // "Despertar PΨ" segue só na identidade visual (logo/cabeçalho).
    default: "Parapsicologia Clínica em Joinville - SC | Despertar ParaPSI",
    template: `%s | ${clinica.nomeExtenso}`,
  },
  description:
    "Parapsicologia Clínica e Terapias Integrativas em Joinville - SC com Marco Sadério: hipnose clínica, Reiki, regressão, PNL e mais. Acolhimento para o autoconhecimento e o bem-estar. Presencial e online.",
  keywords: [
    "parapsicologia clínica",
    "parapsicólogo Joinville",
    "parapsicologia clínica Joinville",
    "terapias integrativas Joinville",
    "hipnose clínica Joinville",
    "reiki Joinville",
    "regressão de memórias",
    "PNL",
    "Marco Sadério",
  ],
  authors: [{ name: clinica.profissional.nome }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: clinica.nomeExtenso,
    title: "Parapsicologia Clínica em Joinville - SC | Despertar ParaPSI",
    description:
      "Terapias integrativas em Joinville - SC com Marco Sadério, parapsicólogo clínico: hipnose, Reiki, regressão, PNL e mais. Acolhimento para o autoconhecimento e o bem-estar. Presencial e online.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#251c33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${hanken.variable} h-full`}
    >
      <body className="min-h-full">
        {/* Link para pular direto ao conteúdo (acessibilidade). */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-twilight)] focus:px-5 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsappFloat />
        <Reveal />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
