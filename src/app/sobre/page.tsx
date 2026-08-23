import type { Metadata } from "next";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { clinica } from "@/content/clinica";
import { formacao } from "@/content/formacao";

export const metadata: Metadata = {
  title: "Sobre Marco Sadério, Parapsicólogo Clínico",
  description:
    "Conheça Marco Sadério, parapsicólogo clínico à frente da Despertar PΨ. Acolhimento, sigilo e um olhar integrativo para o autoconhecimento e o bem-estar.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  const p = clinica.profissional;

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "Sobre", url: "/sobre" },
        ])}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative" data-reveal>
          <PhotoSlot
            src="/fotos/marco.jpg"
            alt="Retrato de Marco Sadério, parapsicólogo clínico"
            etiqueta="Retrato do Marco"
            priority
            className="aspect-[4/5] w-full rounded-[2rem] shadow-sm"
          />
        </div>
        <div data-reveal>
          <Eyebrow>Quem conduz o seu processo</Eyebrow>
          <h1 className="mt-5 text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-6xl">
            {p.nome}
          </h1>
          <p className="mt-3 font-display text-xl italic text-[var(--color-amethyst)]">
            {p.titulo}
          </p>

          <div className="mt-6 space-y-5 text-[1.06rem] leading-relaxed text-[var(--color-ink)]">
            {/*
              ⚠️ TEXTO PROVISÓRIO — substitua pela história real do Marco.
              A história pessoal (por que escolheu a parapsicologia) é o
              que mais conecta com quem lê. Veja COMO-EDITAR.md.
            */}
            <p>
              Sou {p.nome}, {p.titulo.toLowerCase()}, e dedico o meu trabalho a
              acompanhar pessoas em processos de autoconhecimento, equilíbrio
              emocional e bem-estar. Acredito que cada um de nós carrega, dentro
              de si, os recursos para compreender e ressignificar aquilo que nos
              trava.
            </p>
            <p>
              Meu compromisso é oferecer um espaço seguro, sigiloso e sem
              julgamentos, onde cada história é recebida com respeito. A partir de
              uma escuta cuidadosa, escolhemos juntos as práticas que fazem mais
              sentido para o seu momento.
            </p>
          </div>

          <div className="mt-8">
            <CtaWhatsapp origem="sobre">Conversar com o Marco</CtaWhatsapp>
          </div>
        </div>
      </section>

      {/* Formação e certificações */}
      <section className="mx-auto max-w-6xl px-5 pt-4 sm:px-8">
        <div
          className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-[var(--color-dawn-deep)] p-7 sm:p-12"
          data-reveal
        >
          <Eyebrow>Formação e certificações</Eyebrow>
          <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl">
            Estudo contínuo para cuidar com responsabilidade.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {formacao.map((c) => (
              <li
                key={c.curso}
                className="flex gap-4 rounded-2xl border border-[var(--color-dawn-line)] bg-white p-5"
              >
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-amethyst)]"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-lg leading-snug text-[var(--color-twilight)]">
                    {c.curso}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                    {c.instituicao}
                  </p>
                  {(c.cargaHoraria || c.ano) && (
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                      {[c.cargaHoraria, c.ano].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Valores */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              t: "Acolhimento",
              d: "Um espaço sem julgamentos, onde você pode se expressar com liberdade e segurança.",
            },
            {
              t: "Sigilo",
              d: "Tudo o que é compartilhado é tratado com respeito e confidencialidade.",
            },
            {
              t: "Cada um no seu ritmo",
              d: "Nada é forçado. O processo respeita o seu tempo e a sua história.",
            },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-[var(--color-dawn-line)] bg-white p-7">
              <h3 className="font-display text-xl text-[var(--color-twilight)]">{v.t}</h3>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
