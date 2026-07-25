import { clinica } from "@/content/clinica";

/*
  Ícones das redes sociais. Mostra apenas as redes que têm link
  preenchido em clinica.ts. Usado no topo (cabeçalho) e no rodapé.
  - tom "claro": para fundos escuros (rodapé)
  - tom "escuro": para fundos claros (cabeçalho)
*/

const ICONES: Record<string, React.ReactNode> = {
  instagram: (
    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1018.75 12 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1116.38 12 4.38 4.38 0 0112 16.38zm6.96-11.4a1.58 1.58 0 11-1.58-1.57 1.58 1.58 0 011.58 1.57z" />
  ),
  facebook: (
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
  ),
  youtube: (
    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  ),
  tiktok: (
    <path d="M16.6 5.82a4.28 4.28 0 01-1.06-2.82h-3.3v13.15a2.6 2.6 0 01-2.6 2.6 2.6 2.6 0 01-2.6-2.6 2.6 2.6 0 013.44-2.46v-3.36a5.94 5.94 0 00-6.79 5.82A5.94 5.94 0 009.64 22a5.94 5.94 0 005.94-5.94V9.4a7.56 7.56 0 004.42 1.42V7.5a4.28 4.28 0 01-3.4-1.68z" />
  ),
};

const NOMES: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
};

export function SocialLinks({
  tom = "escuro",
  tamanho = 18,
  borda = true,
  className = "",
}: {
  tom?: "claro" | "escuro";
  tamanho?: number;
  borda?: boolean; // false = só o ícone, sem o círculo (para a barra do topo)
  className?: string;
}) {
  const redes = Object.entries(clinica.redes).filter(([, url]) => url);

  if (redes.length === 0) return null;

  const comBorda =
    tom === "claro"
      ? "border border-white/15 text-[var(--color-dawn)]/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
      : "border border-[var(--color-dawn-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]";

  const semBorda =
    tom === "claro"
      ? "text-[var(--color-dawn)]/70 hover:text-white"
      : "text-[var(--color-ink-soft)] hover:text-[var(--color-amethyst)]";

  const lado = tamanho + 22;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {redes.map(([rede, url]) => (
        <a
          key={rede}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={NOMES[rede] ?? rede}
          className={`flex items-center justify-center rounded-full transition-colors ${borda ? comBorda : `${semBorda} p-1`}`}
          style={borda ? { width: lado, height: lado } : undefined}
        >
          <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {ICONES[rede]}
          </svg>
        </a>
      ))}
    </div>
  );
}
