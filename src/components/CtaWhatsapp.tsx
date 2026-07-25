"use client";

import { linkWhatsApp } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/*
  Botão de WhatsApp reutilizável em todo o site.
  - "mensagem": texto que já aparece escrito no WhatsApp (opcional).
  - "origem": de onde no site o clique partiu (para as estatísticas).
  - "variante": aparência (cheio, contorno ou claro).
*/
export function CtaWhatsapp({
  children = "Falar no WhatsApp",
  mensagem,
  origem = "geral",
  variante = "solid",
  className = "",
}: {
  children?: React.ReactNode;
  mensagem?: string;
  origem?: string;
  variante?: "solid" | "outline" | "light" | "whatsapp";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-wide transition-all duration-200 min-h-[48px] focus-visible:outline-2";

  const estilos = {
    solid:
      "bg-[var(--color-ember)] text-white hover:bg-[var(--color-ember-deep)] shadow-sm hover:shadow-md hover:-translate-y-0.5",
    outline:
      "border border-[var(--color-twilight)]/25 text-[var(--color-twilight)] hover:border-[var(--color-ember)] hover:text-[var(--color-ember)]",
    light:
      "bg-white/90 text-[var(--color-twilight)] hover:bg-white shadow-sm hover:-translate-y-0.5",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1eb457] shadow-sm hover:shadow-md hover:-translate-y-0.5",
  }[variante];

  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("clique_whatsapp", { origem })}
      className={`${base} ${estilos} ${className}`}
    >
      <WhatsappIcon />
      {children}
    </a>
  );
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.887 9.885M20.52 3.449C18.24 1.245 15.24.044 12.045.044 5.463.044.104 5.4.101 11.986c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.96 11.96 0 005.71 1.454h.006c6.585 0 11.946-5.357 11.949-11.945 0-3.19-1.24-6.19-3.495-8.445" />
    </svg>
  );
}
