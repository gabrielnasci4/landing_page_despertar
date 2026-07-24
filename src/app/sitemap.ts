import type { MetadataRoute } from "next";
import { terapias } from "@/content/terapias";
import { clinica } from "@/content/clinica";

/*
  Mapa do site (sitemap): a lista de páginas que o Google deve
  conhecer. É gerado automaticamente — inclusive as 9 páginas de
  terapia. Você não precisa mexer aqui.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const base = clinica.siteUrl;
  const agora = new Date();

  const paginasFixas = [
    { url: "", prioridade: 1 },
    { url: "/parapsicologia-clinica", prioridade: 0.8 },
    { url: "/sobre", prioridade: 0.7 },
    { url: "/quiz", prioridade: 0.6 },
    { url: "/contato", prioridade: 0.9 },
    { url: "/politica-de-privacidade", prioridade: 0.3 },
  ].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: agora,
    changeFrequency: "monthly" as const,
    priority: p.prioridade,
  }));

  const paginasTerapias = terapias.map((t) => ({
    url: `${base}/terapias/${t.slug}`,
    lastModified: agora,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...paginasFixas, ...paginasTerapias];
}
