import type { Metadata } from "next";
import { AutoTeste } from "@/components/AutoTeste";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Teste de Autoconhecimento",
  description:
    "Um teste de autoconhecimento para descobrir o seu momento interior. Reflexão, não diagnóstico. Despertar PΨ, com Marco Sadério.",
  // Em avaliação: ainda fora do menu e sem indexar no Google.
  robots: { index: false, follow: false },
  alternates: { canonical: "/autoconhecimento" },
};

export default function AutoconhecimentoPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Um espelho para o seu momento</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">
          Qual é o seu momento interior?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          Cinco perguntas para refletir sobre você. No fim, um perfil que fala do
          seu momento, um convite ao autoconhecimento, sem diagnóstico.
        </p>
      </div>

      <div className="mt-12">
        <AutoTeste />
      </div>
    </section>
  );
}
