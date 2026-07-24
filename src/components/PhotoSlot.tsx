import Image from "next/image";

/*
  Espaço reservado para uma foto.
  Enquanto a foto real não é colocada, mostra um bloco elegante
  com uma etiqueta indicando qual imagem vai ali.

  COMO TROCAR POR UMA FOTO DE VERDADE:
  1. Coloque o arquivo da foto na pasta "public/fotos/".
  2. Aqui na página, informe o caminho em "src", por exemplo:
     src="/fotos/marco.jpg"
  Aí o bloco cinza some e a foto aparece no lugar.
*/
export function PhotoSlot({
  src,
  alt,
  etiqueta,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  etiqueta?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-amethyst-tint)] via-[var(--color-dawn-deep)] to-[var(--color-dawn)] ${className}`}
      aria-label={alt}
      role="img"
    >
      <div className="grain absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[var(--color-amethyst)]/50" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
          <path d="M4 17l4.5-4.5 3 3L16 11l4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-amethyst)]/70">
          {etiqueta || "Foto"}
        </span>
      </div>
    </div>
  );
}
