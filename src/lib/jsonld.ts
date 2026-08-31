import { clinica } from "@/content/clinica";
import { terapias } from "@/content/terapias";
import { formacao } from "@/content/formacao";
import type { PerguntaFrequente } from "@/content/faq";
import { temEndereco, pendente } from "@/lib/site";

// — Horário de funcionamento em formato schema.org (a partir do texto
//   livre em clinica.horarios, ex.: "Segunda a sexta" / "9h às 18h"). —
const DIAS: Record<string, string> = {
  domingo: "Sunday", segunda: "Monday", terça: "Tuesday", terca: "Tuesday",
  quarta: "Wednesday", quinta: "Thursday", sexta: "Friday",
  sábado: "Saturday", sabado: "Saturday",
};
const ORDEM = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function diasParaArray(txt: string): string[] {
  const t = txt.toLowerCase();
  const intervalo = t.match(
    /(domingo|segunda|terça|terca|quarta|quinta|sexta|sábado|sabado)\s*(?:a|até|à)\s*(domingo|segunda|terça|terca|quarta|quinta|sexta|sábado|sabado)/,
  );
  if (intervalo) {
    const i = ORDEM.indexOf(DIAS[intervalo[1]]);
    const f = ORDEM.indexOf(DIAS[intervalo[2]]);
    if (i >= 0 && f >= i) return ORDEM.slice(i, f + 1);
  }
  const achados: string[] = [];
  for (const [k, v] of Object.entries(DIAS))
    if (t.includes(k) && !achados.includes(v)) achados.push(v);
  return achados;
}
function paraHora(s: string): string {
  const m = s.match(/(\d{1,2})(?:[h:](\d{2}))?/);
  return m ? `${m[1].padStart(2, "0")}:${m[2] || "00"}` : "";
}
function openingHoursSpec() {
  const specs = [];
  for (const h of clinica.horarios) {
    if (pendente(h.horario)) continue;
    const dias = diasParaArray(h.dias);
    const horas = h.horario.match(/\d{1,2}(?:[h:]\d{2})?/g);
    if (!dias.length || !horas || horas.length < 2) continue;
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dias,
      opens: paraHora(horas[0]),
      closes: paraHora(horas[horas.length - 1]),
    });
  }
  return specs;
}

/*
  Nome preferido da marca para o Google (igual ao Google Meu Negócio):
  "Despertar ParaPSI". Os "outros nomes" ajudam o Google a entender que
  todas essas grafias são a MESMA entidade (evita confundir com outros
  "Despertar Psi"). Mantemos o "Despertar PΨ" só no visual do site.
*/
const NOME_PREFERIDO = clinica.nomeExtenso; // "Despertar ParaPSI"
// Só as grafias realmente usadas (mais que isso vira ruído).
const OUTROS_NOMES = [
  clinica.nome, // "Despertar PΨ"
  "Despertar Para Psi",
];

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
    name: NOME_PREFERIDO,
    alternateName: OUTROS_NOMES,
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
    sameAs: [
      clinica.redes.instagram,
      clinica.redes.facebook,
      clinica.redes.youtube,
      clinica.redes.tiktok,
    ].filter(Boolean),
    areaServed: [
      { "@type": "City", name: clinica.endereco.cidade },
      { "@type": "AdministrativeArea", name: clinica.endereco.estado },
    ],
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

  if (e.linkMapa && !pendente(e.linkMapa)) dados.hasMap = e.linkMapa;

  const horas = openingHoursSpec();
  if (horas.length) dados.openingHoursSpecification = horas;

  return dados;
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: NOME_PREFERIDO,
    alternateName: OUTROS_NOMES,
    url: clinica.siteUrl,
    publisher: { "@type": "Organization", name: NOME_PREFERIDO },
  };
}

export function personJsonLd() {
  const p = clinica.profissional;
  const instituicoes = [...new Set(formacao.map((f) => f.instituicao))];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.nomeCompleto,
    alternateName: p.nome,
    jobTitle: p.titulo,
    description: `${p.titulo} à frente da ${NOME_PREFERIDO}, em ${clinica.endereco.cidade} - ${clinica.endereco.estado}.`,
    worksFor: { "@type": "LocalBusiness", name: NOME_PREFERIDO, url: clinica.siteUrl },
    url: `${clinica.siteUrl}/sobre`,
    image: `${clinica.siteUrl}/fotos/marco.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: clinica.endereco.cidade,
      addressRegion: clinica.endereco.estado,
      addressCountry: "BR",
    },
    alumniOf: instituicoes.map((nome) => ({
      "@type": "EducationalOrganization",
      name: nome,
    })),
    knowsAbout: ["Parapsicologia Clínica", ...terapias.map((t) => t.nome)],
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
    areaServed: [
      { "@type": "City", name: clinica.endereco.cidade },
      "BR",
    ],
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
