/*
  ============================================================
  AS TERAPIAS — Despertar PΨ
  ============================================================
  Cada terapia vira automaticamente:
    • um card na página inicial
    • uma página própria (ex.: /terapias/hipnose-clinica)
    • uma entrada no mapa do site que o Google lê

  COMO EDITAR: mude o texto entre aspas. Para acrescentar um
  item numa lista, copie uma linha inteira (com as aspas e a
  vírgula) e cole abaixo. Não mexa em "slug" nem em "cor" sem
  necessidade — "slug" é o endereço da página.

  IMPORTANTE (jurídico): mantenha a linguagem de "apoio" e
  "bem-estar". Evite prometer cura ou usar "tratamento",
  "paciente" ou "diagnóstico". Veja COMO-EDITAR.md.

  IMPORTANTE (metodologia): o texto público explica o que é, para
  quem pode fazer sentido, onde atende e como agendar. NÃO publicar
  protocolos, sequência da sessão, roteiros, perguntas internas ou
  combinações de técnicas do Marco.
  ============================================================
*/

import { clinica } from "./clinica";

const e = clinica.endereco;
// "Av. Getúlio Vargas, 567, no bairro Bucarein"
const ONDE = `${e.logradouro}, no bairro ${e.bairro}`;

export type Terapia = {
  slug: string; // endereço da página (não use espaços nem acentos)
  nome: string;
  // Outros nomes pelos quais a prática é procurada (ex.: "Hipnoterapia").
  // O primeiro entra no título principal da página: "Hipnose Clínica e
  // Hipnoterapia em Joinville".
  outrosNomes?: string[];
  // true = só atendimento presencial (a página não oferece online).
  soPresencial?: boolean;
  cor: string; // cor-tema (do espectro da cromoterapia)
  corSentido: string; // o que essa cor representa
  eyebrow: string; // rótulo curto acima do título
  resumo: string; // uma frase — aparece no card
  pergunta: string; // pergunta reflexiva do Marco (vira destaque)
  oQueE: string[]; // parágrafos explicando o que é
  apoia: string[]; // "pode apoiar em..." (lista)
  comoFunciona: string; // o que esperar (sem expor a metodologia)
  metaTitle: string; // título que aparece na aba do navegador e no Google
  metaDescription: string; // resumo que o Google mostra na busca
  faq?: { pergunta: string; resposta: string }[]; // dúvidas específicas
  // Terapias sugeridas em "Continue explorando" (use o "slug" delas).
  relacionadas?: string[];
};

