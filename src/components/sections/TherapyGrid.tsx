import Link from "next/link";
import { terapias } from "@/content/terapias";
import { Eyebrow } from "@/components/ui";

/*
  Grade com as 9 terapias. Cada card usa a cor-tema da terapia
  (do espectro da cromoterapia) e leva para a página própria.
*/
export function TherapyGrid() {
  return (
    <section id="terapias" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl" data-reveal>
        <Eyebrow>Nove caminhos</Eyebrow>
        <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
          Cada pessoa pede um caminho diferente.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
          As sessões são personalizadas: a técnica é escolhida conforme a sua
          necessidade e o momento que você vive. Conheça cada uma.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-dawn-line)] bg-[var(--color-dawn-line)] sm:grid-cols-2 lg:grid-cols-3">
        {terapias.map((t, i) => (
          <Link
            key={t.slug}
            href={`/terapias/${t.slug}`}
            data-reveal
            className="group relative flex flex-col gap-3 bg-[var(--color-dawn)] p-7 transition-colors hover:bg-[var(--color-dawn-deep)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: t.cor }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                {t.corSentido}
              </span>
            </div>
            <h3 className="font-display text-xl text-[var(--color-twilight)]">
              {t.nome}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {t.resumo}
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[var(--color-amethyst)]">
              Conhecer
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
