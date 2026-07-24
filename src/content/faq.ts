/*
  ============================================================
  PERGUNTAS FREQUENTES (FAQ)
  ============================================================
  Respondem às dúvidas e receios reais de quem está pensando em
  marcar. Também aparecem no Google como perguntas expansíveis
  (o que ajuda o site a ser encontrado).

  COMO EDITAR: mude o texto entre aspas. Para acrescentar uma
  pergunta, copie um bloco { pergunta: "...", resposta: "..." },
  com a vírgula no final, e cole abaixo.
  ============================================================
*/

export type PerguntaFrequente = { pergunta: string; resposta: string };

export const faq: PerguntaFrequente[] = [
  {
    pergunta: "Preciso acreditar em algo para as terapias funcionarem?",
    resposta:
      "Não. O trabalho é conduzido com respeito total às suas crenças, sejam elas quais forem. Muitas técnicas, como o relaxamento e a hipnose clínica, se apoiam em estados naturais da mente e não dependem de nenhuma crença específica.",
  },
  {
    pergunta: "As terapias substituem acompanhamento médico ou psicológico?",
    resposta:
      "Não. São práticas integrativas e complementares de bem-estar e autoconhecimento. Não fazem diagnóstico e não substituem o acompanhamento de médicos ou psicólogos, nem a interrupção de tratamentos ou medicações. Quando necessário, o acompanhamento de profissionais de saúde continua essencial.",
  },
  {
    pergunta: "Perco o controle durante a hipnose?",
    resposta:
      "Não. Na hipnose clínica você permanece consciente e no comando o tempo todo. É um estado de concentração e relaxamento parecido com o de quando nos envolvemos num filme e o tempo passa sem percebermos. Você só faz e fala aquilo que quiser.",
  },
  {
    pergunta: "Quantas sessões são necessárias?",
    resposta:
      "Depende de cada pessoa e do que ela busca. Cada atendimento é personalizado, e conversamos sobre isso já no primeiro contato, com transparência e sem compromisso de continuidade.",
  },
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "Boa parte das práticas, como o diálogo terapêutico, a PNL, o relaxamento e a hipnose, pode ser conduzida por videochamada, com a mesma atenção do presencial. Basta um lugar tranquilo e uma conexão estável. Fale com o Marco para saber qual formato faz mais sentido para o seu caso.",
  },
  {
    pergunta: "E se eu não “ver” nada durante uma regressão?",
    resposta:
      "Cada pessoa vivencia o processo de um jeito. Algumas têm imagens nítidas, outras percebem sensações, emoções ou apenas uma compreensão. Todas as formas são válidas, e a condução respeita o seu ritmo, sem forçar nada.",
  },
  {
    pergunta: "Qual o valor e como funciona o pagamento?",
    resposta:
      "Os valores são informados no contato pelo WhatsApp, de acordo com a prática e o formato (presencial ou online). Assim conseguimos entender o seu caso e indicar o melhor caminho para você. O pagamento pode ser feito por dinheiro, Pix ou cartão (via Mercado Pago).",
  },
  {
    pergunta: "As informações que eu compartilhar ficam em sigilo?",
    resposta:
      "Sim. Tudo o que é conversado nos atendimentos é tratado com sigilo e respeito, dentro de um espaço seguro e sem julgamentos.",
  },
];
