import { Accordion } from "@/components/Accordion";
import { Eyebrow } from "@/components/ui";
import type { PerguntaFrequente } from "@/content/faq";

/*
  Seção de perguntas frequentes. Recebe a lista de perguntas
  (a geral, ou a de uma terapia específica).
*/
export function FaqSection({
  itens,
  titulo = "Perguntas frequentes",
}: {
  itens: PerguntaFrequente[];
  titulo?: string;
}) {
  if (itens.length === 0) return null;

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="text-center" data-reveal>
        <Eyebrow className="justify-center">Antes de você perguntar</Eyebrow>
        <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{titulo}</h2>
      </div>
      <div className="mt-12" data-reveal>
        <Accordion itens={itens} />
      </div>
    </section>
  );
}
