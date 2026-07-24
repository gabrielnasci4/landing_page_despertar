import type { Metadata } from "next";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { clinica } from "@/content/clinica";
import { pendente } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre Marco Sadério — Parapsicólogo Clínico",
  description:
    "Conheça Marco Sadério, parapsicólogo clínico à frente da Despertar PΨ. Acolhimento, sigilo e um olhar integrativo para o autoconhecimento e o bem-estar.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  const p = clinica.profissional;
  const temCredenciais = p.credenciais.some((c) => !pendente(c));

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

      {/* Formação e credenciais */}
      <section className="bg-[var(--color-dawn-deep)]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow>Formação &amp; qualificações</Eyebrow>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-[var(--color-twilight)]">
                Formação
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--color-ink)]">
                {pendente(p.formacao)
                  ? "Formação a ser detalhada."
                  : p.formacao}
              </p>
            </div>
            {temCredenciais && (
              <div>
                <h2 className="font-display text-2xl text-[var(--color-twilight)]">
                  Qualificações
                </h2>
                <ul className="mt-3 space-y-2">
                  {p.credenciais
                    .filter((c) => !pendente(c))
                    .map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-[var(--color-ink)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
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
