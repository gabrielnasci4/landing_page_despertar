"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { terapias } from "@/content/terapias";
import { clinica } from "@/content/clinica";
import { linkWhatsApp } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/*
  Formulário de contato "híbrido":
  1) grava o contato (planilha do Google, que também envia e-mail
     para o Marco), e
  2) em seguida abre o WhatsApp com a mensagem já escrita.
  Assim, mesmo que a pessoa desista de enviar o WhatsApp, o
  contato dela já ficou registrado.

  Como o site é estático (sem servidor), o registro vai direto para
  o endereço do Apps Script da planilha, definido na variável
  NEXT_PUBLIC_PLANILHA_WEBHOOK_URL (configurada na Cloudflare).

  "interessePadrao": pré-seleciona uma terapia (usado nas
  páginas de terapia). Opcional.
*/
const WEBHOOK_PLANILHA = process.env.NEXT_PUBLIC_PLANILHA_WEBHOOK_URL;
export function ContactForm({ interessePadrao = "" }: { interessePadrao?: string }) {
  const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

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

    // Monta a mensagem que abrirá no WhatsApp.
    const textoWpp =
      `Olá, Marco! Meu nome é ${nome}.` +
      (interesse ? ` Tenho interesse em ${interesse}.` : "") +
      (mensagem ? ` ${mensagem}` : "") +
      ` (Enviado pelo site da ${clinica.nome}.)`;

    // 1) Grava o lead (não bloqueia o WhatsApp se falhar).
    //    "no-cors" + text/plain: o Apps Script recebe o envio sem
    //    exigir configuração de CORS. Não lemos a resposta (não
    //    precisamos): é registrar e seguir para o WhatsApp.
    if (WEBHOOK_PLANILHA) {
      try {
        await fetch(WEBHOOK_PLANILHA, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ nome, telefone, interesse, mensagem }),
        });
      } catch {
        /* segue mesmo assim: o importante é abrir o WhatsApp */
      }
    }

    track("envio_formulario", { interesse: interesse || "nao_informado" });

    // 2) Abre o WhatsApp e leva para a página de agradecimento.
    window.open(linkWhatsApp(textoWpp), "_blank", "noopener,noreferrer");
    router.push("/obrigado");
  }

  return (
    <form onSubmit={aoEnviar} className="flex flex-col gap-4">
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
          className="min-h-[48px] rounded-xl border border-[var(--color-dawn-line)] bg-white px-4 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-amethyst)]"
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
          className="resize-none rounded-xl border border-[var(--color-dawn-line)] bg-white px-4 py-3 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-amethyst)]"
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

      <button
        type="submit"
        disabled={enviando}
        className="mt-1 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[var(--color-ember)] px-8 py-4 font-semibold text-white transition-all hover:bg-[var(--color-ember-deep)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
      >
        {enviando ? "Abrindo o WhatsApp…" : "Enviar e falar no WhatsApp"}
      </button>
      <p className="text-center text-xs text-[var(--color-ink-soft)]">
        Ao enviar, seus dados são registrados e o WhatsApp abre com a mensagem
        pronta. Você ainda pode revisar antes de mandar.
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
        className="min-h-[48px] rounded-xl border border-[var(--color-dawn-line)] bg-white px-4 text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-amethyst)]"
      />
    </label>
  );
}
