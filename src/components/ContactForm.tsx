"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { terapias } from "@/content/terapias";
import { clinica } from "@/content/clinica";
import { linkWhatsApp } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { WEBHOOK_PLANILHA } from "@/lib/ferramentas";

/*
  Formulário de contato "híbrido":
  1) grava o contato (planilha do Google, que também envia e-mail
     para o Marco), e
  2) em seguida abre o WhatsApp com a mensagem já escrita.
  Assim, mesmo que a pessoa desista de enviar o WhatsApp, o
  contato dela já ficou registrado.

  Como o site é estático (sem servidor), o registro vai direto para
  o endereço do Apps Script da planilha (WEBHOOK_PLANILHA, em
  src/lib/ferramentas.ts).

  Só dizemos "Recebemos o seu contato" (página /obrigado) quando a
  planilha CONFIRMA que gravou (resposta "ok"). Sem planilha ligada, ou
  se ela não confirmar, o formulário apenas abre o WhatsApp e avisa que
  falta a pessoa tocar em Enviar lá.

  "interessePadrao": pré-seleciona uma terapia (usado nas
  páginas de terapia). Opcional.
*/
export function ContactForm({ interessePadrao = "" }: { interessePadrao?: string }) {
  const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  // Mostrado quando o WhatsApp abriu mas o registro não foi confirmado.
  const [linkAberto, setLinkAberto] = useState("");

  async function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    const form = e.currentTarget;
    const dados = new FormData(form);
    const nome = String(dados.get("nome") || "").trim();
    const telefone = String(dados.get("telefone") || "").trim();
    const interesse = String(dados.get("interesse") || "").trim();
    const mensagem = String(dados.get("mensagem") || "").trim();
    // Campo-armadilha invisível: se vier preenchido, é robô. Ignora.
    const armadilha = String(dados.get("website") || "").trim();
    if (armadilha) return;

    if (!nome || !telefone) {
      setErro("Por favor, preencha seu nome e telefone.");
      return;
    }

    setEnviando(true);
    setLinkAberto("");

    // Monta a mensagem que abrirá no WhatsApp.
    const textoWpp =
      `Olá, Marco! Meu nome é ${nome}.` +
      (interesse ? ` Tenho interesse em ${interesse}.` : "") +
      (mensagem ? ` ${mensagem}` : "") +
      ` (Enviado pelo site da ${clinica.nome}.)`;

    // 1) Abre o WhatsApp JÁ (antes de esperar a planilha): se abrir
    //    depois de uma espera, o celular pode bloquear a janela.
    const link = linkWhatsApp(textoWpp);
    window.open(link, "_blank", "noopener,noreferrer");
    track("envio_formulario", { interesse: interesse || "nao_informado" });

    // 2) Grava o contato na planilha e espera a CONFIRMAÇÃO ("ok").
    //    text/plain evita a checagem extra do navegador (CORS); o
    //    Google devolve a resposta liberada para leitura.
    let confirmado = false;
    if (WEBHOOK_PLANILHA) {
      try {
        const resposta = await fetch(WEBHOOK_PLANILHA, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ nome, telefone, interesse, mensagem }),
          signal: AbortSignal.timeout(10000),
        });
        confirmado = resposta.ok && (await resposta.text()).trim() === "ok";
      } catch {
        confirmado = false;
      }
    }

    // 3) Só vai para "Recebemos o seu contato" se a planilha confirmou.
    if (confirmado) {
      router.push("/obrigado");
      return;
    }
    setEnviando(false);
    setLinkAberto(link);
  }

  return (
    <form onSubmit={aoEnviar} className="flex flex-col gap-4" data-clarity-mask="True">
      {/* Campo-armadilha anti-robô: invisível para pessoas. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Campo label="Seu nome" nome="nome" placeholder="Como podemos te chamar" required />
        <Campo
          label="WhatsApp / telefone"
          nome="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          required
        />
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-[var(--color-ink)]">
          Tem interesse em alguma terapia? <span className="text-[var(--color-ink-soft)]">(opcional)</span>
        </span>
        <select
          name="interesse"
          defaultValue={interessePadrao}
          className="w-full min-w-0 min-h-[48px] rounded-xl border border-[var(--color-dawn-line)] bg-white px-4 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-amethyst)]"
        >
          <option value="">Ainda não sei / quero orientação</option>
          {terapias.map((t) => (
            <option key={t.slug} value={t.nome}>
              {t.nome}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-[var(--color-ink)]">
          Mensagem <span className="text-[var(--color-ink-soft)]">(opcional)</span>
        </span>
        <textarea
          name="mensagem"
          rows={3}
          placeholder="Conte, se quiser, o que te trouxe até aqui."
          className="w-full min-w-0 resize-none rounded-xl border border-[var(--color-dawn-line)] bg-white px-4 py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-amethyst)]"
        />
      </label>

      <label className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)]">
        <input
          type="checkbox"
          name="consentimento"
          required
          className="mt-1 h-4 w-4 accent-[var(--color-amethyst)]"
        />
        <span>
          Autorizo o contato pelos dados informados e li a Política de
          Privacidade.
        </span>
      </label>

      {erro && <p className="text-sm text-[var(--color-ember-deep)]">{erro}</p>}

      {linkAberto && (
        <div
          role="status"
          className="rounded-xl border border-[var(--color-dawn-line)] bg-[var(--color-dawn-deep)] p-4 text-sm leading-relaxed text-[var(--color-ink)]"
        >
          Abrimos o WhatsApp com a sua mensagem pronta. Para o Marco receber,
          toque em <strong>Enviar</strong> lá no WhatsApp. Se a janela não
          abriu,{" "}
          <a
            href={linkAberto}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-amethyst)] underline underline-offset-4"
          >
            toque aqui
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="mt-1 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[var(--color-ember)] px-8 py-4 font-semibold text-white transition-all hover:bg-[var(--color-ember-deep)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
      >
        {enviando
          ? "Abrindo o WhatsApp…"
          : WEBHOOK_PLANILHA
            ? "Enviar e falar no WhatsApp"
            : "Continuar no WhatsApp"}
      </button>
      <p className="text-center text-xs text-[var(--color-ink-soft)]">
        {WEBHOOK_PLANILHA
          ? "Ao enviar, seus dados são registrados e o WhatsApp abre com a mensagem pronta. Você ainda pode revisar antes de mandar."
          : "O WhatsApp abre com a mensagem pronta. Você revisa e toca em Enviar lá."}
      </p>
    </form>
  );
}

function Campo({
  label,
  nome,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  nome: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-[var(--color-ink)]">
        {label}
        {required && <span className="text-[var(--color-ember)]"> *</span>}
      </span>
      <input
        name={nome}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full min-w-0 min-h-[48px] rounded-xl border border-[var(--color-dawn-line)] bg-white px-4 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-amethyst)]"
      />
    </label>
  );
}
