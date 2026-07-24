import { NextResponse } from "next/server";
import { Resend } from "resend";
import { clinica } from "@/content/clinica";

/*
  Recebe os dados do formulário e faz duas coisas (se estiverem
  configuradas):
    1) envia um e-mail para o Marco (via Resend);
    2) adiciona uma linha numa planilha do Google (via Apps Script).

  Precisa destas variáveis de ambiente na Vercel (veja MANUTENCAO.md):
    RESEND_API_KEY             chave do Resend
    CONTATO_EMAIL_DESTINO      e-mail que recebe os leads (ex. o do Marco)
    CONTATO_EMAIL_REMETENTE    remetente verificado no Resend
    PLANILHA_WEBHOOK_URL       endereço do Apps Script da planilha

  Importante: mesmo que algo aqui falhe, o site continua funcionando
  e o WhatsApp abre normalmente. Este registro é um "extra".
*/

type Lead = {
  nome?: string;
  telefone?: string;
  interesse?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  let dados: Lead;
  try {
    dados = await request.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "dados inválidos" }, { status: 400 });
  }

  const nome = (dados.nome || "").toString().slice(0, 120).trim();
  const telefone = (dados.telefone || "").toString().slice(0, 40).trim();
  const interesse = (dados.interesse || "").toString().slice(0, 120).trim();
  const mensagem = (dados.mensagem || "").toString().slice(0, 2000).trim();

  if (!nome || !telefone) {
    return NextResponse.json({ ok: false, erro: "faltam nome ou telefone" }, { status: 400 });
  }

  const quando = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  // 1) E-mail para o Marco
  const chaveResend = process.env.RESEND_API_KEY;
  const destino = process.env.CONTATO_EMAIL_DESTINO || clinica.email;
  const remetente = process.env.CONTATO_EMAIL_REMETENTE;
  if (chaveResend && remetente) {
    try {
      const resend = new Resend(chaveResend);
      await resend.emails.send({
        from: `${clinica.nome} <${remetente}>`,
        to: destino,
        subject: `Novo contato pelo site — ${nome}`,
        replyTo: destino,
        text: [
          `Novo contato recebido pelo site (${quando}):`,
          ``,
          `Nome: ${nome}`,
          `Telefone/WhatsApp: ${telefone}`,
          `Interesse: ${interesse || "não informado"}`,
          `Mensagem: ${mensagem || "—"}`,
        ].join("\n"),
      });
    } catch (e) {
      console.error("Falha ao enviar e-mail do lead:", e);
    }
  }

  // 2) Linha na planilha do Google
  const webhookPlanilha = process.env.PLANILHA_WEBHOOK_URL;
  if (webhookPlanilha) {
    try {
      await fetch(webhookPlanilha, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quando, nome, telefone, interesse, mensagem }),
      });
    } catch (e) {
      console.error("Falha ao gravar na planilha:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
