/*
  ============================================================
  FORMAÇÃO E CERTIFICAÇÕES — Marco Sadério
  ============================================================
  Aparecem na página "Sobre", como texto (não publicamos as
  fotos dos diplomas para proteger dados pessoais do Marco —
  CPF, RG etc. — que aparecem em alguns certificados).

  COMO EDITAR: cada certificação é um bloco { ... }.
  Para adicionar uma nova (ex.: Cromoterapia), copie um bloco
  inteiro, cole abaixo e troque os textos entre aspas.
  Se o curso foi feito em mais de uma instituição, use uma lista:
  instituicao: ["Primeira", "Segunda"]  (aparece "Primeira e Segunda").
  ============================================================
*/

export type Certificacao = {
  curso: string; // nome do curso/formação
  instituicao: string | string[]; // onde foi feito (uma ou mais)
};

// Lista das instituições de um curso, sempre como lista.
export function instituicoesDe(c: Certificacao): string[] {
  return Array.isArray(c.instituicao) ? c.instituicao : [c.instituicao];
}

// Texto para exibir: "A", "A e B", "A, B e C".
export function instituicaoTexto(c: Certificacao): string {
  const l = instituicoesDe(c);
  return l.length > 1 ? `${l.slice(0, -1).join(", ")} e ${l[l.length - 1]}` : l[0];
}

export const formacao: Certificacao[] = [
  {
    curso: "Pós-Graduação (Lato Sensu) em Parapsicologia",
    instituicao: [
      "Instituto de Parapsicologia e Ciências Mentais de Joinville",
      "Faculdade FaCiência",
    ],
  },
  {
    curso: "Qualificação Profissional em Parapsicologia",
    instituicao: "Instituto de Parapsicologia e Ciências Mentais de Joinville",
  },
  {
    curso: "Practitioner em PNL (Programação Neurolinguística)",
    instituicao: "Instituto de Parapsicologia e Ciências Mentais de Joinville",
  },
  {
    curso: "Formação Completa em Terapia Reiki",
    instituicao: "Núcleo Energia",
  },
  {
    curso: "Filosofia para Viver",
    instituicao: "Organização Internacional Nova Acrópole",
  },
  // Cromoterapia: PREENCHER quando o Marco enviar o certificado.
];
