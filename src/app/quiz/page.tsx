import type { Metadata } from "next";
import { QuizGame } from "@/components/QuizGame";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Por onde começar o seu caminho?",
  description:
    "Responda 4 perguntas rápidas e descubra um caminho de práticas integrativas da Despertar PΨ para o seu momento — sempre construído junto com o Marco.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Descubra seu caminho</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">
          Por onde começar o seu caminho?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          São só quatro perguntas. No fim, um caminho de práticas que se
          complementam, pensado para o seu momento — e sempre construído junto
          com o Marco, no seu tempo.
        </p>
      </div>

      <div className="mt-12">
        <QuizGame />
      </div>
    </section>
  );
}
