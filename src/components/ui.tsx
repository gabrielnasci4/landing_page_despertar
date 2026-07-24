import { clinica } from "@/content/clinica";

/* Rótulo pequeno em maiúsculas acima dos títulos (o "eyebrow"). */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amethyst)] ${className}`}
    >
      <span className="h-px w-6 bg-[var(--color-gold)]" aria-hidden="true" />
      {children}
    </span>
  );
}

/* Aviso legal curto, com aparência delicada (não escondido). */
export function DisclaimerNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`rounded-xl border border-[var(--color-dawn-line)] bg-[var(--color-amethyst-tint)]/50 px-4 py-3 text-xs leading-relaxed text-[var(--color-ink-soft)] ${className}`}
    >
      {clinica.disclaimer}
    </p>
  );
}
