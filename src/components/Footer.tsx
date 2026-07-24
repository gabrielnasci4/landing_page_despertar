import Link from "next/link";
import Image from "next/image";
import { clinica } from "@/content/clinica";
import { terapias } from "@/content/terapias";
import { temEndereco, enderecoLinha, pendente } from "@/lib/site";
import { linkWhatsApp } from "@/lib/whatsapp";

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
              { r: "Descubra sua terapia", h: "/quiz" },
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
          <div className="mt-5 flex gap-3">
            {clinica.redes.instagram && (
              <a
                href={clinica.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1018.75 12 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1116.38 12 4.38 4.38 0 0112 16.38zm6.96-11.4a1.58 1.58 0 11-1.58-1.57 1.58 1.58 0 011.58 1.57z" />
                </svg>
              </a>
            )}
            {clinica.redes.facebook && (
              <a
                href={clinica.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
            )}
          </div>
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
              © {ano} {clinica.nome} — {clinica.profissional.nomeCompleto}
              {clinica.cnpj && !pendente(clinica.cnpj) ? ` · CNPJ ${clinica.cnpj}` : ""}
            </span>
            <span>Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
