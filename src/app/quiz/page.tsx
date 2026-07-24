import type { Metadata } from "next";
import { QuizGame } from "@/components/QuizGame";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Qual terapia é ideal para você?",
  description:
    "Responda 4 perguntas rápidas e descubra qual terapia integrativa da Despertar PΨ conversa com o seu momento — hipnose, Reiki, regressão, PNL e mais.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Descubra seu caminho</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">
          Qual terapia conversa com o seu momento?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          São só quatro perguntas. No fim, uma sugestão pensada para você — e o
          caminho para conversar com o Marco.
        </p>
      </div>

      <div className="mt-12">
        <QuizGame />
      </div>
    </section>
  );
}
