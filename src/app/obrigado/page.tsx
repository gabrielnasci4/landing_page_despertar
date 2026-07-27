import type { Metadata } from "next";
import Link from "next/link";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { PsiMark } from "@/components/PsiMark";

export const metadata: Metadata = {
  title: "Recebemos o seu contato",
  description: "Obrigado pelo contato com a Despertar PΨ.",
  // Não faz sentido esta página aparecer no Google.
  robots: { index: false, follow: false },
  alternates: { canonical: "/obrigado" },
};

export default function ObrigadoPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:py-32">
      <PsiMark className="h-14 w-14 text-[var(--color-gold)]" />
      <h1 className="mt-8 text-[2.2rem] leading-[1.1] sm:text-5xl">
        Recebemos o seu contato.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-ink-soft)]">
        Se a janela do WhatsApp não abriu automaticamente, é só tocar no botão
        abaixo. O Marco vai te responder em breve. Obrigado pela confiança.
      </p>
      <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
        <CtaWhatsapp origem="obrigado">Abrir o WhatsApp</CtaWhatsapp>
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--color-twilight)]/20 px-6 py-3 font-semibold text-[var(--color-twilight)] transition-colors hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
