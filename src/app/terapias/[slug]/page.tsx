import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { terapias, getTerapia } from "@/content/terapias";
import { clinica } from "@/content/clinica";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow, DisclaimerNote } from "@/components/ui";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { mensagemTerapia } from "@/lib/whatsapp";
import { cidadeUf } from "@/lib/site";

// Gera as 9 páginas de terapia no momento do build (rápidas e boas para SEO).
export function generateStaticParams() {
  return terapias.map((t) => ({ slug: t.slug }));
}

// Título e descrição próprios de cada terapia (importante para o Google).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTerapia(slug);
  if (!t) return {};
  const cidade = cidadeUf();
  return {
    // "absolute" evita o modelo do layout duplicar "| Despertar PΨ"
    // (o metaTitle da terapia já traz a marca uma vez).
    title: { absolute: t.metaTitle.replace("[cidade]", cidade || "Brasil") },
    description: t.metaDescription,
    alternates: { canonical: `/terapias/${t.slug}` },
    openGraph: {
      title: `${t.nome} | ${clinica.nome}`,
      description: t.metaDescription,
    },
  };
}

export default async function TerapiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTerapia(slug);
  if (!t) notFound();

  const cidade = cidadeUf();
  const outras = terapias.filter((x) => x.slug !== t.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(t.slug)} />
      {t.faq && t.faq.length > 0 && <JsonLd data={faqJsonLd(t.faq)} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "Terapias", url: "/#terapias" },
          { nome: t.nome, url: `/terapias/${t.slug}` },
        ])}
      />

      {/* Cabeçalho da terapia, tingido com a cor-tema */}
      <section
        className="grain relative overflow-hidden"
        style={{ backgroundColor: `${t.cor}14` }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-14 pt-10 sm:px-8 sm:pt-14">
          <nav className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
            <Link href="/" className="hover:text-[var(--color-amethyst)]">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#terapias" className="hover:text-[var(--color-amethyst)]">Terapias</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--color-ink)]">{t.nome}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white"
                style={{ backgroundColor: t.cor }}
              >
                {t.eyebrow}
              </span>
              <h1 className="mt-5 text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-6xl">
                {t.nome}
              </h1>
              {cidade && (
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                  em {cidade} · presencial e online
                </p>
              )}
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
                {t.resumo}
              </p>
              <div className="mt-8">
                <CtaWhatsapp origem={`terapia_${t.slug}_topo`} mensagem={mensagemTerapia(t.nome)}>
                  Quero saber mais
                </CtaWhatsapp>
              </div>
            </div>
            <PhotoSlot
              src={`/fotos/terapia-${t.slug}.jpg`}
              alt={`Atendimento de ${t.nome} com Marco Sadério`}
              etiqueta={`Foto — ${t.nome}`}
              priority
              posicao="top"
              className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] lg:max-w-none"
            />
          </div>
        </div>
      </section>

      {/* Corpo */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          {t.oQueE.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Pergunta reflexiva (assinatura da marca) */}
        <blockquote
          className="my-12 border-l-2 pl-6 font-display text-2xl italic leading-snug text-[var(--color-twilight)] sm:text-3xl"
          style={{ borderColor: t.cor }}
        >
          {t.pergunta}
        </blockquote>

        {/* Pode apoiar em */}
        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Como esta prática pode apoiar você
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {t.apoia.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[var(--color-dawn-line)] bg-white p-4 text-[0.98rem] text-[var(--color-ink)]"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: t.cor }}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Como funciona */}
        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Como acontece na prática
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          {t.comoFunciona}
        </p>

        <DisclaimerNote className="mt-12" />

        {/* CTA */}
        <div className="mt-12 rounded-[2rem] border border-[var(--color-dawn-line)] bg-[var(--color-dawn-deep)] p-8 text-center">
          <h2 className="text-2xl text-[var(--color-twilight)] sm:text-3xl">
            Ficou com vontade de experimentar?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--color-ink-soft)]">
            Converse com o Marco pelo WhatsApp{cidade ? `, com atendimento em ${cidade} e online` : ""}. Sem compromisso.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaWhatsapp origem={`terapia_${t.slug}_fim`} mensagem={mensagemTerapia(t.nome)}>
              Falar sobre {t.nome}
            </CtaWhatsapp>
          </div>
        </div>
      </article>

      {/* FAQ específico, se houver */}
      {t.faq && t.faq.length > 0 && (
        <FaqSection itens={t.faq} titulo={`Dúvidas sobre ${t.nome}`} />
      )}

      {/* Outras terapias */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <hr className="horizon mb-12" />
        <Eyebrow>Continue explorando</Eyebrow>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {outras.map((o) => (
            <Link
              key={o.slug}
              href={`/terapias/${o.slug}`}
              className="group rounded-2xl border border-[var(--color-dawn-line)] bg-white p-6 transition-colors hover:bg-[var(--color-dawn-deep)]"
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: o.cor }}
                aria-hidden="true"
              />
              <h3 className="mt-3 font-display text-xl text-[var(--color-twilight)]">
                {o.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {o.resumo}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
