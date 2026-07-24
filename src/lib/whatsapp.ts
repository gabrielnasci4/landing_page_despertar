import { clinica } from "@/content/clinica";

/*
  Monta o link do WhatsApp já com uma mensagem escrita.
  Ao clicar, o WhatsApp abre com o texto pronto — a pessoa só
  aperta enviar. Isso reduz o atrito e aumenta as conversas.

  A "origem" identifica de qual parte do site veio o clique
  (ex.: "hero", "faq"). Não aparece para o cliente, mas ajuda o
  Marco a saber o que converte quando olharmos as estatísticas.
*/
export function linkWhatsApp(mensagem?: string): string {
  const texto =
    mensagem ??
    `Olá, Marco! Vim pelo site da ${clinica.nome} e gostaria de mais informações sobre as sessões.`;
  return `https://wa.me/${clinica.whatsappNumero}?text=${encodeURIComponent(texto)}`;
}

// Mensagem padrão para uma terapia específica.
export function mensagemTerapia(nomeTerapia: string): string {
  return `Olá, Marco! Vim pelo site da ${clinica.nome} e tenho interesse na terapia de ${nomeTerapia}. Poderia me passar mais informações?`;
}
