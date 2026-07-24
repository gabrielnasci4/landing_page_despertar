"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/*
  Banner de consentimento de cookies (LGPD).
  Só depois que a pessoa aceita é que o Google Analytics e o
  Pixel do Facebook são ligados. A escolha fica guardada no
  navegador, então o banner não aparece de novo.
*/
const CHAVE = "despertar-consentimento";

export function CookieConsent() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    // Lido só no navegador (evita erro de hidratação): se a pessoa
    // ainda não escolheu, mostramos o banner.
    const verificar = () => setMostrar(!localStorage.getItem(CHAVE));
    verificar();
  }, []);

  function decidir(valor: "aceito" | "recusado") {
    localStorage.setItem(CHAVE, valor);
    setMostrar(false);
    window.dispatchEvent(new CustomEvent("consentimento", { detail: valor }));
  }

  if (!mostrar) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[55] mx-auto max-w-2xl rounded-2xl border border-[var(--color-dawn-line)] bg-white/95 p-5 shadow-lg backdrop-blur sm:inset-x-auto sm:left-6 sm:bottom-6 sm:p-6">
      <p className="text-sm leading-relaxed text-[var(--color-ink)]">
        Usamos cookies para entender como o site é usado e melhorar sua
        experiência. Você pode aceitar ou recusar. Saiba mais na{" "}
        <Link
          href="/politica-de-privacidade"
          className="font-semibold text-[var(--color-amethyst)] underline"
        >
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => decidir("aceito")}
          className="min-h-[44px] rounded-full bg-[var(--color-twilight)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-amethyst-deep)]"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => decidir("recusado")}
          className="min-h-[44px] rounded-full border border-[var(--color-dawn-line)] px-6 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink-soft)]"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
