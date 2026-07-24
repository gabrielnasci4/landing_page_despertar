/*
  Envia um "evento" para o Google Analytics quando algo importante
  acontece (clique no WhatsApp, envio do formulário, fim do quiz).
  Se o Analytics ainda não estiver configurado, a função
  simplesmente não faz nada — nunca quebra o site.
*/

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export function track(evento: string, dados: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  try {
    w.gtag?.("event", evento, dados);
    w.fbq?.("trackCustom", evento, dados);
  } catch {
    /* silencioso de propósito: analytics nunca deve quebrar a página */
  }
}
