import type { Metadata } from "next";
import { QuizGame } from "@/components/QuizGame";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Por onde começar a sua conversa?",
  description:
    "Responda 3 perguntas rápidas e reflita sobre o seu momento. O caminho é sempre individual, construído numa conversa com Marco Sadério, da Despertar PΨ.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Um convite à reflexão</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">
          Por onde começar a sua conversa?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          São só três perguntas para refletir sobre o seu momento. Não é um
          diagnóstico: o caminho é sempre individual, definido numa conversa com
          o Marco, no seu tempo.
        </p>
      </div>

      <div className="mt-12">
        <QuizGame />
      </div>
    </section>
  );
}
