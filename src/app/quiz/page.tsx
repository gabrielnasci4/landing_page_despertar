import type { Metadata } from "next";
import { QuizGame } from "@/components/QuizGame";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Qual caminho de cuidado conversa com o seu momento?",
  description:
    "Responda quatro perguntas e receba uma orientação inicial, sem definir uma técnica fechada. O caminho é sempre individual, construído numa conversa com Marco Sadério, da Despertar PΨ.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Um convite à reflexão</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">
          Qual caminho de cuidado conversa com o seu momento?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          São só quatro perguntas. No fim, você recebe uma orientação inicial,
          sem definir uma técnica fechada, e pode conversar com o Marco para
          entender o melhor caminho.
        </p>
      </div>

      <div className="mt-12">
        <QuizGame />
      </div>
    </section>
  );
}
