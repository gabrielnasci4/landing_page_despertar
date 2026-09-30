import { QuizGame } from "@/components/QuizGame";
import { Eyebrow } from "@/components/ui";
import { metadadosPagina } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata = metadadosPagina({
  titulo: "Qual caminho de cuidado conversa com o seu momento?",
  descricao:
    "Responda quatro perguntas e receba uma orientação inicial. O caminho é sempre individual, construído numa conversa com Marco Sadério, da Despertar ParaPSI.",
  caminho: "/quiz",
});

export default function QuizPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "Quizes", url: "/quizes" },
          { nome: "Qual caminho de cuidado", url: "/quiz" },
        ])}
      />
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
    </>
  );
}
