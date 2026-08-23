import type { MetadataRoute } from "next";
import { clinica } from "@/content/clinica";

// Gera um robots.txt fixo no build (site estático).
export const dynamic = "force-static";

/*
  Instruções para os buscadores: pode indexar tudo, menos a página
  de agradecimento. Aponta o caminho do sitemap.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/obrigado"],
    },
    sitemap: `${clinica.siteUrl}/sitemap.xml`,
  };
}
