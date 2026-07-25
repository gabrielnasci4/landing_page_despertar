import { clinica } from "@/content/clinica";

/*
  Ícones das redes sociais. Mostra apenas as redes com link
  preenchido em clinica.ts.

  Dois estilos:
  - colorido = true  -> "selo" da marca: círculo na cor da rede com o
    símbolo branco dentro (Instagram com degradê). É o visual oficial,
    usado no topo e no menu do celular.
  - colorido = false -> círculo com contorno e ícone monocromático
    (usado no rodapé, sobre fundo escuro).
*/

const NOMES: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
};

// Fundo de cada "selo" colorido.
const FUNDO: Record<string, string> = {
  instagram:
    "linear-gradient(45deg,#feda75 0%,#fa7e1e 25%,#d62976 50%,#962fbf 75%,#4f5bd5 100%)",
  facebook: "#1877F2",
  youtube: "#FF0000",
  tiktok: "#111111",
};

// Símbolo branco de cada rede (para o estilo "selo").
const GLIFO: Record<string, React.ReactNode> = {
  instagram: (
    <path d="M12 7.6a4.4 4.4 0 104.4 4.4A4.4 4.4 0 0012 7.6zm0 7.26A2.86 2.86 0 1114.86 12 2.86 2.86 0 0112 14.86zm5.6-7.44a1.03 1.03 0 11-1.02-1.03 1.03 1.03 0 011.02 1.03zM12 5.24c1.9 0 2.13.01 2.88.05.7.03 1.08.15 1.33.25.33.13.57.28.82.53s.4.49.53.82c.1.25.22.63.25 1.33.04.75.05.98.05 2.88s-.01 2.13-.05 2.88c-.03.7-.15 1.08-.25 1.33-.13.33-.28.57-.53.82s-.49.4-.82.53c-.25.1-.63.22-1.33.25-.75.04-.98.05-2.88.05s-2.13-.01-2.88-.05c-.7-.03-1.08-.15-1.33-.25a2.2 2.2 0 01-.82-.53 2.2 2.2 0 01-.53-.82c-.1-.25-.22-.63-.25-1.33-.04-.75-.05-.98-.05-2.88s.01-2.13.05-2.88c.03-.7.15-1.08.25-1.33.13-.33.28-.57.53-.82s.49-.4.82-.53c.25-.1.63-.22 1.33-.25.75-.04.98-.05 2.88-.05M12 4c-1.93 0-2.17.01-2.93.04-.76.04-1.28.16-1.73.33-.47.19-.87.43-1.27.83s-.64.8-.83 1.27c-.17.45-.29.97-.33 1.73C4.01 9.83 4 10.07 4 12s.01 2.17.04 2.93c.04.76.16 1.28.33 1.73.19.47.43.87.83 1.27s.8.64 1.27.83c.45.17.97.29 1.73.33.76.03 1 .04 2.93.04s2.17-.01 2.93-.04c.76-.04 1.28-.16 1.73-.33.47-.19.87-.43 1.27-.83s.64-.8.83-1.27c.17-.45.29-.97.33-1.73.03-.76.04-1 .04-2.93s-.01-2.17-.04-2.93c-.04-.76-.16-1.28-.33-1.73a3.4 3.4 0 00-.83-1.27 3.4 3.4 0 00-1.27-.83c-.45-.17-.97-.29-1.73-.33C14.17 4.01 13.93 4 12 4z" />
  ),
  facebook: (
    <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13c-.3-.04-1.3-.13-2.48-.13-2.45 0-4.13 1.5-4.13 4.25v2.35H7.4v3.2h2.78V21h3.32z" />
  ),
  youtube: <path d="M10 8.6v6.8L16 12z" />,
  tiktok: (
    <path d="M16.6 5.82a4.28 4.28 0 01-1.06-2.82h-3.3v13.15a2.6 2.6 0 01-2.6 2.6 2.6 2.6 0 01-2.6-2.6 2.6 2.6 0 013.44-2.46v-3.36a5.94 5.94 0 00-6.79 5.82A5.94 5.94 0 009.64 22a5.94 5.94 0 005.94-5.94V9.4a7.56 7.56 0 004.42 1.42V7.5a4.28 4.28 0 01-3.4-1.68z" />
  ),
};

// Ícone monocromático (rodapé) — logos completos, uma cor só.
const ICONE_MONO: Record<string, React.ReactNode> = {
  instagram: (
    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1018.75 12 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1116.38 12 4.38 4.38 0 0112 16.38zm6.96-11.4a1.58 1.58 0 11-1.58-1.57 1.58 1.58 0 011.58 1.57z" />
  ),
  facebook: (
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
  ),
  youtube: (
    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  ),
  tiktok: GLIFO.tiktok,
};

export function SocialLinks({
  tom = "escuro",
  tamanho = 34,
  colorido = false,
  className = "",
}: {
  tom?: "claro" | "escuro";
  tamanho?: number; // diâmetro do selo (colorido) ou do círculo (mono)
  colorido?: boolean;
  className?: string;
}) {
  const redes = Object.entries(clinica.redes).filter(([, url]) => url);
  if (redes.length === 0) return null;

  if (colorido) {
    const glifo = Math.round(tamanho * 0.6);
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {redes.map(([rede, url]) => (
          <a
            key={rede}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={NOMES[rede] ?? rede}
            className="flex items-center justify-center rounded-full text-white shadow-sm transition-transform hover:-translate-y-0.5"
            style={{ width: tamanho, height: tamanho, background: FUNDO[rede] }}
          >
            <svg width={glifo} height={glifo} viewBox="0 0 24 24" fill="white" aria-hidden="true">
              {GLIFO[rede]}
            </svg>
          </a>
        ))}
      </div>
    );
  }

  // Estilo monocromático com contorno (rodapé).
  const estilo =
    tom === "claro"
      ? "border-white/15 text-[var(--color-dawn)]/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
      : "border-[var(--color-dawn-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {redes.map(([rede, url]) => (
        <a
          key={rede}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={NOMES[rede] ?? rede}
          className={`flex items-center justify-center rounded-full border transition-colors ${estilo}`}
          style={{ width: tamanho + 16, height: tamanho + 16 }}
        >
          <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {ICONE_MONO[rede]}
          </svg>
        </a>
      ))}
    </div>
  );
}