export const terapias: Terapia[] = [
  {
    slug: "conversas-terapeuticas",
    relacionadas: ["hipnose-clinica", "reprogramacao-mental", "relaxamento-mental"],
    nome: "Conversas Terapêuticas",
    cor: "#b07a56",
    corSentido: "o fio que conduz",
    eyebrow: "Escuta e acolhimento",
    resumo:
      "Mais do que conversar: uma escuta ativa e acolhedora que ajuda a colocar em palavras o que pede atenção.",
    pergunta:
      "E se ser ouvido de verdade, sem julgamentos, já fosse o começo da sua transformação?",
    oQueE: [
      "As conversas terapêuticas (o diálogo terapêutico) são o fio condutor de todo o trabalho. Vão além de uma simples conversa: são um processo de escuta ativa, acolhimento e direcionamento, que ajuda você a trazer à tona questões profundas e a enxergar novos caminhos.",
      "Em um espaço seguro e sem julgamentos, você é conduzido por perguntas abertas e reflexivas. Juntos, vamos reconhecendo padrões de pensamento, crenças que limitam, dores que estavam ocultas e possíveis caminhos.",
    ],
    apoia: [
      "Alívio imediato ao se expressar e ser ouvido",
      "Clareza sobre situações confusas ou que se repetem",
      "Organização de ideias e emoções",
      "Insights e decisões mais conscientes",
    ],
    comoFunciona:
      "Cada encontro é uma conversa cuidadosa, conduzida no seu ritmo, em um espaço seguro e sem julgamentos. As conversas terapêuticas podem acontecer sozinhas ou acompanhar outras práticas, conforme o que fizer sentido para você.",
    metaTitle: "Conversas Terapêuticas em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Conversas terapêuticas em Joinville: escuta acolhedora para organizar emoções, ganhar clareza e abrir novos caminhos. Presencial e online. Agende pelo WhatsApp.",
  },
  {
    slug: "hipnose-clinica",
    relacionadas: ["regressao-de-memorias", "reprogramacao-mental", "relaxamento-mental"],
    nome: "Hipnose Clínica",
    outrosNomes: ["Hipnoterapia"],
    cor: "#3e6b8f",
    corSentido: "foco e calma",
    eyebrow: "Estado de foco profundo",
    resumo:
      "Um estado natural de relaxamento e concentração para acessar padrões que sustentam hábitos e emoções.",
    pergunta:
      "Imagine poder silenciar aquela voz que te sabota e plantar no lugar pensamentos que te fortalecem.",
    oQueE: [
      "Muitas pessoas associam hipnose a palco ou entretenimento. A hipnose clínica é totalmente diferente: é um estado natural de relaxamento profundo e foco concentrado, no qual a mente fica mais aberta a sugestões terapêuticas positivas.",
      "Você não perde o controle. Permanece consciente o tempo todo e apenas acessa um nível mais tranquilo da mente, aquele em que guardamos memórias, crenças e padrões que orientam boa parte do que sentimos e fazemos.",
      `Hipnose clínica e hipnoterapia são nomes para a mesma prática: o uso da hipnose voltado ao autoconhecimento e à mudança de padrões. As sessões de hipnoterapia acontecem presencialmente em ${clinica.endereco.cidade}, no consultório da ${clinica.nomeExtenso}, e também online para quem está em outras cidades.`,
    ],
    apoia: [
      "Ansiedade, estresse e momentos de tensão",
      "Medos e receios (alturas, dirigir, falar em público)",
      "Hábitos que a pessoa deseja mudar",
      "Preparação para provas, concursos e apresentações",
      "Qualidade do sono e sensação de bem-estar",
    ],
    comoFunciona:
      "Você permanece consciente e no controle durante toda a sessão, em um estado calmo e concentrado, no seu ritmo. Cada atendimento é individual, conduzido em um espaço seguro, sem julgamentos e sempre respeitando seus limites.",
    metaTitle:
      "Hipnose Clínica e Hipnoterapia em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Hipnose Clínica em Joinville com Marco Sadério. Conheça como a abordagem pode ser utilizada em processos de autoconhecimento e mudança de padrões. Agende.",
    faq: [
      {
        pergunta: "Vou perder o controle ou revelar segredos?",
        resposta:
          "Não. Na hipnose clínica você permanece consciente e no comando o tempo todo. É um estado parecido com aquela concentração de quando lemos um bom livro e o mundo em volta some. Você só faz e fala o que quiser.",
      },
      {
        pergunta: "E se eu não conseguir ser hipnotizado?",
        resposta:
          "A maioria das pessoas entra tranquilamente nesse estado, porque ele é natural, e todos nós passamos por ele várias vezes ao dia. A condução é feita no seu ritmo, sem pressa.",
      },
      {
        pergunta: "Hipnose clínica e hipnoterapia são a mesma coisa?",
        resposta:
          `Sim. Hipnoterapia é o nome dado ao uso da hipnose com propósito de cuidado e autoconhecimento, o que aqui chamamos de hipnose clínica. Quem procura hipnoterapia ou um hipnoterapeuta em ${clinica.endereco.cidade} encontra na ${clinica.nomeExtenso} a hipnose clínica com Marco Sadério, parapsicólogo clínico.`,
      },
      {
        pergunta: `Onde fazer hipnose em ${clinica.endereco.cidade}?`,
        resposta:
          `As sessões presenciais acontecem na ${clinica.nomeExtenso}, na ${ONDE}, próximo ao Centro de ${clinica.endereco.cidade}. Para quem está em outras cidades, também há atendimento online, por ${clinica.plataformaOnline}. O agendamento é feito pelo WhatsApp.`,
      },
    ],
  },
  {
    slug: "reprogramacao-mental",
    relacionadas: ["hipnose-clinica", "pnl", "conversas-terapeuticas"],
    nome: "Reprogramação Mental",
    cor: "#3f8a80",
    corSentido: "renovação",
    eyebrow: "Novos padrões internos",
    resumo:
      "Substituir crenças limitantes por novos entendimentos que apoiam crescimento e equilíbrio.",
    pergunta:
      "Quais pensamentos repetidos estão te bloqueando, e como seria a vida se fossem substituídos por ideias de realização?",
    oQueE: [
      "Nossa mente funciona um pouco como um computador: cheia de “programas” instalados ao longo da vida. Muitos são úteis. Outros se tornam crenças limitantes, frases que ouvimos na infância e medos que carregamos sem perceber.",
      "A reprogramação mental é um processo para reconhecer esses padrões e substituí-los por novos entendimentos, que apoiam o crescimento pessoal e o equilíbrio emocional.",
    ],
    apoia: [
      "Pensamentos negativos e autossabotagem",
      "Fortalecimento da autoestima e da autoconfiança",
      "Construção de hábitos mais saudáveis",
      "Foco, disciplina e motivação",
      "Abertura para novas oportunidades",
    ],
    comoFunciona:
      "Cada processo é individual e respeita o seu tempo e aquilo que faz sentido para a sua vida. O foco está em reconhecer as crenças que hoje limitam você e abrir espaço para novos entendimentos, em um ambiente acolhedor e sem julgamentos.",
    metaTitle: "Reprogramação Mental em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Reprogramação mental em Joinville: reconheça crenças que limitam e firme novos padrões de autoconfiança e equilíbrio. Presencial e online. Agende pelo WhatsApp.",
  },
  {
    slug: "pnl",
    relacionadas: ["reprogramacao-mental", "hipnose-clinica", "conversas-terapeuticas"],
    nome: "PNL (Programação Neurolinguística)",
    cor: "#cf9640",
    corSentido: "clareza",
    eyebrow: "Linguagem e resultados",
    resumo:
      "Como pensamentos, palavras e emoções moldam resultados, e como criar novas rotas para seus objetivos.",
    pergunta:
      "Já pensou como pequenas mudanças na forma de falar e pensar poderiam transformar a sua vida?",
    oQueE: [
      "A PNL é um conjunto de técnicas que mostra como pensamentos, palavras e emoções moldam nossos resultados. Ela ajuda a reconhecer padrões mentais e de linguagem e a criar novas rotas para alcançar objetivos com mais clareza.",
      "É uma abordagem prática e objetiva: as mudanças começam na forma como você se comunica consigo mesmo e com as pessoas ao redor.",
    ],
    apoia: [
      "Comunicação e relacionamentos",
      "Bloqueios internos e inseguranças",
      "Liderança e confiança",
      "Falar em público com naturalidade",
      "Lidar melhor com críticas e conflitos",
    ],
    comoFunciona:
      "O trabalho é prático e voltado aos objetivos que você traz, com recursos que você pode levar para o dia a dia. Cada encontro é individual e conduzido no seu ritmo.",
    metaTitle: "PNL (Programação Neurolinguística) em [cidade] | Despertar ParaPSI",
    metaDescription:
      "PNL (Programação Neurolinguística) em Joinville: entenda como pensamento e linguagem moldam resultados e ganhe clareza e confiança. Agende pelo WhatsApp.",
  },
  {
    slug: "regressao-de-memorias",
    relacionadas: ["vidas-passadas", "regressao-ao-utero-materno", "hipnose-clinica"],
    nome: "Regressão de Memórias",
    outrosNomes: ["Terapia Regressiva"],
    cor: "#48507e",
    corSentido: "profundidade",
    eyebrow: "A raiz no passado",
    resumo:
      "Acessar lembranças que ainda influenciam o presente para ressignificá-las com segurança.",
    pergunta:
      "E se aquilo que mais te trava hoje tivesse origem em um episódio esquecido, e você pudesse finalmente se libertar dele?",
    oQueE: [
      "Nossa mente guarda muito do que vivemos, mesmo o que esquecemos conscientemente. Muitas vezes, incômodos e bloqueios do presente têm origem em lembranças antigas.",
      "A regressão de memórias, também chamada de terapia regressiva, é uma prática para acessar essas recordações e ressignificá-las, trazendo alívio e clareza. Não se trata de reviver a dor, e sim de reencontrar a lembrança para observá-la de um lugar seguro.",
    ],
    apoia: [
      "Reconhecer a origem de medos e inseguranças",
      "Compreender padrões que se repetem em relacionamentos",
      "Ressignificar lembranças dolorosas do passado",
      "Mais clareza sobre a própria história",
    ],
    comoFunciona:
      "Você permanece consciente e observa as lembranças com segurança e distanciamento, sem a intenção de reviver a dor. A condução é cuidadosa e respeita totalmente o seu ritmo e o seu conforto.",
    metaTitle: "Regressão de Memórias e Terapia Regressiva em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Regressão de Memórias e terapia regressiva em Joinville com Marco Sadério. Conheça a abordagem e tire suas dúvidas antes de agendar uma sessão.",
    faq: [
      {
        pergunta: "Vou reviver traumas e sofrer de novo?",
        resposta:
          "O trabalho é conduzido para que você observe a lembrança de um lugar seguro, com distanciamento, e não para reviver a dor. O objetivo é justamente trazer alívio e uma nova compreensão.",
      },
      {
        pergunta: "Regressão de memórias e terapia regressiva são a mesma coisa?",
        resposta:
          "Sim. Terapia regressiva é outro nome usado para a regressão de memórias: o trabalho de acessar lembranças desta vida que ainda influenciam o presente. A regressão a vidas passadas e a regressão ao útero materno são vertentes diferentes, cada uma com a sua página.",
      },
    ],
  },
  {
    slug: "regressao-ao-utero-materno",
    relacionadas: ["regressao-de-memorias", "vidas-passadas", "hipnose-clinica"],
    nome: "Regressão ao Útero Materno",
    cor: "#b7657a",
    corSentido: "acolhimento",
    eyebrow: "A raiz mais antiga",
    resumo:
      "Acessar as primeiras impressões emocionais para acolher inseguranças que acompanham desde sempre.",
    pergunta: "Já pensou em acolher sentimentos que surgiram antes mesmo de nascer?",
    oQueE: [
      "Muito antes de nascer, já registramos impressões emocionais. Emoções vividas nesse período inicial podem deixar marcas sutis, mas profundas.",
      "A regressão ao útero materno é uma prática que permite acessar esse período com acolhimento, trazendo mais segurança interior e sensação de pertencimento.",
    ],
    apoia: [
      "Sentimentos de rejeição ou de abandono",
      "Inseguranças profundas e sem explicação aparente",
      "Sensação de pertencimento e de acolhimento",
      "Reconexão com memórias de segurança",
    ],
    comoFunciona:
      "Todo o processo é conduzido com delicadeza e cuidado, no seu tempo, dentro de um espaço seguro e sem julgamentos.",
    metaTitle: "Regressão ao Útero Materno em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Regressão ao útero materno em Joinville: acolha inseguranças ligadas ao início da vida, com segurança e respeito ao seu ritmo. Agende pelo WhatsApp.",
  },
  {
    slug: "vidas-passadas",
    relacionadas: ["regressao-de-memorias", "regressao-ao-utero-materno", "hipnose-clinica"],
    nome: "Regressão a Vidas Passadas",
    cor: "#6b4e9e",
    corSentido: "intuição",
    eyebrow: "Uma história mais longa",
    resumo:
      "Uma ferramenta de autoconhecimento a partir da ideia de que a consciência é contínua.",
    pergunta:
      "E se a chave para a sua liberdade hoje estivesse em uma história muito mais antiga do que você imagina?",
    oQueE: [
      "Alguns bloqueios parecem não ter explicação nesta vida. A regressão a vidas passadas parte da ideia de que a consciência é contínua e pode carregar impressões de outras experiências.",
      "Mesmo que você compreenda a experiência de forma simbólica, ela costuma trazer revelações profundas. Independentemente da crença, é uma ferramenta poderosa de autoconhecimento e libertação.",
    ],
    apoia: [
      "Medos e receios sem causa aparente",
      "Relações complexas e vínculos difíceis de entender",
      "Bloqueios emocionais persistentes",
      "Processos de luto e dores “sem explicação”",
    ],
    comoFunciona:
      "A partir de um relaxamento guiado, você acessa imagens e sensações que podem ser compreendidas de forma simbólica ou literal, e a escolha é sempre sua. O propósito é sempre o autoconhecimento e o alívio, com respeito total às suas crenças.",
    metaTitle: "Regressão a Vidas Passadas em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Regressão a vidas passadas em Joinville: autoconhecimento conduzido com respeito às suas crenças, para compreender bloqueios. Agende pelo WhatsApp.",
  },
  {
    slug: "meditacao",
    relacionadas: ["relaxamento-mental", "reiki", "cromoterapia"],
    nome: "Meditação",
    cor: "#6a86a8",
    corSentido: "presença e quietude",
    eyebrow: "Aquietar a mente",
    resumo:
      "Práticas de atenção e presença para acalmar os pensamentos e reencontrar o silêncio interior.",
    pergunta:
      "Quando foi a última vez que você deu à sua mente um verdadeiro momento de silêncio?",
    oQueE: [
      "A meditação é uma prática simples e profunda de atenção e presença. Em um mundo acelerado, ela oferece um espaço para desacelerar, observar os pensamentos sem se prender a eles e reencontrar a calma que já existe dentro de você.",
      "Não é preciso “esvaziar a mente” nem ter experiência: com orientação, a prática se torna acessível e natural, e os seus efeitos aparecem no dia a dia.",
    ],
    apoia: [
      "Redução da ansiedade e do estresse",
      "Mais foco, clareza e presença",
      "Equilíbrio emocional",
      "Qualidade do sono e sensação de bem-estar",
    ],
    comoFunciona:
      "Conduzo você por práticas guiadas de respiração, atenção e quietude, em um ambiente tranquilo. Você também aprende recursos simples para levar a meditação para a sua rotina.",
    metaTitle: "Meditação em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Meditação guiada em Joinville: atenção e presença para acalmar a mente, aliviar a ansiedade e reencontrar o equilíbrio. Agende pelo WhatsApp.",
  },
  {
    slug: "relaxamento-mental",
    relacionadas: ["meditacao", "hipnose-clinica", "reiki"],
    nome: "Relaxamento Físico e Mental",
    cor: "#8a79b0",
    corSentido: "serenidade",
    eyebrow: "Equilíbrio imediato",
    resumo:
      "Respiração consciente e técnicas de calma para relaxar o corpo, aliviar a tensão e reencontrar clareza mental.",
    pergunta:
      "Já pensou como alguns minutos de relaxamento poderiam mudar totalmente o seu dia?",
    oQueE: [
      "Vivemos num mundo acelerado, em que o corpo e a mente dificilmente descansam. O relaxamento físico e mental combina respiração consciente, concentração e técnicas de calma para soltar as tensões do corpo e trazer equilíbrio imediato.",
      "É simples e poderoso: em poucos minutos, o corpo relaxa e a mente reencontra clareza.",
    ],
    apoia: [
      "Ansiedade, tensão e estresse do dia a dia",
      "Qualidade do sono",
      "Recuperação de energia mental e física",
      "Foco e concentração",
      "Equilíbrio emocional em momentos difíceis",
    ],
    comoFunciona:
      "Guio você por exercícios de respiração e concentração, em um ambiente tranquilo, até um estado de calma profunda. É uma prática leve, que você também aprende a levar para o seu dia a dia.",
    metaTitle: "Relaxamento Mental Guiado em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Relaxamento físico e mental em Joinville: respiração consciente para reduzir o estresse, melhorar o sono e recuperar a clareza. Agende pelo WhatsApp.",
  },
  {
    slug: "reiki",
    relacionadas: ["cromoterapia", "relaxamento-mental", "meditacao"],
    nome: "Reiki",
    soPresencial: true, // aplicação pela imposição das mãos
    cor: "#4e7a5e",
    corSentido: "equilíbrio",
    eyebrow: "Energia e equilíbrio",
    resumo:
      "Prática integrativa de origem japonesa, incluída na PNPIC do SUS, voltada ao equilíbrio energético, relaxamento e bem-estar.",
    pergunta:
      "E se o equilíbrio que você procura pudesse começar por um profundo momento de acolhimento?",
    oQueE: [
      "O Reiki é uma prática integrativa de origem japonesa, incluída na Política Nacional de Práticas Integrativas e Complementares (PNPIC) do SUS, voltada ao equilíbrio energético, ao relaxamento e ao bem-estar. A aplicação é feita pela imposição das mãos, sem necessidade de contato físico direto.",
      "Ele atua em diferentes camadas: no corpo, favorecendo o relaxamento; nas emoções, trazendo acolhimento; e na mente, acalmando os pensamentos. Muitas vezes um incômodo físico se relaciona a uma emoção, e o Reiki trabalha justamente essa ligação.",
    ],
    apoia: [
      "Relaxamento profundo e alívio de tensões",
      "Equilíbrio em momentos de ansiedade e cansaço",
      "Sensação de acolhimento e segurança interior",
      "Clareza mental e serenidade",
    ],
    comoFunciona:
      "Na sessão de Reiki, você permanece confortavelmente deitado ou sentado, vestido, enquanto a aplicação é feita pela imposição das mãos. É um momento de descanso profundo, e muitas pessoas relatam uma sensação de leveza e paz ao final.",
    metaTitle: "Reiki em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Sessões de Reiki em Joinville na Despertar ParaPSI. Uma prática integrativa voltada ao relaxamento e bem-estar. Fale com Marco e agende seu horário.",
    faq: [
      {
        pergunta: `Onde fazer Reiki em ${clinica.endereco.cidade}?`,
        resposta:
          `As sessões de Reiki em ${clinica.endereco.cidade} acontecem na ${clinica.nomeExtenso}, na ${ONDE}, próximo ao Centro. É só agendar o seu horário pelo WhatsApp.`,
      },
      {
        pergunta: "O Reiki substitui acompanhamento médico ou psicológico?",
        resposta:
          "Não. O Reiki é uma prática integrativa e complementar, voltada ao relaxamento e ao bem-estar. Ele pode acompanhar, mas não substitui, o cuidado de médicos e psicólogos.",
      },
    ],
  },
  {
    slug: "cromoterapia",
    relacionadas: ["reiki", "relaxamento-mental", "meditacao"],
    nome: "Cromoterapia",
    soPresencial: true, // usa luzes e ambientes do consultório
    cor: "#c79a54",
    corSentido: "o espectro das cores",
    eyebrow: "O poder das cores",
    resumo:
      "Na abordagem da cromoterapia, as cores e a luz são utilizadas com o objetivo de favorecer a sensação de equilíbrio e bem-estar.",
    pergunta: "Você já reparou como certas cores influenciam como você se sente? Imagine usar isso como apoio ao seu bem-estar.",
    oQueE: [
      "Na abordagem da cromoterapia, as cores e a luz são utilizadas com o objetivo de favorecer o equilíbrio e o bem-estar. A proposta é que diferentes cores e ambientes possam influenciar como nos sentimos.",
      "É impressionante como a cor de um ambiente pode influenciar o nosso estado de espírito, e é justamente isso que a cromoterapia coloca a favor do seu bem-estar.",
    ],
    apoia: [
      "Azul: favorecer a calma da mente e do corpo",
      "Verde: favorecer o equilíbrio emocional e a serenidade",
      "Amarelo: favorecer a sensação de alegria e a clareza mental",
      "Violeta: favorecer a conexão com a intuição",
      "Vermelho: favorecer a sensação de energia e vitalidade",
    ],
    comoFunciona:
      "As luzes e os ambientes de cor são escolhidos de acordo com o que você busca naquele momento, como mais calma, mais energia ou mais clareza, em um ambiente tranquilo.",
    metaTitle: "Cromoterapia em [cidade] | Despertar ParaPSI",
    metaDescription:
      "Cromoterapia em Joinville: as cores e a luz usadas para favorecer calma, equilíbrio e bem-estar, junto a outras práticas. Agende pelo WhatsApp.",
  },
];

// Busca rápida por slug (usada pelas páginas de terapia).
export function getTerapia(slug: string): Terapia | undefined {
  return terapias.find((t) => t.slug === slug);
}
