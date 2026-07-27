/*
  ============================================================
  TESTE DE AUTOCONHECIMENTO — "Qual é o seu momento interior?"
  ============================================================
  Estilo dos testes de perfil (tipo IDRlabs): revela um PERFIL
  interessante sobre a pessoa, com base em psicologia, filosofia
  e parapsicologia — SEM dar diagnóstico e SEM propor tratamento.
  No fim, convida para uma conversa com o Marco.

  Está numa página própria (/autoconhecimento) para avaliação,
  em paralelo ao teste reflexivo atual (/quiz).

  COMO EDITAR: os textos podem ser mudados livremente. O campo
  "perfil" liga cada resposta a um dos perfis abaixo.
  ============================================================
*/

export type Perfil = {
  nome: string;
  simbolo: string; // emoji/ícone do perfil
  essencia: string; // frase curta que resume o perfil
  descricao: string[]; // parágrafos que descrevem o perfil
  convite: string; // o "convite" do momento (leva à reflexão/conversa)
};

export const perfis: Record<string, Perfil> = {
  buscador: {
    nome: "O Buscador de Sentido",
    simbolo: "🧭",
    essencia: "Você é movido por perguntas profundas.",
    descricao: [
      "Você não se contenta com o superficial: quer entender o porquê das coisas, o sentido por trás do que vive. Essa busca é a sua maior força — e, às vezes, a sua inquietação.",
      "A filosofia chamaria isso de uma alma que procura o essencial; a parapsicologia, de uma consciência em expansão. Quando você encontra propósito, tudo à sua volta parece se reorganizar.",
    ],
    convite:
      "O convite do seu momento é transformar essa busca em direção — trazer o sentido que você procura para o chão do dia a dia.",
  },
  guardiao: {
    nome: "O Guardião",
    simbolo: "🛡️",
    essencia: "Você é a base em que os outros se apoiam.",
    descricao: [
      "Você cuida, sustenta e resolve — muitas vezes deixando as próprias necessidades por último. A sua lealdade e o seu senso de responsabilidade são raros e preciosos.",
      "Mas há um peso invisível em carregar o mundo sozinho. Ser forte para todos, o tempo todo, cansa uma parte de você que também precisa de cuidado.",
    ],
    convite:
      "O seu momento pede reequilíbrio: aprender que também é permitido receber, descansar e colocar limites sem culpa. Cuidar de si é o que renova a sua força para cuidar.",
  },
  sensivel: {
    nome: "A Alma Sensível",
    simbolo: "🌙",
    essencia: "Você sente o mundo em alta intensidade.",
    descricao: [
      "Você percebe o que os outros não notam: capta climas, intuições e emoções com facilidade. Essa sensibilidade é um dom — de empatia, de intuição, de conexão profunda.",
      "O desafio é não se perder no que absorve dos outros, nem se cobrar por sentir tanto. A sua sensibilidade não é fragilidade: é uma forma de sabedoria.",
    ],
    convite:
      "O seu momento convida a proteger a sua energia e a honrar o que sente, sem julgamento. Cuidada, a sua sensibilidade se torna a sua maior bússola.",
  },
  estrategista: {
    nome: "O Estrategista",
    simbolo: "♟️",
    essencia: "A sua mente é rápida, clara e busca controle.",
    descricao: [
      "Você analisa, planeja e resolve — e isso te levou longe. A razão é uma aliada poderosa, e você sabe usá-la bem.",
      "Mas nem tudo se resolve pensando. Há uma parte de você, mais ligada ao sentir e à intuição, que às vezes fica em segundo plano, esperando espaço.",
    ],
    convite:
      "O seu momento convida a reencontrar o corpo e o coração, a confiar também na intuição. Quando razão e emoção caminham juntas, a clareza que você busca fica ainda mais forte.",
  },
  desperta: {
    nome: "O que Desperta",
    simbolo: "🌅",
    essencia: "Você está num limiar, entre o que foi e o que vem.",
    descricao: [
      "Algo antigo pede para ficar para trás, e algo novo ainda está nascendo. Pode haver inquietação e cansaço do que já passou — e também uma coragem silenciosa de recomeçar.",
      "Esse é um dos momentos mais férteis da vida, ainda que nem sempre confortável. Você não está perdido: está em transformação.",
    ],
    convite:
      "O convite é atravessar essa transição com acolhimento, sem pressa, honrando o que passou e abrindo espaço para o que vem. Despertar é, no fundo, exatamente isso.",
  },
};

export type OpcaoTeste = { texto: string; perfil: keyof typeof perfis };
export type PerguntaTeste = { pergunta: string; opcoes: OpcaoTeste[] };

export const perguntas: PerguntaTeste[] = [
  {
    pergunta: "Quando algo dá errado, o que passa primeiro pela sua cabeça?",
    opcoes: [
      { texto: "Qual é o sentido disso? O que quer me ensinar?", perfil: "buscador" },
      { texto: "Preciso me segurar e cuidar de quem depende de mim.", perfil: "guardiao" },
      { texto: "Sinto tudo de forma muito intensa.", perfil: "sensivel" },
      { texto: "Vou analisar com calma e traçar um plano.", perfil: "estrategista" },
      { texto: "Talvez seja hora de mudar algo na minha vida.", perfil: "desperta" },
    ],
  },
  {
    pergunta: "O que mais te move no dia a dia?",
    opcoes: [
      { texto: "Encontrar propósito e significado.", perfil: "buscador" },
      { texto: "Cuidar de quem eu amo.", perfil: "guardiao" },
      { texto: "Conexões verdadeiras e momentos de beleza.", perfil: "sensivel" },
      { texto: "Alcançar objetivos e evoluir.", perfil: "estrategista" },
      { texto: "A vontade de recomeçar e me reinventar.", perfil: "desperta" },
    ],
  },
  {
    pergunta: "Qual frase mais combina com você hoje?",
    opcoes: [
      { texto: "Preciso entender o porquê das coisas.", perfil: "buscador" },
      { texto: "Sou o porto seguro dos outros.", perfil: "guardiao" },
      { texto: "Sinto o mundo em alta intensidade.", perfil: "sensivel" },
      { texto: "Gosto de tudo sob controle e planejado.", perfil: "estrategista" },
      { texto: "Estou entre o que fui e o que quero ser.", perfil: "desperta" },
    ],
  },
  {
    pergunta: "O que você mais gostaria de sentir mais na sua vida?",
    opcoes: [
      { texto: "Clareza sobre o meu caminho.", perfil: "buscador" },
      { texto: "Leveza e permissão para descansar.", perfil: "guardiao" },
      { texto: "Equilíbrio para não me sobrecarregar com o que sinto.", perfil: "sensivel" },
      { texto: "Reconexão comigo mesmo, além da razão.", perfil: "estrategista" },
      { texto: "Coragem para virar a página.", perfil: "desperta" },
    ],
  },
  {
    pergunta: "O que mais pesa em você ultimamente?",
    opcoes: [
      { texto: "A sensação de que falta um sentido maior.", perfil: "buscador" },
      { texto: "O cansaço de carregar tudo sozinho.", perfil: "guardiao" },
      { texto: "Absorver demais as emoções ao redor.", perfil: "sensivel" },
      { texto: "Sentir que penso demais e sinto de menos.", perfil: "estrategista" },
      { texto: "Saber que algo precisa mudar, mas não saber como.", perfil: "desperta" },
    ],
  },
];

export const perfilPadrao: keyof typeof perfis = "buscador";
