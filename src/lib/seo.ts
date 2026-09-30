import type { Metadata } from "next";
import { clinica } from "@/content/clinica";

/*
  Metadados de cada página (título, descrição, endereço canônico e a
  "prévia" que aparece ao compartilhar o link no WhatsApp/Instagram).

  Por que um ajudante: o Next.js NÃO repassa o título da página para a
  prévia de compartilhamento. Sem isto, toda página mostrava a prévia
  da home. Aqui título, descrição e prévia saem sempre juntos.

  - titulo: vira "Título | Despertar ParaPSI" (o sufixo é automático).
  - tituloCompleto: use quando o título já traz a marca (sem sufixo).
*/
export function metadadosPagina({
  titulo,
  tituloCompleto,
  descricao,
  caminho,
}: {
  titulo?: string;
  tituloCompleto?: string;
  descricao: string;
  caminho: string;
}): Metadata {
  const tituloFinal = tituloCompleto ?? `${titulo} | ${clinica.nomeExtenso}`;
  return {
    title: tituloCompleto ? { absolute: tituloCompleto } : titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: clinica.nomeExtenso,
      url: caminho,
      title: tituloFinal,
      description: descricao,
      // Imagem padrão do site (a mesma da home) para as prévias de
      // compartilhamento. Precisa vir aqui porque o "openGraph" de cada
      // página substitui o da home por inteiro.
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: clinica.nomeExtenso,
        },
      ],
    },
  };
}
