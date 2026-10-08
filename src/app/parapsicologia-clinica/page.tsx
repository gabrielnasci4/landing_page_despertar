import Link from "next/link";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Eyebrow, DisclaimerNote } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { metadadosPagina } from "@/lib/seo";
import { enderecoLinha, pendente } from "@/lib/site";
import { terapias } from "@/content/terapias";
import { clinica } from "@/content/clinica";

export const metadata = metadadosPagina({
  tituloCompleto: "Parapsicólogo Clínico em Joinville | Marco Sadério",
  descricao:
    "Marco Sadério, parapsicólogo clínico em Joinville. Atendimento presencial e online para outras cidades, com acolhimento e práticas integrativas. Agende.",
  caminho: "/parapsicologia-clinica",
});

const linkTexto =
  "font-semibold text-[var(--color-amethyst)] underline underline-offset-4";

export default function ParapsicologiaPage() {
  const horarios = clinica.horarios.filter((h) => !pendente(h.horario));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "Parapsicólogo Clínico", url: "/parapsicologia-clinica" },
        ])}
      />

      <section className="grain relative overflow-hidden bg-[var(--color-amethyst-tint)]">
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <Eyebrow className="justify-center">Parapsicologia Clínica</Eyebrow>
          <h1 className="mt-5 text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-6xl">
            Parapsicólogo Clínico em {clinica.endereco.cidade}
          </h1>
          <p className="mt-4 font-display text-2xl italic text-[var(--color-amethyst)] sm:text-3xl">
            Compreender as raízes invisíveis do que sentimos.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {clinica.profissional.nome} é parapsicólogo clínico e conduz os
            atendimentos da {clinica.nomeExtenso}: presencial em{" "}
            {clinica.endereco.cidade} e online para outras cidades.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaWhatsapp origem="abordagem_topo" variante="whatsapp">
              Agendar pelo WhatsApp
            </CtaWhatsapp>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        {/* O que é */}
        <h2 className="text-2xl text-[var(--color-twilight)] sm:text-3xl">
          O que é Parapsicologia Clínica
        </h2>
        <div className="mt-5 space-y-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
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
          <p>
            Enquanto a parapsicologia é o campo de estudo, a Parapsicologia
            Clínica é a sua aplicação no cuidado com as pessoas: o parapsicólogo
            clínico acolhe, escuta e conduz práticas integrativas voltadas ao
            autoconhecimento e ao bem-estar.
          </p>
        </div>

        <blockquote className="my-12 border-l-2 border-[var(--color-amethyst)] pl-6 font-display text-2xl italic leading-snug text-[var(--color-twilight)] sm:text-3xl">
          Mais do que aliviar sintomas, a proposta é compreender e transformar as
          causas invisíveis que alimentam dores e crenças limitantes.
        </blockquote>

        {/* Como funciona */}
        <h2 id="como-funciona" className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Como funciona o atendimento
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          O primeiro passo é uma conversa pelo WhatsApp, sem compromisso, para
          entender o que te trouxe até aqui. No atendimento, a partir de uma
          escuta cuidadosa, cada sessão é personalizada: a prática é escolhida de
          acordo com a sua necessidade e com o momento que você vive, sempre no
          seu ritmo.
        </p>
        <div className="mt-8 rounded-[2rem] bg-[var(--color-dawn-deep)] p-8">
          <h3 className="text-xl text-[var(--color-twilight)] sm:text-2xl">
            O fio condutor: o diálogo terapêutico
          </h3>
          <p className="mt-4 leading-relaxed text-[var(--color-ink)]">
            Mais do que uma conversa, o diálogo terapêutico é um processo de
            escuta ativa, acolhimento e direcionamento. Em um espaço seguro e sem
            julgamentos, o cliente é conduzido por perguntas abertas que ajudam a
            trazer à tona questões profundas e a enxergar novos caminhos. Ele não
            substitui as demais práticas: é o fio que dá sentido a tudo,
            ajudando a integrar cada experiência.
          </p>
        </div>

        {/* Para quem */}
        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Para quem pode fazer sentido
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          A Parapsicologia Clínica pode fazer sentido para quem busca compreender
          e acolher:
        </p>
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

        {/* Abordagens */}
        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Abordagens que podem ser integradas
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          Conforme o momento de cada pessoa, o trabalho pode reunir recursos como{" "}
          <Link href="/terapias/hipnose-clinica" className={linkTexto}>hipnose clínica (hipnoterapia)</Link>,{" "}
          <Link href="/terapias/regressao-de-memorias" className={linkTexto}>regressão de memórias (terapia regressiva)</Link>,{" "}
          <Link href="/terapias/reprogramacao-mental" className={linkTexto}>reprogramação mental</Link>,{" "}
          <Link href="/terapias/pnl" className={linkTexto}>PNL</Link>,{" "}
          <Link href="/terapias/reiki" className={linkTexto}>Reiki</Link>, relaxamento
          guiado, cromoterapia e o diálogo terapêutico.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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

        {/* Sobre o Marco */}
        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Sobre {clinica.profissional.nome}
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          {clinica.profissional.nome} é parapsicólogo clínico em{" "}
          {clinica.endereco.cidade} e conduz os atendimentos da{" "}
          {clinica.nomeExtenso}. Tem pós-graduação e qualificação profissional em
          Parapsicologia, além de formações em PNL e Reiki. Seu compromisso é
          oferecer um espaço seguro, sigiloso e sem julgamentos, onde cada
          história é recebida com respeito.
        </p>
        <Link
          href="/sobre"
          className="mt-5 inline-flex items-center gap-1.5 font-semibold text-[var(--color-amethyst)] hover:underline"
        >
          Conheça a trajetória e a formação do Marco
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Onde */}
        <h2 className="mt-14 text-2xl text-[var(--color-twilight)] sm:text-3xl">
          Presencial em {clinica.endereco.cidade} e online para outras cidades
        </h2>
        <p className="mt-5 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
          O consultório fica na {enderecoLinha()}.
          {clinica.atendeOnline &&
            ` Para quem mora em outra cidade ou prefere não se deslocar, também há atendimento online, por ${clinica.plataformaOnline}.`}
        </p>
        {horarios.length > 0 && (
          <p className="mt-3 text-[1.08rem] leading-relaxed text-[var(--color-ink)]">
            Horário: {horarios.map((h) => `${h.dias}, ${h.horario}`).join(" · ")}.
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {clinica.endereco.linkMapa && !pendente(clinica.endereco.linkMapa) && (
            <a href={clinica.endereco.linkMapa} target="_blank" rel="noopener noreferrer" className={linkTexto}>
              Ver como chegar no mapa
            </a>
          )}
          <Link href="/contato" className={linkTexto}>
            Fazer o tour virtual pela clínica
          </Link>
        </div>

        <DisclaimerNote className="mt-12" />

        {/* CTA final */}
        <div className="mt-12 rounded-[2rem] border border-[var(--color-dawn-line)] bg-[var(--color-dawn-deep)] p-8 text-center">
          <h2 className="text-2xl text-[var(--color-twilight)] sm:text-3xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--color-ink-soft)]">
            Tire suas dúvidas sobre a Parapsicologia Clínica diretamente com o
            Marco, sem compromisso.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaWhatsapp origem="abordagem_fim" variante="whatsapp">
              Agendar pelo WhatsApp
            </CtaWhatsapp>
          </div>
        </div>
      </article>
    </>
  );
}
