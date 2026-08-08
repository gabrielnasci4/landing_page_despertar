import Link from "next/link";
import Image from "next/image";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow, DisclaimerNote } from "@/components/ui";
import { TherapyGrid } from "@/components/sections/TherapyGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { FrasesCard } from "@/components/FrasesCard";
import { JsonLd } from "@/components/JsonLd";
import { faq } from "@/content/faq";
import { clinica } from "@/content/clinica";
import { faqJsonLd, personJsonLd } from "@/lib/jsonld";
import { cidadeUf, formatoAtendimento } from "@/lib/site";

export default function Home() {
  const cidade = cidadeUf();
  const formato = formatoAtendimento();

  return (
    <>
      <JsonLd data={faqJsonLd(faq)} />
      <JsonLd data={personJsonLd()} />

      {/* 1 — HERO */}
      <section className="grain relative overflow-hidden">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow>Parapsicologia Clínica &amp; Terapias Integrativas</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
              As respostas que você procura começam{" "}
              <em className="font-display italic text-[var(--color-amethyst)]">
                dentro
              </em>{" "}
              de você.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Na Despertar PΨ, em Joinville, o parapsicólogo clínico Marco
              Sadério oferece um espaço de acolhimento para acessar e
              ressignificar as raízes invisíveis de dores emocionais, dos
              padrões que se repetem e das crenças que limitam, despertando o
              seu potencial interior.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaWhatsapp origem="hero">Agendar uma conversa</CtaWhatsapp>
              <Link
                href="#terapias"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[var(--color-twilight)]/20 px-6 py-3.5 text-[0.95rem] font-semibold text-[var(--color-twilight)] transition-colors hover:border-[var(--color-amethyst)] hover:text-[var(--color-amethyst)]"
              >
                Conhecer as terapias
              </Link>
            </div>
          </div>

          <div className="relative">
            <PhotoSlot
              src="/fotos/marco.jpg"
              alt="Marco Sadério, parapsicólogo clínico, em seu espaço de atendimento"
              etiqueta="Foto do Marco / do espaço"
              priority
              className="aspect-[4/5] w-full rounded-[2rem] shadow-sm"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[var(--color-dawn-line)] bg-white/90 px-5 py-4 shadow-sm backdrop-blur sm:block">
              <p className="font-display text-lg text-[var(--color-twilight)]">
                Marco Sadério
              </p>
              <p className="text-sm text-[var(--color-ink-soft)]">
                {clinica.profissional.titulo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — BARRA DE CREDIBILIDADE */}
      <section className="border-y border-[var(--color-dawn-line)] bg-[var(--color-dawn-deep)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-center text-sm text-[var(--color-ink)] sm:px-8">
          <span className="font-medium">Parapsicólogo clínico</span>
          <span className="text-[var(--color-gold)]" aria-hidden="true">✦</span>
          <span className="font-medium">
            Atendimento {formato || "presencial e online"}
            {cidade ? ` · ${cidade}` : ""}
          </span>
          <span className="text-[var(--color-gold)]" aria-hidden="true">✦</span>
          <span className="font-medium">Cada sessão é única e personalizada</span>
        </div>
      </section>

      {/* 2.5 — CHAMARIZ DA CÁPSULA */}
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8">
        <a
          href="#capsula"
          className="group grid gap-5 rounded-[2rem] border border-[var(--color-dawn-line)] bg-[var(--color-amethyst-tint)]/60 p-5 transition-colors hover:bg-[var(--color-amethyst-tint)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-7 sm:p-6"
        >
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-white sm:h-24 sm:w-24">
            <Image
              src="/fotos/capsula.jpg"
              alt="Cápsulas de Sabedoria da Despertar PΨ"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-amethyst)]">
              Cápsulas de Sabedoria
            </span>
            <h2 className="mt-1 font-display text-2xl text-[var(--color-twilight)] sm:text-[1.7rem]">
              Tire a sua mensagem do dia
            </h2>
            <p className="mt-1 text-[var(--color-ink-soft)]">
              Uma frase escolhida para o seu momento. Leve com você.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[var(--color-amethyst)] px-6 py-3 font-semibold text-white transition-transform group-hover:-translate-y-0.5 sm:self-auto">
            Tirar minha cápsula
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </section>

      {/* 3 — VOCÊ SE RECONHECE AQUI? */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl" data-reveal>
          <Eyebrow>Você se reconhece aqui?</Eyebrow>
          <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            Às vezes, algo trava por dentro, e a explicação não aparece.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
            Muitas vezes, além dos sintomas, existem emoções, crenças, memórias e
            padrões internos que também pedem atenção. A Parapsicologia Clínica
            amplia esse olhar, buscando compreender o que está por trás das
            dores, bloqueios e repetições.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Ansiedade e estresse",
              d: "Uma tensão constante, difícil de desligar, que rouba o seu descanso.",
            },
            {
              t: "Padrões que se repetem",
              d: "As mesmas situações e escolhas retornando na sua vida e nas relações.",
            },
            {
              t: "Medos sem causa aparente",
              d: "Bloqueios e receios que parecem não ter uma origem clara.",
            },
            {
              t: "Sensação de vazio",
              d: "A falta de propósito ou de conexão consigo mesmo, mesmo sem um motivo óbvio.",
            },
          ].map((item) => (
            <div
              key={item.t}
              data-reveal
              className="rounded-2xl border border-[var(--color-dawn-line)] bg-white p-6"
            >
              <h3 className="font-display text-2xl text-[var(--color-twilight)]">
                {item.t}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-ink-soft)]">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 — O QUE É PARAPSICOLOGIA CLÍNICA */}
      <section className="bg-[var(--color-dawn-deep)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div data-reveal>
            <PhotoSlot
              src="/fotos/consultorio.jpg"
              alt="Ambiente acolhedor do consultório da Despertar PΨ"
              etiqueta="Foto do espaço / detalhe"
              className="aspect-[5/4] w-full rounded-[2rem]"
            />
          </div>
          <div data-reveal>
            <Eyebrow>A abordagem</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              O que é a Parapsicologia Clínica
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--color-ink-soft)]">
              A Parapsicologia Clínica é uma abordagem que investiga a mente
              humana em sua totalidade, em suas dimensões conscientes,
              subconscientes e sutis. Por meio de escuta qualificada e práticas
              terapêuticas específicas, ela ajuda a identificar e ressignificar
              crenças, memórias e padrões internos que muitas vezes influenciam o
              bem-estar emocional, os comportamentos e a qualidade de vida. Seu
              diferencial está em olhar além do sintoma, buscando compreender as
              causas mais profundas por trás de sofrimentos que se repetem e
              apoiar um processo de autoconhecimento e transformação.
            </p>
            <Link
              href="/parapsicologia-clinica"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[var(--color-amethyst)] hover:underline"
            >
              Entender a abordagem em detalhe
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <DisclaimerNote className="mt-8" />
          </div>
        </div>
      </section>

      {/* 5 — AS 9 TERAPIAS */}
      <TherapyGrid />

      {/* 6 — QUIZ */}
      <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
        <div
          data-reveal
          className="grain relative overflow-hidden rounded-[2rem] bg-[var(--color-amethyst)] px-7 py-12 text-center text-white sm:px-16 sm:py-16"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <Eyebrow className="justify-center text-white/80">
              Não sabe por onde começar?
            </Eyebrow>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">
              Escolha um teste rápido e comece a se ouvir.
            </h2>
            <p className="mt-4 text-white/85">
              São dois testes leves e reflexivos, de poucos minutos e sem
              diagnóstico. Escolha por onde começar — no fim, uma orientação
              inicial para dar o primeiro passo com o Marco.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/quiz"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[var(--color-amethyst)] transition-transform hover:-translate-y-0.5"
              >
                Caminho de cuidado
              </Link>
              <Link
                href="/autoconhecimento"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Momento interior
              </Link>
            </div>
            <Link
              href="/quizes"
              className="mt-5 inline-block text-sm text-white/75 underline underline-offset-4 transition-colors hover:text-white"
            >
              Ver os dois testes
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — COMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl" data-reveal>
          <Eyebrow>Simples e acolhedor</Eyebrow>
          <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            Como começa o seu processo
          </h2>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Você faz o primeiro contato",
              d: "Chama no WhatsApp, sem compromisso. A gente conversa sobre o que te trouxe até aqui e tira suas dúvidas.",
            },
            {
              n: "02",
              t: "Uma escuta cuidadosa",
              d: "No atendimento, um espaço seguro e sem julgamentos para entender o seu momento e o que faz sentido para você.",
            },
            {
              n: "03",
              t: "Um caminho personalizado",
              d: "A partir da sua necessidade, escolhemos juntos as práticas mais adequadas, no seu ritmo.",
            },
          ].map((p) => (
            <li key={p.n} data-reveal className="relative">
              <span className="font-display text-5xl text-[var(--color-gold)]">
                {p.n}
              </span>
              <h3 className="mt-3 font-display text-2xl text-[var(--color-twilight)]">
                {p.t}
              </h3>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">
                {p.d}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 7.5 — MENSAGEM / CÁPSULA */}
      <section id="capsula" className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <div className="text-center" data-reveal>
          <Eyebrow className="justify-center">Uma mensagem para você</Eyebrow>
          <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl">
            Sua cápsula do dia
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--color-ink-soft)]">
            No consultório, o Marco entrega uma mensagem a cada pessoa. Tire a
            sua e leve com você.
          </p>
        </div>
        <div className="mt-10" data-reveal>
          <FrasesCard />
        </div>
      </section>

      {/* 8 — SOBRE O MARCO */}
      <section className="bg-[var(--color-dawn-deep)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal>
            <PhotoSlot
              src="/fotos/marco-trabalho.jpg"
              alt="Marco Sadério atendendo em seu consultório"
              etiqueta="Retrato do Marco"
              className="aspect-[4/5] w-full rounded-[2rem]"
            />
          </div>
          <div data-reveal>
            <Eyebrow>Quem conduz</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              Marco Sadério
            </h2>
            <p className="mt-2 font-display text-xl italic text-[var(--color-amethyst)]">
              {clinica.profissional.titulo}
            </p>
            <p className="mt-5 leading-relaxed text-[var(--color-ink-soft)]">
              Dedico meu trabalho a ajudar cada pessoa a se conhecer em
              profundidade e a acessar os próprios recursos de transformação. O
              atendimento acontece em um espaço seguro, sigiloso e acolhedor,
              onde cada história é recebida sem julgamentos.
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[var(--color-amethyst)] hover:underline"
            >
              Conhecer a trajetória do Marco
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9 — DEPOIMENTOS */}
      <Testimonials />

      {/* 10 — PULL-QUOTE (momento "noite") */}
      <section className="grain relative overflow-hidden bg-[var(--color-twilight)]">
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <p
            data-reveal
            className="font-display text-3xl italic leading-[1.3] text-[var(--color-dawn)] sm:text-[2.6rem]"
          >
            &ldquo;Já pensou se a resposta para aquilo que mais te trava não está
            fora, mas dentro de você, esperando ser acessada e
            transformada?&rdquo;
          </p>
          <div className="mt-10" data-reveal>
            <CtaWhatsapp origem="pull_quote" variante="light">
              Começar essa conversa
            </CtaWhatsapp>
          </div>
        </div>
      </section>

      {/* 11 — FAQ */}
      <FaqSection itens={faq} />

      {/* 12 — CONTATO */}
      <section id="contato" className="bg-[var(--color-dawn-deep)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>Vamos conversar</Eyebrow>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              Dê o primeiro passo hoje.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--color-ink-soft)]">
              Preencha e o WhatsApp abre com a sua mensagem pronta, ou fale
              direto com o Marco. O acolhimento começa no primeiro contato.
            </p>
            <div className="mt-8 space-y-3 text-[var(--color-ink)]">
              <a
                href={`mailto:${clinica.email}`}
                className="flex items-center gap-3 hover:text-[var(--color-amethyst)]"
              >
                <span className="text-[var(--color-gold)]">✉</span>
                {clinica.email}
              </a>
              <p className="flex items-center gap-3">
                <span className="text-[var(--color-gold)]">☏</span>
                {clinica.telefoneExibicao}
              </p>
            </div>
          </div>
          <div
            data-reveal
            className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-6 sm:p-8"
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
