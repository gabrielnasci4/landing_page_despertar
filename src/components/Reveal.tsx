"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
  Faz os elementos marcados com data-reveal surgirem suavemente
  quando entram na tela.

  IMPORTANTE: depende do endereço atual (usePathname). Assim, ao
  navegar entre páginas, ele RE-EXECUTA e revela o conteúdo da nova
  página. Sem isso, ao trocar de página o conteúdo ficava invisível
  (opacity 0) até recarregar com F5.

  Segurança extra: se o navegador não suportar IntersectionObserver,
  ou por qualquer motivo, um tempo-limite garante que tudo apareça.
*/
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const alvos = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );

    if (alvos.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    alvos.forEach((el) => obs.observe(el));

    // Rede de segurança: nada pode ficar invisível para sempre.
    const salvaguarda = window.setTimeout(() => {
      alvos.forEach((el) => el.classList.add("is-visible"));
    }, 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(salvaguarda);
    };
  }, [pathname]);

  return null;
}
