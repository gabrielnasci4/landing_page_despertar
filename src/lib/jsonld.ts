import { clinica } from "@/content/clinica";
import { terapias } from "@/content/terapias";
import type { PerguntaFrequente } from "@/content/faq";
import { temEndereco, pendente } from "@/lib/site";

/*
  "Dados estruturados" (JSON-LD): informações que o Google lê
  para entender que este é um negócio local, quem é o
  profissional e quais as perguntas frequentes. É o que ajuda a
  clínica a aparecer no mapa e com as perguntas expansíveis na
  busca. O visitante não vê nada disso — é só para os buscadores.
*/

export function localBusinessJsonLd() {
  const e = clinica.endereco;
  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
    name: clinica.nome,
    alternateName: clinica.nomeExtenso,
    description: clinica.atividade,
    url: clinica.siteUrl,
    telephone: `+${clinica.whatsappNumero}`,
    email: clinica.email,
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: clinica.profissional.nomeCompleto,
      jobTitle: clinica.profissional.titulo,
    },
    sameAs: [clinica.redes.instagram, clinica.redes.facebook].filter(Boolean),
  };

  if (temEndereco()) {
    dados.address = {
      "@type": "PostalAddress",
      streetAddress: [e.logradouro, e.complemento]
        .filter((x) => x && !pendente(x))
        .join(", "),
      addressLocality: e.cidade,
      addressRegion: e.estado,
      postalCode: pendente(e.cep) ? undefined : e.cep,
      addressCountry: "BR",
    };
    if (e.latitude && e.longitude) {
      dados.geo = {
        "@type": "GeoCoordinates",
        latitude: e.latitude,
        longitude: e.longitude,
      };
    }
  }

  return dados;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: clinica.profissional.nomeCompleto,
    alternateName: clinica.profissional.nome,
    jobTitle: clinica.profissional.titulo,
    worksFor: { "@type": "Organization", name: clinica.nome },
    url: `${clinica.siteUrl}/sobre`,
  };
}

export function serviceJsonLd(slug: string) {
  const t = terapias.find((x) => x.slug === slug);
  if (!t) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.nome,
    serviceType: t.nome,
    description: t.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: clinica.nome,
      telephone: `+${clinica.whatsappNumero}`,
    },
    areaServed: "BR",
    url: `${clinica.siteUrl}/terapias/${t.slug}`,
  };
}

export function faqJsonLd(itens: PerguntaFrequente[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itens.map((i) => ({
      "@type": "Question",
      name: i.pergunta,
      acceptedAnswer: { "@type": "Answer", text: i.resposta },
    })),
  };
}

export function breadcrumbJsonLd(trilha: { nome: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trilha.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      item: `${clinica.siteUrl}${item.url}`,
    })),
  };
}
