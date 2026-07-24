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
  ============================================================
*/

export type Terapia = {
  slug: string; // endereço da página (não use espaços nem acentos)
  nome: string;
  cor: string; // cor-tema (do espectro da cromoterapia)
  corSentido: string; // o que essa cor representa
  eyebrow: string; // rótulo curto acima do título
  resumo: string; // uma frase — aparece no card
  pergunta: string; // pergunta reflexiva do Marco (vira destaque)
  oQueE: string[]; // parágrafos explicando o que é
  apoia: string[]; // "pode apoiar em..." (lista)
  comoFunciona: string; // como acontece na prática
  metaTitle: string; // título que aparece na aba do navegador e no Google
  metaDescription: string; // resumo que o Google mostra na busca
  faq?: { pergunta: string; resposta: string }[]; // dúvidas específicas
};

export const terapias: Terapia[] = [
  {
    slug: "hipnose-clinica",
    nome: "Hipnose Clínica",
    cor: "#3e6b8f",
    corSentido: "azul · foco e calma",
    eyebrow: "Estado de foco profundo",
    resumo:
      "Um estado natural de relaxamento e concentração para acessar padrões que sustentam hábitos e emoções.",
    pergunta:
      "Imagine poder silenciar aquela voz que te sabota e plantar no lugar pensamentos que te fortalecem.",
    oQueE: [
      "Muitas pessoas associam hipnose a palco ou entretenimento. A hipnose clínica é totalmente diferente: é um estado natural de relaxamento profundo e foco concentrado, no qual a mente fica mais aberta a sugestões terapêuticas positivas.",
      "Você não perde o controle. Permanece consciente o tempo todo e apenas acessa um nível mais tranquilo da mente — aquele em que guardamos memórias, crenças e padrões que orientam boa parte do que sentimos e fazemos.",
    ],
    apoia: [
      "Ansiedade, estresse e momentos de tensão",
      "Medos e receios (alturas, dirigir, falar em público)",
      "Hábitos que a pessoa deseja mudar",
      "Preparação para provas, concursos e apresentações",
      "Qualidade do sono e sensação de bem-estar",
    ],
    comoFunciona:
      "A sessão começa com uma conversa para entender o seu momento. Em seguida, com técnicas de respiração e relaxamento guiado, você chega a um estado calmo e concentrado, no seu ritmo. Tudo é conduzido em um espaço seguro, sem julgamentos, e sempre respeitando seus limites.",
    metaTitle:
      "Hipnose Clínica em [cidade] | Despertar PΨ — Marco Sadério",
    metaDescription:
      "Hipnose clínica como prática integrativa de bem-estar: relaxamento profundo e foco para apoiar ansiedade, hábitos e qualidade de vida. Presencial e online.",
    faq: [
      {
        pergunta: "Vou perder o controle ou revelar segredos?",
        resposta:
          "Não. Na hipnose clínica você permanece consciente e no comando o tempo todo. É um estado parecido com aquela concentração de quando lemos um bom livro e o mundo em volta some. Você só faz e fala o que quiser.",
      },
      {
        pergunta: "E se eu não conseguir ser hipnotizado?",
        resposta:
          "A maioria das pessoas entra tranquilamente nesse estado, porque ele é natural — todos nós passamos por ele várias vezes ao dia. A condução é feita no seu ritmo, sem pressa.",
      },
    ],
  },
  {
    slug: "reprogramacao-mental",
    nome: "Reprogramação Mental",
    cor: "#3f8a80",
    corSentido: "turquesa · renovação",
    eyebrow: "Novos padrões internos",
    resumo:
      "Substituir crenças limitantes por novos entendimentos que apoiam crescimento e equilíbrio.",
    pergunta:
      "Quais pensamentos repetidos estão te bloqueando — e como seria a vida se fossem substituídos por ideias de realização?",
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
      "A partir de uma conversa inicial, identificamos juntos as crenças que hoje limitam você. Com técnicas de relaxamento e sugestão positiva, trabalhamos para firmar novos entendimentos, no seu tempo e de acordo com o que faz sentido para a sua vida.",
    metaTitle: "Reprogramação Mental em [cidade] | Despertar PΨ",
    metaDescription:
      "Reprogramação mental: um processo de bem-estar para reconhecer crenças limitantes e firmar novos padrões de autoconfiança e equilíbrio. Presencial e online.",
  },
  {
    slug: "pnl",
    nome: "PNL — Programação Neurolinguística",
    cor: "#cf9640",
    corSentido: "âmbar · clareza",
    eyebrow: "Linguagem e resultados",
    resumo:
      "Como pensamentos, palavras e emoções moldam resultados — e como criar novas rotas para seus objetivos.",
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
      "Em conversa, mapeamos os padrões de linguagem e de pensamento ligados ao que você quer alcançar. A partir daí, praticamos novas formas de comunicar e de interpretar situações, com exercícios simples que você pode levar para o dia a dia.",
    metaTitle: "PNL — Programação Neurolinguística em [cidade] | Despertar PΨ",
    metaDescription:
      "PNL como prática integrativa: reconhecer padrões de linguagem e pensamento para ganhar clareza, confiança e comunicação. Atendimento presencial e online.",
  },
  {
    slug: "regressao-de-memorias",
    nome: "Regressão de Memórias",
    cor: "#48507e",
    corSentido: "índigo · profundidade",
    eyebrow: "A raiz no passado",
    resumo:
      "Acessar lembranças que ainda influenciam o presente para ressignificá-las com segurança.",
    pergunta:
      "E se aquilo que mais te trava hoje tivesse origem em um episódio esquecido — e você pudesse finalmente se libertar dele?",
    oQueE: [
      "Nossa mente guarda muito do que vivemos, mesmo o que esquecemos conscientemente. Muitas vezes, incômodos e bloqueios do presente têm origem em lembranças antigas.",
      "A regressão de memórias é uma técnica para acessar essas recordações e ressignificá-las, trazendo alívio e clareza. Não se trata de reviver a dor, e sim de reencontrar a lembrança para observá-la de um lugar seguro.",
    ],
    apoia: [
      "Reconhecer a origem de medos e inseguranças",
      "Compreender padrões que se repetem em relacionamentos",
      "Ressignificar lembranças dolorosas do passado",
      "Mais clareza sobre a própria história",
    ],
    comoFunciona:
      "Depois de uma conversa de acolhimento, você é conduzido a um estado de relaxamento no qual pode acessar a lembrança com segurança e distanciamento. A condução é cuidadosa e respeita totalmente o seu ritmo e o seu conforto.",
    metaTitle: "Regressão de Memórias em [cidade] | Despertar PΨ",
    metaDescription:
      "Regressão de memórias: prática de autoconhecimento para acessar e ressignificar lembranças que influenciam o presente, com segurança. Presencial e online.",
    faq: [
      {
        pergunta: "Vou reviver traumas e sofrer de novo?",
        resposta:
          "O trabalho é conduzido para que você observe a lembrança de um lugar seguro, com distanciamento, e não para reviver a dor. O objetivo é justamente trazer alívio e uma nova compreensão.",
      },
    ],
  },
  {
    slug: "regressao-ao-utero-materno",
    nome: "Regressão ao Útero Materno",
    cor: "#b7657a",
    corSentido: "rosa · acolhimento",
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
      "Em um estado de relaxamento profundo e guiado, acessamos com delicadeza essas primeiras impressões. Todo o processo é conduzido com cuidado, no seu tempo, dentro de um espaço seguro e sem julgamentos.",
    metaTitle: "Regressão ao Útero Materno em [cidade] | Despertar PΨ",
    metaDescription:
      "Regressão ao útero materno: prática de autoconhecimento para acolher inseguranças ligadas ao período inicial da vida, com segurança. Presencial e online.",
  },
  {
    slug: "vidas-passadas",
    nome: "Regressão a Vidas Passadas",
    cor: "#6b4e9e",
    corSentido: "violeta · intuição",
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
      "A partir de um relaxamento guiado, você acessa imagens e sensações que podem ser compreendidas de forma simbólica ou literal — a escolha é sempre sua. O propósito é sempre o autoconhecimento e o alívio, com respeito total às suas crenças.",
    metaTitle: "Regressão a Vidas Passadas em [cidade] | Despertar PΨ",
    metaDescription:
      "Regressão a vidas passadas: ferramenta de autoconhecimento conduzida com respeito às suas crenças, para compreender bloqueios sem explicação. Presencial e online.",
  },
  {
    slug: "relaxamento-mental",
    nome: "Relaxamento Mental Guiado",
    cor: "#8a79b0",
    corSentido: "lavanda · serenidade",
    eyebrow: "Equilíbrio imediato",
    resumo:
      "Respiração consciente e calma guiada para reduzir o estresse e reencontrar clareza em poucos minutos.",
    pergunta:
      "Já pensou como alguns minutos de relaxamento poderiam mudar totalmente o seu dia?",
    oQueE: [
      "Vivemos num mundo acelerado, em que a mente dificilmente descansa. O relaxamento mental guiado combina respiração consciente, concentração e técnicas de calma para trazer equilíbrio imediato.",
      "É simples e poderoso: em poucos minutos, o corpo reduz a tensão e a mente reencontra clareza.",
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
    metaTitle: "Relaxamento Mental Guiado em [cidade] | Despertar PΨ",
    metaDescription:
      "Relaxamento mental guiado: respiração consciente e calma para reduzir estresse, melhorar o sono e reencontrar clareza. Prática integrativa, presencial e online.",
  },
  {
    slug: "reiki",
    nome: "Reiki",
    cor: "#4e7a5e",
    corSentido: "verde · equilíbrio",
    eyebrow: "Energia e equilíbrio",
    resumo:
      "Terapia energética japonesa, reconhecida pela OMS como prática integrativa, pela imposição das mãos.",
    pergunta:
      "E se o equilíbrio que você procura pudesse começar por um profundo momento de acolhimento?",
    oQueE: [
      "O Reiki é uma terapia energética de origem japonesa, reconhecida pela Organização Mundial da Saúde (OMS) como prática integrativa. A aplicação é feita pela imposição das mãos, sem necessidade de contato físico direto.",
      "Ele atua em diferentes camadas: no corpo, favorecendo o relaxamento; nas emoções, trazendo acolhimento; e na mente, acalmando os pensamentos. Muitas vezes um incômodo físico se relaciona a uma emoção, e o Reiki trabalha justamente essa ligação.",
    ],
    apoia: [
      "Relaxamento profundo e alívio de tensões",
      "Equilíbrio em momentos de ansiedade e cansaço",
      "Sensação de acolhimento e segurança interior",
      "Clareza mental e serenidade",
    ],
    comoFunciona:
      "Você permanece confortavelmente deitado ou sentado, vestido, enquanto conduzo a aplicação pela imposição das mãos. É um momento de descanso profundo — muitas pessoas relatam uma sensação de leveza e paz ao final.",
    metaTitle: "Reiki em [cidade] | Despertar PΨ — Terapia Integrativa",
    metaDescription:
      "Reiki, prática integrativa reconhecida pela OMS: relaxamento profundo e equilíbrio pela imposição das mãos. Atendimento presencial e online.",
  },
  {
    slug: "cromoterapia",
    nome: "Cromoterapia",
    cor: "#c79a54",
    corSentido: "o espectro das cores",
    eyebrow: "O poder das cores",
    resumo:
      "Cada cor emite vibrações que influenciam corpo e emoções. Usamos a luz para restaurar o equilíbrio.",
    pergunta: "Você já reparou como certas cores mudam o seu humor? Imagine usar isso como terapia.",
    oQueE: [
      "As cores têm poder. Cada uma emite vibrações que influenciam nosso corpo e nossas emoções. A cromoterapia utiliza luzes coloridas e ambientes específicos para favorecer o equilíbrio.",
      "É impressionante como a cor de um ambiente pode alterar o nosso estado de espírito — e é justamente isso que a cromoterapia coloca a favor do seu bem-estar.",
    ],
    apoia: [
      "Azul — acalmar mente e corpo",
      "Verde — equilibrar emoções e trazer serenidade",
      "Amarelo — despertar alegria e clareza mental",
      "Violeta — estimular a intuição e a espiritualidade",
      "Vermelho — estimular energia e vitalidade",
    ],
    comoFunciona:
      "Usamos luzes e ambientes com cores escolhidas de acordo com o que você precisa naquele momento — mais calma, mais energia ou mais clareza. A cromoterapia costuma acompanhar outras práticas, potencializando o relaxamento.",
    metaTitle: "Cromoterapia em [cidade] | Despertar PΨ",
    metaDescription:
      "Cromoterapia: o uso das cores e da luz como prática integrativa para favorecer calma, equilíbrio e bem-estar. Atendimento presencial e online.",
  },
];

// Busca rápida por slug (usada pelas páginas de terapia).
export function getTerapia(slug: string): Terapia | undefined {
  return terapias.find((t) => t.slug === slug);
}
