import type { MetadataRoute } from "next";
import { clinica } from "@/content/clinica";

// Gera um robots.txt fixo no build (site estático).
export const dynamic = "force-static";

/*
  Instruções para os buscadores: pode ler tudo e aponta o sitemap.
  A página /obrigado NÃO é bloqueada aqui de propósito: ela tem
  "noindex" e o Google precisa conseguir abri-la para ver esse aviso.
  Ela também fica fora do sitemap.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinica.siteUrl}/sitemap.xml`,
  };
}
