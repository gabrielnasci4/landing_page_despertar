"use client";

import { useState } from "react";
import type { PerguntaFrequente } from "@/content/faq";

/*
  Lista de perguntas frequentes que abrem e fecham ao clicar.
  Usa <details> por baixo dos panos? Não — usamos estado para
  animar a abertura de forma suave.
*/
export function Accordion({ itens }: { itens: PerguntaFrequente[] }) {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-dawn-line)] border-y border-[var(--color-dawn-line)]">
      {itens.map((item, i) => {
        const estaAberto = aberto === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setAberto(estaAberto ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={estaAberto}
            >
              <span className="font-display text-lg text-[var(--color-twilight)] sm:text-xl">
                {item.pergunta}
              </span>
              <span
                className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-amethyst)]/40 text-[var(--color-amethyst)] transition-transform duration-300 ${
                  estaAberto ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                estaAberto ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[1.05rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {item.resposta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
