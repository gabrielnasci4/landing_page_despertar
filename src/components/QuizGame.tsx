"use client";

import { useState } from "react";
import Link from "next/link";
import { quiz, terapiaPadraoQuiz } from "@/content/quiz";
import { getTerapia } from "@/content/terapias";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { clinica } from "@/content/clinica";
import { track } from "@/lib/analytics";

/*
  Quiz "Qual terapia é ideal para você?".
  A cada resposta somamos pontos para as terapias que ela aponta.
  No fim, a terapia com mais pontos é a sugestão — e o botão abre
  o WhatsApp já com esse resultado escrito.
*/
export function QuizGame() {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState<Record<string, number>>({});
  const [terminou, setTerminou] = useState(false);

  const total = quiz.length;
  const progresso = terminou ? 100 : Math.round((passo / total) * 100);

  function responder(aponta: string[]) {
    setPontos((atual) => {
      const novo = { ...atual };
      aponta.forEach((slug) => {
        novo[slug] = (novo[slug] || 0) + 1;
      });
      return novo;
    });
    if (passo + 1 < total) {
      setPasso(passo + 1);
    } else {
      setTerminou(true);
      track("quiz_concluido");
    }
  }

  function recomeçar() {
    setPasso(0);
    setPontos({});
    setTerminou(false);
  }

  // Descobre a terapia mais pontuada.
  function terapiaSugerida() {
    let melhorSlug = terapiaPadraoQuiz;
    let melhorPontos = -1;
    for (const [slug, p] of Object.entries(pontos)) {
      if (p > melhorPontos) {
        melhorPontos = p;
        melhorSlug = slug;
      }
    }
    return getTerapia(melhorSlug) ?? getTerapia(terapiaPadraoQuiz)!;
  }

  if (terminou) {
    const t = terapiaSugerida();
    const mensagem = `Olá, Marco! Fiz o teste no site da ${clinica.nome} e o resultado sugeriu a terapia de ${t.nome}. Gostaria de conversar sobre isso.`;
    return (
      <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-amethyst)]">
          A terapia que conversa com o seu momento
        </p>
        <div
          className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-semibold text-white"
          style={{ backgroundColor: t.cor }}
        >
          Ψ
        </div>
        <h2 className="mt-5 font-display text-3xl text-[var(--color-twilight)] sm:text-4xl">
          {t.nome}
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-[var(--color-ink-soft)]">
          {t.resumo}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaWhatsapp origem="quiz_resultado" mensagem={mensagem}>
            Conversar sobre {t.nome}
          </CtaWhatsapp>
          <Link
            href={`/terapias/${t.slug}`}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--color-twilight)]/20 px-6 py-3 font-semibold text-[var(--color-twilight)] transition-colors hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]"
          >
            Ler sobre a terapia
          </Link>
        </div>
        <button
          type="button"
          onClick={recomeçar}
          className="mt-6 text-sm text-[var(--color-ink-soft)] underline hover:text-[var(--color-amethyst)]"
        >
          Refazer o teste
        </button>
        <p className="mt-8 text-xs leading-relaxed text-[var(--color-ink-soft)]">
          Esta sugestão é um ponto de partida para a conversa, e não uma
          recomendação clínica. O caminho ideal é definido junto com o Marco.
        </p>
      </div>
    );
  }

  const pergunta = quiz[passo];

  return (
    <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-8 sm:p-12">
      {/* Progresso */}
      <div className="flex items-center justify-between text-sm text-[var(--color-ink-soft)]">
        <span>
          Pergunta {passo + 1} de {total}
        </span>
        <span>{progresso}%</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--color-dawn-deep)]">
        <div
          className="h-full rounded-full bg-[var(--color-amethyst)] transition-all duration-500"
          style={{ width: `${progresso}%` }}
        />
      </div>

      <h2 className="mt-8 font-display text-2xl text-[var(--color-twilight)] sm:text-3xl">
        {pergunta.pergunta}
      </h2>

      <div className="mt-6 flex flex-col gap-3">
        {pergunta.opcoes.map((opcao, i) => (
          <button
            key={i}
            type="button"
            onClick={() => responder(opcao.aponta)}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-dawn-line)] bg-[var(--color-dawn)] px-5 py-4 text-left text-[1.02rem] text-[var(--color-ink)] transition-all hover:border-[var(--color-amethyst)] hover:bg-white"
          >
            {opcao.texto}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-dawn-line)] text-[var(--color-amethyst)] transition-colors group-hover:border-[var(--color-amethyst)]" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
