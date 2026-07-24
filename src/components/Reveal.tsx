"use client";

import { useEffect } from "react";

/*
  Faz os elementos marcados com data-reveal surgirem suavemente
  quando entram na tela. Se a pessoa pediu "menos animação" no
  sistema, o CSS já cuida de mostrar tudo sem movimento.
*/
export function Reveal() {
  useEffect(() => {
    const alvos = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || alvos.length === 0) {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
