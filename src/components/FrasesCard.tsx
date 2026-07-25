"use client";

import { useState, useEffect } from "react";
import { frases } from "@/content/frases";
import { track } from "@/lib/analytics";

/*
  Cartão de mensagem inspiradora. Começa mostrando a primeira
  frase (para não "piscar" ao carregar) e, ao clicar em "tirar
  outra", sorteia uma frase diferente — como o cartãozinho que o
  Marco entrega em mãos.
*/
export function FrasesCard() {
  const [indice, setIndice] = useState(0);
  const [girando, setGirando] = useState(false);

  // Sorteia uma frase diferente já ao abrir a página (feito só no
  // navegador para não dar conflito de renderização).
  useEffect(() => {
    const sortear = () => setIndice(Math.floor(Math.random() * frases.length));
    sortear();
  }, []);

  function tirarOutra() {
    if (frases.length < 2) return;
    let novo = indice;
    while (novo === indice) {
      novo = Math.floor(Math.random() * frases.length);
    }
    setGirando(true);
    track("frase_sorteada");
    window.setTimeout(() => {
      setIndice(novo);
      setGirando(false);
    }, 180);
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-dawn-line)] bg-[var(--color-dawn)] px-7 py-12 shadow-sm sm:px-14 sm:py-16">
        <span
          className="font-display text-5xl leading-none text-[var(--color-gold)]"
          aria-hidden="true"
        >
          ✳
        </span>
        <p
          className={`mt-5 font-display text-2xl italic leading-snug text-[var(--color-twilight)] transition-all duration-200 sm:text-[1.9rem] ${
            girando ? "translate-y-1 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          {frases[indice]}
        </p>
      </div>
      <button
        type="button"
        onClick={tirarOutra}
        className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[var(--color-twilight)]/20 px-6 py-3 text-sm font-semibold text-[var(--color-twilight)] transition-colors hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.5 8a5.5 5.5 0 11-1.6-3.9M13.5 2v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Tirar outra mensagem
      </button>
    </div>
  );
}
