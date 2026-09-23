/*
  FERRAMENTAS ATIVAS NO SITE — fonte única.

  Estas constantes decidem o que o site carrega E o que a Política de
  Privacidade descreve. Assim a política não fica desatualizada em
  relação às ferramentas: ao ligar ou desligar uma delas (aqui ou
  pelas variáveis de ambiente na Cloudflare), o texto da política
  muda junto, automaticamente.
*/

// ID do Microsoft Clarity. Fica embutido (não é segredo — já aparece
// no navegador) para funcionar em qualquer hospedagem. A variável de
// ambiente, se existir, tem prioridade.
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "xss14ps28x";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
// URL do Apps Script da planilha de contatos (termina em /exec).
// Cole entre as aspas. Veja docs/apps-script-contatos.gs.
export const WEBHOOK_PLANILHA =
  process.env.NEXT_PUBLIC_PLANILHA_WEBHOOK_URL || "";

export const ferramentasAtivas = {
  clarity: Boolean(CLARITY_ID),
  googleAnalytics: Boolean(GA_ID),
  pixelMeta: Boolean(PIXEL_ID),
  planilhaGoogle: Boolean(WEBHOOK_PLANILHA),
};
