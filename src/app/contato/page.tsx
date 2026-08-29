import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { Eyebrow } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { clinica } from "@/content/clinica";
import { temEndereco, enderecoLinha, pendente } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato & Agendamento",
  description:
    "Agende sua sessão na Despertar PΨ com Marco Sadério. Fale pelo WhatsApp ou preencha o formulário. Atendimento presencial e online.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const horariosValidos = clinica.horarios.filter((h) => !pendente(h.horario));
  const e = clinica.endereco;
  // Endereço do tour 360° (Street View do Google) montado a partir das
  // coordenadas da clínica. O "137.35" é só o ângulo inicial da câmera.
  const tourEmbed =
    e.latitude && e.longitude
      ? `https://www.google.com/maps/embed?pb=!6m7!1m6!2m2!1d${e.latitude}!2d${e.longitude}!3f137.35!4f-0!5f1`
      : "";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { nome: "Início", url: "/" },
          { nome: "Contato", url: "/contato" },
        ])}
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <Eyebrow>Vamos conversar</Eyebrow>
          <h1 className="mt-5 text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-6xl">
            Dê o primeiro passo hoje.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
            A forma mais rápida é o WhatsApp. Se preferir, preencha o formulário
            e a conversa abre com a sua mensagem já pronta.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Informações */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] bg-[var(--color-twilight)] p-8 text-[var(--color-dawn)]">
              <h2 className="font-display text-2xl text-white">Fale direto</h2>
              <p className="mt-2 text-[var(--color-dawn)]/70">
                Atendimento acolhedor, sem compromisso.
              </p>
              <div className="mt-6">
                <CtaWhatsapp origem="contato_pagina" variante="light">
                  Chamar no WhatsApp
                </CtaWhatsapp>
              </div>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-[var(--color-gold)]">WhatsApp / Telefone</dt>
                  <dd className="mt-0.5 text-[var(--color-dawn)]/85">{clinica.telefoneExibicao}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-gold)]">E-mail</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${clinica.email}`} className="text-[var(--color-dawn)]/85 hover:text-white">
                      {clinica.email}
                    </a>
                  </dd>
                </div>
                {temEndereco() && (
                  <div>
                    <dt className="text-[var(--color-gold)]">Endereço</dt>
                    <dd className="mt-0.5 text-[var(--color-dawn)]/85">{enderecoLinha()}</dd>
                  </div>
                )}
                {horariosValidos.length > 0 && (
                  <div>
                    <dt className="text-[var(--color-gold)]">Horários</dt>
                    <dd className="mt-0.5 space-y-0.5 text-[var(--color-dawn)]/85">
                      {horariosValidos.map((h) => (
                        <div key={h.dias}>
                          {h.dias}: {h.horario}
                        </div>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {clinica.endereco.linkMapa && !pendente(clinica.endereco.linkMapa) && (
              <a
                href={clinica.endereco.linkMapa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[var(--color-dawn-line)] bg-white px-6 py-4 text-center font-semibold text-[var(--color-amethyst)] hover:bg-[var(--color-dawn-deep)]"
              >
                Ver como chegar no mapa →
              </a>
            )}
          </div>

          {/* Formulário */}
          <div className="rounded-[2rem] border border-[var(--color-dawn-line)] bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl text-[var(--color-twilight)]">
              Prefere que a gente te chame?
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
              Deixe seus dados. Ao enviar, o WhatsApp abre com tudo preenchido.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Tour virtual 360° da clínica */}
        {tourEmbed && (
          <div className="mt-16" data-reveal>
            <Eyebrow>Conheça o espaço</Eyebrow>
            <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl">
              Faça um tour virtual pela clínica.
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Arraste para olhar em volta, no seu tempo, e sinta o ambiente
              antes mesmo da primeira visita.
            </p>
            <div className="mt-6 overflow-hidden rounded-[2rem] border border-[var(--color-dawn-line)] shadow-sm">
              <iframe
                src={tourEmbed}
                title="Tour virtual 360° da Despertar ParaPSI"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[380px] w-full sm:h-[500px]"
              />
            </div>
            {clinica.tourVirtual && !pendente(clinica.tourVirtual) && (
              <a
                href={clinica.tourVirtual}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[var(--color-amethyst)] underline underline-offset-4 hover:text-[var(--color-twilight)]"
              >
                Abrir o tour em tela cheia no Google Maps →
              </a>
            )}
          </div>
        )}
      </section>
    </>
  );
}
