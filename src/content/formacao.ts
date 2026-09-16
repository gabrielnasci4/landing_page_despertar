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
  ============================================================
*/

export type Certificacao = {
  curso: string; // nome do curso/formação
  instituicao: string; // onde foi feito
};

export const formacao: Certificacao[] = [
  {
    curso: "Pós-Graduação (Lato Sensu) em Parapsicologia",
    instituicao: "Faculdade FaCiência",
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
