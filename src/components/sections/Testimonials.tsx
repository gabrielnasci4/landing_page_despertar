import { depoimentosPublicados } from "@/content/depoimentos";
import { funcionalidades } from "@/content/clinica";
import { Eyebrow } from "@/components/ui";

/*
  Depoimentos de clientes. Só aparece se houver depoimentos
  autorizados (veja depoimentos.ts) e se a funcionalidade
  estiver ligada em clinica.ts.
*/
export function Testimonials() {
  if (!funcionalidades.depoimentos || depoimentosPublicados.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl" data-reveal>
        <Eyebrow>Quem já viveu</Eyebrow>
        <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
          Histórias de quem buscou acolhimento.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {depoimentosPublicados.map((d, i) => (
          <figure
            key={i}
            data-reveal
            className="flex flex-col rounded-2xl border border-[var(--color-dawn-line)] bg-white p-7"
          >
            <span className="font-display text-4xl leading-none text-[var(--color-gold)]" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 text-[1.02rem] leading-relaxed text-[var(--color-ink)]">
              {d.texto}
            </blockquote>
            <figcaption className="mt-5 border-t border-[var(--color-dawn-line)] pt-4 text-sm">
              <span className="font-semibold text-[var(--color-twilight)]">
                {d.nome}
              </span>
              {(d.terapia || d.cidade) && (
                <span className="block text-[var(--color-ink-soft)]">
                  {[d.terapia, d.cidade].filter(Boolean).join(" · ")}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
