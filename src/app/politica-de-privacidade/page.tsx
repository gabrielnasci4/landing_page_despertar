import type { Metadata } from "next";
import { clinica } from "@/content/clinica";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Despertar PΨ: como tratamos os dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="text-[2rem] leading-[1.1] sm:text-4xl">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
        Última atualização: julho de 2026.
      </p>

      <div className="mt-10 space-y-8 leading-relaxed text-[var(--color-ink)]">
        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            1. Quem somos
          </h2>
          <p className="mt-3">
            Este site é da {clinica.nome} ({clinica.nomeExtenso}),{" "}
            {clinica.atividade.toLowerCase()}, sob responsabilidade de{" "}
            {clinica.profissional.nomeCompleto}. Para qualquer questão sobre os
            seus dados, fale conosco pelo e-mail{" "}
            <a href={`mailto:${clinica.email}`} className="text-[var(--color-amethyst)] underline">
              {clinica.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            2. Quais dados coletamos
          </h2>
          <p className="mt-3">
            Coletamos apenas os dados que você nos fornece de forma espontânea ao
            preencher o formulário de contato: nome, telefone/WhatsApp e, se você
            quiser, a terapia de interesse e uma mensagem. Também coletamos, com o
            seu consentimento, dados de navegação por meio de cookies (veja o item
            5).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            3. Para que usamos os seus dados
          </h2>
          <p className="mt-3">
            Usamos os seus dados exclusivamente para responder ao seu contato,
            agendar atendimentos e prestar as informações solicitadas. Não
            vendemos nem compartilhamos os seus dados com terceiros para fins de
            marketing.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            4. Base legal e os seus direitos (LGPD)
          </h2>
          <p className="mt-3">
            O tratamento dos seus dados se baseia no seu consentimento e no
            legítimo interesse de responder à sua solicitação, conforme a Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018). Você pode, a qualquer
            momento, solicitar acesso, correção ou exclusão dos seus dados, bem
            como revogar o consentimento, escrevendo para{" "}
            <a href={`mailto:${clinica.email}`} className="text-[var(--color-amethyst)] underline">
              {clinica.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            5. Cookies
          </h2>
          <p className="mt-3">
            Utilizamos cookies para entender como o site é usado e melhorar a sua
            experiência, incluindo ferramentas de análise (como o Google
            Analytics) e de anúncios. Esses cookies só são ativados após o seu
            consentimento no aviso exibido ao entrar no site. Você pode recusá-los
            sem prejuízo à navegação.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            6. Segurança e retenção
          </h2>
          <p className="mt-3">
            Adotamos medidas razoáveis para proteger os seus dados e os mantemos
            apenas pelo tempo necessário para as finalidades descritas ou para
            cumprir obrigações legais.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-[var(--color-twilight)]">
            7. Natureza das terapias
          </h2>
          <p className="mt-3">{clinica.disclaimer}</p>
        </section>
      </div>
    </article>
  );
}
