"use client";

import { useState } from "react";
import { quiz, temas, temaPadrao } from "@/content/quiz";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { clinica } from "@/content/clinica";
import { track } from "@/lib/analytics";

/*
  Teste "Por onde começar a sua conversa?".
  Cada resposta soma pontos para um TEMA (não uma terapia). No fim,
  o teste reflete o momento da pessoa e a conduz para conversar com
  o Marco — sem indicar nenhuma prática (decisão do Marco: as
  indicações são individuais e dependem de conversa).
*/
export function QuizGame() {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState<Record<string, number>>({});
  const [terminou, setTerminou] = useState(false);

  const total = quiz.length;
  const progresso = terminou ? 100 : Math.round((passo / total) * 100);

  function responder(tema: string) {
    setPontos((atual) => ({ ...atual, [tema]: (atual[tema] || 0) + 1 }));
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

  function temaSugerido() {
    let melhor = temaPadrao as string;
    let melhorPontos = -1;
    for (const [chave, p] of Object.entries(pontos)) {
      if (p > melhorPontos) {
        melhorPontos = p;
        melhor = chave;
      }
    }
    return temas[melhor] ? melhor : (temaPadrao as string);
  }

  if (terminou) {
    const t = temas[temaSugerido()];
    const mensagem =
      `Olá, Marco! Fiz o teste no site da ${clinica.nome} e senti que estou buscando ${t.titulo}. Gostaria de conversar sobre por onde começar.`;

    return (
      <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-amethyst)]">
          O seu momento
        </p>
        <p className="mx-auto mt-5 max-w-xl font-display text-2xl leading-snug text-[var(--color-twilight)] sm:text-3xl">
          {t.reflexo}
        </p>

        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-[var(--color-ink-soft)]">
          Cada pessoa é única, e o que faz sentido para você só se revela numa
          conversa. Não existe fórmula pronta: o Marco escuta a sua história e,
          juntos, vocês definem o primeiro passo — no seu tempo e com todo o
          cuidado.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaWhatsapp origem="quiz_resultado" mensagem={mensagem}>
            Conversar com o Marco
          </CtaWhatsapp>
          <button
            type="button"
            onClick={recomeçar}
            className="text-sm text-[var(--color-ink-soft)] underline hover:text-[var(--color-amethyst)]"
          >
            Refazer o teste
          </button>
        </div>
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
            onClick={() => responder(opcao.tema)}
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
