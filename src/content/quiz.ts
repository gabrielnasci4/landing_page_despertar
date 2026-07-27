/*
  ============================================================
  QUIZ — "Por onde começar a sua conversa?"
  ============================================================
  IMPORTANTE (decisão do Marco): o teste NÃO indica nem sugere
  terapias. Cada pessoa é única, muitas vezes nem sabe ainda o que
  sente, e a indicação depende de conversa e é individual.

  Então o teste apenas ACOLHE e REFLETE o que a pessoa está
  buscando naquele momento, e a conduz para uma conversa com o
  Marco — deixando claro que o caminho é definido a dois, com
  cuidado. É uma porta de entrada, não um diagnóstico.

  COMO EDITAR: os textos podem ser mudados livremente. O campo
  "tema" liga cada resposta a um dos temas abaixo.
  ============================================================
*/

export type Tema = {
  titulo: string; // como o tema é nomeado ("acolhimento e alívio")
  reflexo: string; // a frase que reflete o momento da pessoa
};

export const temas: Record<string, Tema> = {
  acolhimento: {
    titulo: "acolhimento e alívio",
    reflexo:
      "Parece que este é um momento de buscar calma, acolhimento e um espaço seguro para respirar.",
  },
  autoconhecimento: {
    titulo: "autoconhecimento",
    reflexo:
      "Parece que você sente o chamado de se compreender melhor e ressignificar aquilo que ainda pesa.",
  },
  clareza: {
    titulo: "confiança e clareza",
    reflexo:
      "Parece que você busca fortalecer a autoconfiança e encontrar mais clareza para os seus caminhos.",
  },
  equilibrio: {
    titulo: "equilíbrio e bem-estar",
    reflexo:
      "Parece que você procura renovar as energias, equilibrar as emoções e reencontrar o bem-estar.",
  },
};

export type OpcaoQuiz = { texto: string; tema: keyof typeof temas };
export type PerguntaQuiz = { pergunta: string; opcoes: OpcaoQuiz[] };

export const quiz: PerguntaQuiz[] = [
  {
    pergunta: "O que mais pesa para você neste momento?",
    opcoes: [
      { texto: "Ansiedade, tensão ou estresse do dia a dia", tema: "acolhimento" },
      { texto: "Padrões que se repetem na minha vida", tema: "autoconhecimento" },
      { texto: "Insegurança ou dificuldade de me expressar", tema: "clareza" },
      { texto: "Cansaço, sobrecarga e falta de equilíbrio", tema: "equilibrio" },
    ],
  },
  {
    pergunta: "O que você mais gostaria de encontrar?",
    opcoes: [
      { texto: "Um momento de descanso e acolhimento", tema: "acolhimento" },
      { texto: "Entender melhor a origem do que sinto", tema: "autoconhecimento" },
      { texto: "Fortalecer a minha autoconfiança", tema: "clareza" },
      { texto: "Renovar a minha energia e serenidade", tema: "equilibrio" },
    ],
  },
  {
    pergunta: "Como você descreveria o seu momento?",
    opcoes: [
      { texto: "Preciso de um respiro e de acolhimento", tema: "acolhimento" },
      { texto: "Tenho vontade de me conhecer mais a fundo", tema: "autoconhecimento" },
      { texto: "Quero clareza e confiança para decidir", tema: "clareza" },
      { texto: "Busco mais equilíbrio e bem-estar", tema: "equilibrio" },
    ],
  },
  {
    pergunta: "O que faria diferença para você agora?",
    opcoes: [
      { texto: "Ter um espaço seguro para desacelerar", tema: "acolhimento" },
      { texto: "Compreender melhor a mim mesmo", tema: "autoconhecimento" },
      { texto: "Recuperar a confiança nas minhas escolhas", tema: "clareza" },
      { texto: "Reencontrar energia e leveza", tema: "equilibrio" },
    ],
  },
];

// Tema padrão se nada pontuar (o mais acolhedor).
export const temaPadrao: keyof typeof temas = "acolhimento";
