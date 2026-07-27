import Link from "next/link";
import Image from "next/image";
import { clinica } from "@/content/clinica";
import { terapias } from "@/content/terapias";
import { temEndereco, enderecoLinha, pendente } from "@/lib/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-[var(--color-twilight)] text-[var(--color-dawn)]/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <span className="inline-flex rounded-2xl bg-[var(--color-dawn)] px-4 py-3">
            <Image
              src="/fotos/logo-despertar.png"
              alt={clinica.nome}
              width={2083}
              height={1621}
              className="h-14 w-auto"
            />
          </span>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-dawn)]/65">
            {clinica.atividade}. Um espaço de acolhimento para o
            autoconhecimento, o equilíbrio e o bem-estar.
          </p>
        </div>

        {/* Terapias */}
        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
            Terapias
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {terapias.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/terapias/${t.slug}`}
                  className="text-[var(--color-dawn)]/70 transition-colors hover:text-white"
                >
                  {t.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
            Navegar
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { r: "A abordagem", h: "/parapsicologia-clinica" },
              { r: "Sobre o Marco", h: "/sobre" },
              { r: "Por onde começar", h: "/quiz" },
              { r: "Contato", h: "/contato" },
              { r: "Política de Privacidade", h: "/politica-de-privacidade" },
            ].map((i) => (
              <li key={i.h}>
                <Link
                  href={i.h}
                  className="text-[var(--color-dawn)]/70 transition-colors hover:text-white"
                >
                  {i.r}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold)]">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-dawn)]/70 transition-colors hover:text-white"
              >
                WhatsApp {clinica.telefoneExibicao}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${clinica.email}`}
                className="text-[var(--color-dawn)]/70 transition-colors hover:text-white"
              >
                {clinica.email}
              </a>
            </li>
            {temEndereco() && (
              <li className="text-[var(--color-dawn)]/70">{enderecoLinha()}</li>
            )}
            {clinica.horarios.some((h) => !pendente(h.horario)) && (
              <li className="pt-1 text-[var(--color-dawn)]/60">
                {clinica.horarios
                  .filter((h) => !pendente(h.horario))
                  .map((h) => `${h.dias}: ${h.horario}`)
                  .join(" · ")}
              </li>
            )}
          </ul>

          {/* Redes sociais */}
          <SocialLinks tom="claro" tamanho={18} className="mt-5" />
        </div>
      </div>

      {/* Aviso legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <p className="text-xs leading-relaxed text-[var(--color-dawn)]/50">
            {clinica.disclaimer}
          </p>
          <div className="mt-4 flex flex-col gap-1 text-xs text-[var(--color-dawn)]/45 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {ano} {clinica.nome} · {clinica.profissional.nomeCompleto}
              {clinica.cnpj && !pendente(clinica.cnpj) ? ` · CNPJ ${clinica.cnpj}` : ""}
            </span>
            <span>Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
