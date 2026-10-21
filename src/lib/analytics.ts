import { CLARITY_ID } from "@/lib/ferramentas";

/*
  Envia um "evento" para as ferramentas de medição quando algo
  importante acontece (clique no WhatsApp, cápsula vista, fim do quiz).

  • Microsoft Clarity: recebe só o NOME do evento. No painel do
    Clarity, filtre as sessões pelo nome do evento (eventos
    personalizados / "Custom events") para ver quantas tiveram cada um.
    Lista dos eventos: MANUTENCAO.md, seção 7.
  • Google Analytics / Pixel da Meta: só se estiverem instalados
    (hoje não estão) e só com os parâmetros da lista PERMITIDOS.

  ⚠️ PRIVACIDADE: nunca envie dados pessoais (nome, telefone,
  mensagem) nem a terapia de interesse da pessoa: interesse em
  terapia pode ser dado de saúde (dado sensível na LGPD).

  Se alguma ferramenta falhar, as outras seguem e o site nunca quebra.
*/

// Únicos parâmetros que podem sair do site (e só como texto).
const PERMITIDOS = ["origem"];

type Fila = ((...args: unknown[]) => void) & { q?: unknown[] };

type JanelaMedicao = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

// Chama o Clarity mesmo que o script dele ainda não tenha terminado de
// carregar: o pedido fica numa fila (o mesmo jeito que o código
// oficial do Clarity usa) e é entregue quando ele carregar.
function eventoClarity(nome: string) {
  if (!CLARITY_ID) return;
  const w = window as unknown as { clarity?: Fila };
  if (!w.clarity) {
    const fila: Fila = (...a: unknown[]) => {
      (fila.q = fila.q || []).push(a);
    };
    w.clarity = fila;
  }
  w.clarity("event", nome);
}

export function track(evento: string, dados: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as JanelaMedicao;

  const seguros: Record<string, string> = {};
  for (const chave of PERMITIDOS) {
    const valor = dados[chave];
    if (typeof valor === "string") seguros[chave] = valor.slice(0, 60);
  }

  try {
    eventoClarity(evento);
  } catch {
    /* segue para as outras */
  }
  try {
    w.gtag?.("event", evento, seguros);
  } catch {
    /* segue para as outras */
  }
  try {
    w.fbq?.("trackCustom", evento, seguros);
  } catch {
    /* silencioso de propósito: medição nunca deve quebrar a página */
  }
}
