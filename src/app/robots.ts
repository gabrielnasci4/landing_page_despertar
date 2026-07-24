import type { MetadataRoute } from "next";
import { clinica } from "@/content/clinica";

/*
  Instruções para os buscadores: pode indexar tudo, menos a área
  interna e a página de agradecimento. Aponta o caminho do sitemap.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/obrigado"],
    },
    sitemap: `${clinica.siteUrl}/sitemap.xml`,
  };
}
