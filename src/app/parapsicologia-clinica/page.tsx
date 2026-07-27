import type { Metadata } from "next";
import Link from "next/link";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Eyebrow, DisclaimerNote } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { terapias } from "@/content/terapias";

export const metadata: Metadata = {
  title: "O que é Parapsicologia Clínica",
  description:
    "Entenda a Parapsicologia Clínica: uma abordagem integrativa que busca as causas invisíveis de dores emocionais e padrões repetitivos, com acolhimento e diálogo terapêutico.",
  alternates: { canonical: "/parapsicologia-clinica" },
};

export default function ParapsicologiaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "A abordagem", url: "/parapsicologia-clinica" },
        ])}
      />

      <section className="grain relative overflow-hidden bg-[var(--color-amethyst-tint)]">
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24 text-center">
          <Eyebrow className="justify-center">A abordagem</Eyebrow>
          <h1 className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-6xl">
            Compreender as raízes invisíveis do que sentimos.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            A Parapsicologia Clínica integra estudos da mente e práticas
            terapêuticas para ampliar o olhar sobre o sofrimento e revelar os
            recursos de transformação que cada pessoa carrega dentro de si.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          <p>
            A Parapsicologia Clínica é uma abordagem que integra estudos da
            mente e práticas terapêuticas para compreender como pensamentos,
            emoções, crenças e energias sutis influenciam a nossa vida. Ela busca
            reconhecer as raízes invisíveis dos sofrimentos e dos padrões que se
            repetem, ajudando a pessoa a se conhecer em profundidade e a
            despertar o próprio potencial interior.
          </p>
          <p>
            Muitas vezes, além dos sintomas, existem emoções, crenças, memórias e
            padrões internos que também pedem atenção. A Parapsicologia Clínica
            amplia esse olhar, buscando compreender o que está por trás das
            dores, bloqueios e repetições.
          </p>
        </div>

        <blockquote className="my-12 border-l-2 border-[var(--color-amethyst)] pl-6 font-display text-2xl italic leading-snug text-[var(--color-twilight)] sm:text-3xl">
          Mais do que aliviar sintomas, a proposta é compreender e transformar as
          causas invisíveis que alimentam dores e crenças limitantes.
        </blockquote>

        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          O que pode ser acolhido nesse processo
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Ansiedade, estresse e apoio emocional",
            "Lembranças dolorosas que ainda influenciam o presente",
            "Crenças que limitam a autoestima e a realização",
            "Padrões que se repetem em relacionamentos",
            "Sentimento de vazio ou falta de propósito",
            "Fortalecimento da clareza e do equilíbrio emocional",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[var(--color-dawn-line)] bg-white p-4 text-[0.98rem]"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-amethyst)]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Como funciona na prática
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          Cada sessão é personalizada: a prática é escolhida de acordo com a
          necessidade do cliente e o momento que ele vive. O trabalho pode reunir
          recursos como hipnose, regressão de memórias, PNL, reprogramação
          mental, relaxamento guiado, Reiki, cromoterapia e o diálogo
          terapêutico.
        </p>

        {/* Diálogo terapêutico */}
        <div className="mt-12 rounded-[2rem] bg-[var(--color-dawn-deep)] p-8">
          <h2 className="text-2xl text-[var(--color-twilight)] sm:text-3xl">
            O fio condutor: o diálogo terapêutico
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-ink)]">
            Mais do que uma conversa, o diálogo terapêutico é um processo de
            escuta ativa, acolhimento e direcionamento. Em um espaço seguro e sem
            julgamentos, o cliente é conduzido por perguntas abertas que ajudam a
            trazer à tona questões profundas e a enxergar novos caminhos. Ele não
            substitui as demais práticas: é o fio que dá sentido a tudo,
            ajudando a integrar cada experiência.
          </p>
        </div>

        <DisclaimerNote className="mt-12" />
      </article>

      {/* Terapias */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <hr className="horizon mb-12" />
        <div className="text-center">
          <Eyebrow className="justify-center">Os recursos do processo</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl">As terapias que integram o caminho</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {terapias.map((t) => (
            <Link
              key={t.slug}
              href={`/terapias/${t.slug}`}
              className="rounded-full border border-[var(--color-dawn-line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]"
            >
              {t.nome}
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CtaWhatsapp origem="abordagem_fim">Agendar uma conversa</CtaWhatsapp>
        </div>
      </section>
    </>
  );
}
