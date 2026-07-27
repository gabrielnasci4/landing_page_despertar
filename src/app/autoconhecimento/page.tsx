import type { Metadata } from "next";
import { AutoTeste } from "@/components/AutoTeste";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Teste de Autoconhecimento: qual é o seu momento interior?",
  description:
    "Um teste leve de autoconhecimento para refletir sobre o seu momento. Não é diagnóstico nem define quem você é, é só um convite a se olhar com carinho. Despertar PΨ.",
  alternates: { canonical: "/autoconhecimento" },
};

export default function AutoconhecimentoPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Só por diversão</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">
          Qual é o seu momento interior?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          Cinco perguntas e um espelho leve do seu momento. Não é diagnóstico nem
          define quem você é, é só um convite carinhoso para se olhar por dentro.
        </p>
      </div>

      <div className="mt-12">
        <AutoTeste />
      </div>
    </section>
  );
}
