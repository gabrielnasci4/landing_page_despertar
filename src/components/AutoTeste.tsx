"use client";

import { useState } from "react";
import { perguntas, perfis, perfilPadrao } from "@/content/autoconhecimento";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { clinica } from "@/content/clinica";
import { track } from "@/lib/analytics";

/*
  Teste de autoconhecimento. Cada resposta soma pontos para um
  PERFIL. No fim, mostra o perfil predominante (descrição rica) e
  convida para uma conversa — sem indicar terapia nem diagnóstico.
*/
export function AutoTeste() {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState<Record<string, number>>({});
  const [terminou, setTerminou] = useState(false);

  const total = perguntas.length;
  const progresso = terminou ? 100 : Math.round((passo / total) * 100);

  function responder(perfil: string) {
    setPontos((atual) => ({ ...atual, [perfil]: (atual[perfil] || 0) + 1 }));
    if (passo + 1 < total) {
      setPasso(passo + 1);
    } else {
      setTerminou(true);
      track("autoteste_concluido");
    }
  }

  function recomeçar() {
    setPasso(0);
    setPontos({});
    setTerminou(false);
  }

  function perfilResultado() {
    let melhor = perfilPadrao as string;
    let melhorPontos = -1;
    for (const [chave, p] of Object.entries(pontos)) {
      if (p > melhorPontos) {
        melhorPontos = p;
        melhor = chave;
      }
    }
    return perfis[melhor] ? melhor : (perfilPadrao as string);
  }

  if (terminou) {
    const p = perfis[perfilResultado()];
    const mensagem =
      `Olá, Marco! Fiz o teste de autoconhecimento no site da ${clinica.nome} e no meu resultado deu "${p.nome}". Gostaria de conversar.`;

    const urlTeste = `${clinica.siteUrl}/autoconhecimento`;
    const textoCompartilhar = `Fiz o teste "Qual é o seu momento interior?" da ${clinica.nome} e no meu deu "${p.nome}". Faça o seu:`;

    function compartilhar() {
      track("autoteste_compartilhado");
      const nav = typeof navigator !== "undefined" ? navigator : undefined;
      if (nav?.share) {
        nav.share({ title: clinica.nome, text: textoCompartilhar, url: urlTeste }).catch(() => {});
      } else {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${textoCompartilhar} ${urlTeste}`)}`,
          "_blank",
          "noopener,noreferrer",
        );
      }
    }

    return (
      <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-amethyst)]">
          Um espelho leve do seu momento
        </p>
        <div className="mt-4 text-5xl" aria-hidden="true">
          {p.simbolo}
        </div>
        <h2 className="mt-3 font-display text-3xl text-[var(--color-twilight)] sm:text-4xl">
          {p.nome}
        </h2>
        <p className="mx-auto mt-3 max-w-lg font-display text-xl italic text-[var(--color-amethyst)]">
          {p.essencia}
        </p>

        <div className="mx-auto mt-6 max-w-xl space-y-4 text-left text-[1.02rem] leading-relaxed text-[var(--color-ink)]">
          {p.descricao.map((par, i) => (
            <p key={i}>{par}</p>
          ))}
          <p className="rounded-2xl bg-[var(--color-amethyst-tint)]/60 p-4 text-[var(--color-twilight)]">
            {p.convite}
          </p>
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaWhatsapp origem="autoteste_resultado" mensagem={mensagem}>
            Conversar com o Marco
          </CtaWhatsapp>
          <button
            type="button"
            onClick={compartilhar}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[var(--color-twilight)]/20 px-6 py-3 font-semibold text-[var(--color-twilight)] transition-colors hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 8a3 3 0 10-2.83-4M6 12a3 3 0 100 0m12 4a3 3 0 10-2.83 4M8.6 13.5l6.8 3M15.4 7.5l-6.8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Compartilhar
          </button>
          <button
            type="button"
            onClick={recomeçar}
            className="text-sm text-[var(--color-ink-soft)] underline hover:text-[var(--color-amethyst)]"
          >
            Refazer
          </button>
        </div>

        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
          Isto é só um espelho leve e afetuoso do seu momento, feito para
          provocar reflexão. Não é uma avaliação de personalidade nem um
          diagnóstico. O autoconhecimento de verdade é único e acontece no seu
          tempo, numa conversa.
        </p>
      </div>
    );
  }

  const pergunta = perguntas[passo];

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
            onClick={() => responder(opcao.perfil)}
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
