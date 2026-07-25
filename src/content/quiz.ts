/*
  ============================================================
  QUIZ — "Por onde começar o seu caminho?"
  ============================================================
  Em vez de indicar UMA terapia isolada, o quiz sugere um
  "caminho" — um conjunto de práticas que se complementam. Isso
  reflete a realidade do trabalho do Marco: as terapias andam
  juntas, e o caminho é construído junto com o cliente,
  respeitando as crenças e o tempo de cada um.

  No fim, abre o WhatsApp com o caminho sugerido já escrito.

  COMO EDITAR:
  - Os textos das perguntas e opções podem ser mudados livremente.
  - O campo "caminho" liga cada resposta a um dos caminhos abaixo
    (alivio, autoconhecimento, confianca, equilibrio).
  - Em cada caminho, "praticas" usa o "slug" das terapias
    (veja terapias.ts). Mude com cuidado.
  ============================================================
*/

export type Caminho = {
  nome: string;
  resumo: string;
  praticas: string[]; // slugs das terapias que compõem o caminho
};

// Os quatro caminhos sugeridos. Nenhum "prescreve" regressão a vidas
// passadas — ela fica como aprofundamento possível, só se fizer
// sentido para a pessoa, conversado com o Marco.
export const caminhos: Record<string, Caminho> = {
  alivio: {
    nome: "Acolhimento e alívio",
    resumo:
      "Um começo suave, para reduzir a ansiedade, aliviar tensões e reencontrar calma e descanso.",
    praticas: ["relaxamento-mental", "reiki", "cromoterapia"],
  },
  autoconhecimento: {
    nome: "Autoconhecimento e ressignificação",
    resumo:
      "Um caminho para compreender a origem de padrões que se repetem e ressignificar o que ainda pesa — sempre no seu tempo.",
    praticas: ["hipnose-clinica", "reprogramacao-mental", "regressao-de-memorias"],
  },
  confianca: {
    nome: "Confiança e novos hábitos",
    resumo:
      "Ferramentas práticas para fortalecer a autoestima, melhorar a comunicação e construir hábitos mais saudáveis.",
    praticas: ["pnl", "reprogramacao-mental", "hipnose-clinica"],
  },
  equilibrio: {
    nome: "Equilíbrio e energia",
    resumo:
      "Práticas para renovar as forças, equilibrar as emoções e trazer mais serenidade e bem-estar.",
    praticas: ["reiki", "cromoterapia", "relaxamento-mental"],
  },
};

export type OpcaoQuiz = { texto: string; caminho: keyof typeof caminhos };
export type PerguntaQuiz = { pergunta: string; opcoes: OpcaoQuiz[] };

export const quiz: PerguntaQuiz[] = [
  {
    pergunta: "O que mais pesa para você neste momento?",
    opcoes: [
      { texto: "Ansiedade, tensão ou estresse do dia a dia", caminho: "alivio" },
      { texto: "Padrões que se repetem na minha vida", caminho: "autoconhecimento" },
      { texto: "Insegurança ou dificuldade de me expressar", caminho: "confianca" },
      { texto: "Cansaço, sobrecarga e falta de equilíbrio", caminho: "equilibrio" },
    ],
  },
  {
    pergunta: "O que você mais gostaria de encontrar?",
    opcoes: [
      { texto: "Um momento de descanso e acolhimento", caminho: "alivio" },
      { texto: "Entender a origem do que sinto", caminho: "autoconhecimento" },
      { texto: "Fortalecer minha autoconfiança", caminho: "confianca" },
      { texto: "Renovar minha energia e serenidade", caminho: "equilibrio" },
    ],
  },
  {
    pergunta: "Como você prefere começar?",
    opcoes: [
      { texto: "De forma leve e tranquila", caminho: "alivio" },
      { texto: "Com abertura para me aprofundar aos poucos", caminho: "autoconhecimento" },
      { texto: "Com foco em resultados práticos no dia a dia", caminho: "confianca" },
      { texto: "Buscando mais conexão comigo e bem-estar", caminho: "equilibrio" },
    ],
  },
  {
    pergunta: "É a sua primeira vez com terapias como estas?",
    opcoes: [
      { texto: "Sim, é a primeira vez", caminho: "alivio" },
      { texto: "Já tive experiências e quero aprofundar", caminho: "autoconhecimento" },
      { texto: "Quero desenvolver habilidades e confiança", caminho: "confianca" },
      { texto: "Busco relaxamento e equilíbrio", caminho: "equilibrio" },
    ],
  },
];

// Caminho sugerido em caso de empate sem pontuação (o mais suave).
export const caminhoPadrao: keyof typeof caminhos = "alivio";
