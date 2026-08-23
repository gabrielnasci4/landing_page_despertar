import type { NextConfig } from "next";

/*
  Site 100% ESTÁTICO (output: "export").
  Gera arquivos prontos na pasta "out/", que são hospedados de graça
  na Cloudflare Pages — sem servidor, sem limites de tráfego.

  Como não há servidor, as imagens do next/image usam "unoptimized"
  (são servidas direto, já otimizadas na origem em public/).
*/
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
