import { clinica } from "@/content/clinica";

export function CtaTour360({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <a
      href={clinica.tourVirtual}
      target="_blank"
      rel="noopener noreferrer"
      title={clinica.tourVirtualDescricao}
      className={`inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[var(--color-amethyst)] bg-white px-6 py-3.5 text-center text-[0.95rem] font-semibold text-[var(--color-amethyst-deep)] transition-colors hover:bg-[var(--color-amethyst-tint)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-amethyst)] ${fullWidth ? "" : "sm:w-auto"}`}
    >
      {clinica.tourVirtualRotulo}
    </a>
  );
}
