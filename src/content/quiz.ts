/*
  ============================================================
  QUIZ — "Qual terapia é ideal para você?"
  ============================================================
  Ajuda quem não conhece as terapias a descobrir por onde
  começar, e termina abrindo o WhatsApp com o resultado já
  escrito. Cada resposta "aponta" para uma ou mais terapias
  (pelo slug). No fim, a terapia mais apontada é a sugerida.

  COMO EDITAR: você pode mudar os textos das perguntas e opções.
  O campo "aponta" usa o "slug" das terapias (veja terapias.ts).
  Mexa nele só se tiver certeza.
  ============================================================
*/

export type OpcaoQuiz = {
  texto: string;
  aponta: string[]; // slugs das terapias que esta resposta favorece
};

export type PerguntaQuiz = {
  pergunta: string;
  opcoes: OpcaoQuiz[];
};

export const quiz: PerguntaQuiz[] = [
  {
    pergunta: "O que mais pesa para você neste momento?",
    opcoes: [
      { texto: "Ansiedade, tensão ou estresse do dia a dia", aponta: ["relaxamento-mental", "hipnose-clinica", "reiki"] },
      { texto: "Padrões que se repetem na minha vida", aponta: ["regressao-de-memorias", "reprogramacao-mental"] },
      { texto: "Medos ou bloqueios sem explicação", aponta: ["regressao-de-memorias", "reprogramacao-mental"] },
      { texto: "Cansaço, sobrecarga e falta de equilíbrio", aponta: ["reiki", "cromoterapia"] },
    ],
  },
  {
    pergunta: "Como você se sente em relação à sua autoconfiança?",
    opcoes: [
      { texto: "Gostaria de fortalecer minha autoestima", aponta: ["reprogramacao-mental", "pnl"] },
      { texto: "Sinto que me sabotam pensamentos negativos", aponta: ["hipnose-clinica", "reprogramacao-mental"] },
      { texto: "Tenho dificuldade de me comunicar ou me expor", aponta: ["pnl"] },
      { texto: "Está tudo bem por aqui", aponta: [] },
    ],
  },
  {
    pergunta: "O que você mais busca em uma sessão?",
    opcoes: [
      { texto: "Um momento profundo de descanso e acolhimento", aponta: ["reiki", "relaxamento-mental"] },
      { texto: "Entender a origem do que sinto", aponta: ["regressao-de-memorias", "regressao-ao-utero-materno"] },
      { texto: "Ferramentas práticas para mudar hábitos", aponta: ["pnl", "reprogramacao-mental"] },
      { texto: "Explorar minha intuição e espiritualidade", aponta: ["cromoterapia", "reiki"] },
    ],
  },
  {
    pergunta: "Você já viveu alguma experiência com terapias assim?",
    opcoes: [
      { texto: "Nunca, é a primeira vez", aponta: ["relaxamento-mental", "reiki"] },
      { texto: "Já fiz e gostaria de aprofundar", aponta: ["regressao-de-memorias", "regressao-ao-utero-materno"] },
      { texto: "Tenho curiosidade, mas ainda receio", aponta: ["reiki", "relaxamento-mental"] },
      { texto: "Estou aberto a qualquer caminho", aponta: ["reprogramacao-mental"] },
    ],
  },
];

// Terapia sugerida quando o resultado dá empate zero (nenhuma pontuou).
export const terapiaPadraoQuiz = "relaxamento-mental";
