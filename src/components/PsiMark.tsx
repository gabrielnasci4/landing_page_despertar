/*
  Marca tipográfica do Ψ (psi) — símbolo da clínica.
  É um SVG (desenho vetorial), então fica nítido em qualquer
  tamanho, do celular à placa.

  ⚠️ Quando o logo oficial do Marco chegar, podemos substituir
  este desenho pelo arquivo dele. Por enquanto, esta marca segura
  o lugar com elegância.
*/
export function PsiMark({
  className = "",
  title = "Despertar PΨ",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      {/* círculo do amanhecer */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.35"
      />
      {/* símbolo Ψ */}
      <path
        d="M24 9v30M24 33c-6 0-10-4-10-11V15M24 33c6 0 10-4 10-11V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
