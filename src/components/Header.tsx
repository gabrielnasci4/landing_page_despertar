"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CtaWhatsapp } from "./CtaWhatsapp";
import { SocialLinks } from "./SocialLinks";
import { clinica } from "@/content/clinica";

const navegacao = [
  { rotulo: "Terapias", href: "/#terapias" },
  { rotulo: "A abordagem", href: "/parapsicologia-clinica" },
  { rotulo: "Sobre", href: "/sobre" },
  { rotulo: "Por onde começar", href: "/quiz" },
  { rotulo: "Contato", href: "/contato" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const pathname = usePathname();

  /*
    Faz o clique no menu SEMPRE levar ao destino, mesmo quando a
    pessoa já está na página/seção. Sem isto, clicar de novo no mesmo
    item não fazia nada (o navegador ignora ir para um endereço igual
    ao atual).
  */
  function aoClicarNavegacao(e: React.MouseEvent, href: string) {
    setAberto(false);
    if (href.includes("#")) {
      const [caminho, id] = href.split("#");
      const alvoPath = caminho || "/";
      if (pathname === alvoPath) {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Trava a rolagem do fundo quando o menu do celular está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          rolou
            ? "bg-[var(--color-dawn)]/90 backdrop-blur-md border-b border-[var(--color-dawn-line)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={`${clinica.nome} — início`}
            onClick={() => setAberto(false)}
          >
            <Image
              src="/fotos/logo-despertar.png"
              alt={clinica.nome}
              width={2083}
              height={1621}
              priority
              className="h-16 w-auto sm:h-20"
            />
            <span className="sr-only">{clinica.nome}</span>
          </Link>

          {/* Navegação — computador */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => aoClicarNavegacao(e, item.href)}
                className="text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-amethyst)]"
              >
                {item.rotulo}
              </Link>
            ))}
            <span className="h-5 w-px bg-[var(--color-dawn-line)]" aria-hidden="true" />
            <SocialLinks colorido tamanho={30} />
            <CtaWhatsapp origem="header" variante="whatsapp" className="px-5 py-2.5 text-sm">
              Agendar
            </CtaWhatsapp>
          </nav>

          {/* Botão do menu — celular */}
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-twilight)] lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                  aberto ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-all ${
                  aberto ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                  aberto ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/*
        Menu do celular — fica FORA do <header> de propósito.
        O cabeçalho usa "backdrop-blur", e um menu fixo dentro dele não
        cobre a tela toda (o conteúdo vazava por trás). Aqui fora, ele
        cobre a tela inteira corretamente.
      */}
      {aberto && (
        <div className="fixed inset-0 top-[80px] z-[45] overflow-y-auto bg-[var(--color-dawn)] px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => aoClicarNavegacao(e, item.href)}
                className="border-b border-[var(--color-dawn-line)] py-4 font-display text-2xl text-[var(--color-twilight)]"
              >
                {item.rotulo}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <CtaWhatsapp origem="menu_celular" variante="whatsapp" className="w-full">
              Agendar pelo WhatsApp
            </CtaWhatsapp>
          </div>
          <div className="mt-8 flex justify-center">
            <SocialLinks colorido tamanho={44} />
          </div>
        </div>
      )}
    </>
  );
}
