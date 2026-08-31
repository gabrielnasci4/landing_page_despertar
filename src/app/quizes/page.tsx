import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Quizes",
  description:
    "Testes leves e reflexivos da Despertar PΨ: descubra qual caminho de cuidado conversa com o seu momento e qual é o seu momento interior.",
  alternates: { canonical: "/quizes" },
};

/*
  Página que reúne os testes/quizes do site. Para adicionar um novo
  teste no futuro, copie um bloco { ... } da lista abaixo.
*/
const quizes = [
  {
    titulo: "Qual caminho de cuidado conversa com o seu momento?",
    resumo:
      "Quatro perguntas rápidas para refletir sobre o que você busca. No fim, uma orientação inicial e o caminho para conversar com o Marco.",
    href: "/quiz",
    rotulo: "Fazer o teste",
    cor: "#4a6350",
  },
  {
    titulo: "Qual é o seu momento interior?",
    resumo:
      "Um teste leve de autoconhecimento: cinco perguntas e um espelho carinhoso do seu momento. Só por diversão, sem diagnóstico.",
    href: "/autoconhecimento",
    rotulo: "Fazer o teste",
    cor: "#574a8c",
  },
];

export default function QuizesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "Quizes", url: "/quizes" },
        ])}
      />
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="text-center">
        <Eyebrow className="justify-center">Um convite à reflexão</Eyebrow>
        <h1 className="mt-5 text-[2.2rem] leading-[1.08] sm:text-5xl">Quizes</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          Testes leves para se conhecer um pouco melhor e dar o primeiro passo,
          no seu tempo.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {quizes.map((q) => (
          <Link
            key={q.href}
            href={q.href}
            className="group flex flex-col rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-7 transition-colors hover:bg-[var(--color-dawn-deep)]"
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: q.cor }}
              aria-hidden="true"
            />
            <h2 className="mt-4 font-display text-2xl leading-snug text-[var(--color-twilight)]">
              {q.titulo}
            </h2>
            <p className="mt-3 flex-1 leading-relaxed text-[var(--color-ink-soft)]">
              {q.resumo}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[var(--color-amethyst)]">
              {q.rotulo}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-[var(--color-ink-soft)]">
        Em breve, novos testes por aqui.
      </p>
      </section>
    </>
  );
}
