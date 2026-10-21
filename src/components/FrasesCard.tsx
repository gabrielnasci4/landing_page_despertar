"use client";

import { useState, useEffect, useRef } from "react";
import { frases } from "@/content/frases";
import { track } from "@/lib/analytics";

/*
  Cartão de mensagem inspiradora. Começa mostrando a primeira
  frase (para não "piscar" ao carregar) e, ao clicar em "tirar
  outra", sorteia uma frase diferente — como o cartãozinho que o
  Marco entrega em mãos.
*/
// Uma visita = esta aba desde que o site foi aberto/recarregado. Ir para
// outra página e voltar para a home (sem recarregar) não conta de novo.
let linkContado = false;
let vistaContada = false;

export function FrasesCard() {
  const [indice, setIndice] = useState(0);
  const [girando, setGirando] = useState(false);
  const cartao = useRef<HTMLDivElement>(null);

  /*
    Medição no Clarity (sem enviar o texto da mensagem):
    • "capsula_link_aberto": a pessoa ABRIU o site pelo link
      despertarparapsi.com.br/#capsula (o que o Marco divulga). Clicar
      em "Mensagem do dia" dentro do site não conta.
    • "capsula_visualizada": a mensagem ficou pelo menos metade visível
      por 1 segundo seguido, com a aba aberta.
    Os dois contam no máximo uma vez por visita. Não medem qual
    mensagem foi vista nem pessoas únicas.
  */
  useEffect(() => {
    const entrada = performance.getEntriesByType("navigation")[0];
    if (entrada && !linkContado) {
      const url = new URL(entrada.name);
      if (url.pathname === "/" && url.hash === "#capsula") {
        linkContado = true;
        track("capsula_link_aberto");
      }
    }

    const el = cartao.current;
    if (!el || vistaContada || !("IntersectionObserver" in window)) return;
    let timer: number | undefined;
    let visivel = false;
    const parar = () => {
      window.clearTimeout(timer);
      timer = undefined;
    };
    const tentar = () => {
      if (vistaContada || timer !== undefined) return;
      if (!visivel || document.visibilityState !== "visible") return;
      timer = window.setTimeout(() => {
        timer = undefined;
        if (vistaContada || !visivel || document.visibilityState !== "visible") return;
        vistaContada = true;
        track("capsula_visualizada");
        observador.disconnect();
      }, 1000);
    };
    const observador = new IntersectionObserver(
      ([item]) => {
        visivel = item.isIntersecting && item.intersectionRatio >= 0.5;
        if (visivel) tentar();
        else parar();
      },
      { threshold: [0, 0.5] },
    );
    const aoMudarAba = () => {
      if (document.visibilityState === "visible") tentar();
      else parar();
    };
    observador.observe(el);
    document.addEventListener("visibilitychange", aoMudarAba);
    return () => {
      parar();
      observador.disconnect();
      document.removeEventListener("visibilitychange", aoMudarAba);
    };
  }, []);

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
      <div
        ref={cartao}
        className="relative overflow-hidden rounded-[2rem] border border-[var(--color-dawn-line)] bg-[var(--color-dawn)] px-7 py-12 shadow-sm sm:px-14 sm:py-16">
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
