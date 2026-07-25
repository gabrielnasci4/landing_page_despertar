"use client";

import { useState } from "react";
import Link from "next/link";
import { quiz, caminhos, caminhoPadrao } from "@/content/quiz";
import { getTerapia } from "@/content/terapias";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { clinica } from "@/content/clinica";
import { track } from "@/lib/analytics";

/*
  Quiz "Por onde começar o seu caminho?".
  A cada resposta somamos pontos para um dos caminhos. No fim, o
  caminho mais pontuado é sugerido — com as práticas que o compõem
  (elas se complementam) — e o botão abre o WhatsApp com o resultado.
*/
export function QuizGame() {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState<Record<string, number>>({});
  const [terminou, setTerminou] = useState(false);

  const total = quiz.length;
  const progresso = terminou ? 100 : Math.round((passo / total) * 100);

  function responder(caminho: string) {
    setPontos((atual) => ({ ...atual, [caminho]: (atual[caminho] || 0) + 1 }));
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

  function caminhoSugerido() {
    let melhor = caminhoPadrao as string;
    let melhorPontos = -1;
    for (const [chave, p] of Object.entries(pontos)) {
      if (p > melhorPontos) {
        melhorPontos = p;
        melhor = chave;
      }
    }
    return caminhos[melhor] ? melhor : (caminhoPadrao as string);
  }

  if (terminou) {
    const chave = caminhoSugerido();
    const c = caminhos[chave];
    const praticas = c.praticas.map((s) => getTerapia(s)).filter(Boolean);
    const nomesPraticas = praticas.map((t) => t!.nome).join(", ");
    const mensagem =
      `Olá, Marco! Fiz o teste no site da ${clinica.nome} e o resultado sugeriu o caminho "${c.nome}"` +
      `${nomesPraticas ? ` (com práticas como ${nomesPraticas})` : ""}. Gostaria de conversar sobre por onde começar.`;

    return (
      <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-amethyst)]">
          Um caminho para o seu momento
        </p>
        <h2 className="mt-4 font-display text-3xl text-[var(--color-twilight)] sm:text-4xl">
          {c.nome}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-[var(--color-ink-soft)]">
          {c.resumo}
        </p>

        {praticas.length > 0 && (
          <div className="mt-8">
            <p className="text-sm font-medium text-[var(--color-ink)]">
              Práticas que podem se complementar nesse caminho:
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {praticas.map((t) => (
                <Link
                  key={t!.slug}
                  href={`/terapias/${t!.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-dawn-line)] bg-[var(--color-dawn)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-amethyst)]"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: t!.cor }}
                    aria-hidden="true"
                  />
                  {t!.nome}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaWhatsapp origem="quiz_resultado" mensagem={mensagem}>
            Conversar sobre esse caminho
          </CtaWhatsapp>
          <button
            type="button"
            onClick={recomeçar}
            className="text-sm text-[var(--color-ink-soft)] underline hover:text-[var(--color-amethyst)]"
          >
            Refazer o teste
          </button>
        </div>

        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Esta é apenas uma sugestão de ponto de partida — não uma recomendação
          clínica. As práticas se complementam e o caminho é construído junto com
          o Marco, respeitando as suas crenças e o seu tempo.
        </p>
      </div>
    );
  }

  const pergunta = quiz[passo];

  return (
    <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-8 sm:p-12">
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
            onClick={() => responder(opcao.caminho)}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-dawn-line)] bg-[var(--color-dawn)] px-5 py-4 text-left text-[1.05rem] text-[var(--color-ink)] transition-all hover:border-[var(--color-amethyst)] hover:bg-white"
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
