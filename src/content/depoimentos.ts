/*
  ============================================================
  DEPOIMENTOS DE CLIENTES
  ============================================================
  Prova social é o que mais aumenta a confiança de quem chega
  ao site. Peça autorização por escrito antes de publicar
  (mensagem pronta no COMO-EDITAR.md).

  COMO ADICIONAR: copie um bloco inteiro { ... }, com a vírgula
  no final, e cole abaixo. Preencha os campos.

  • autorizado: só aparece no site se estiver "true".
  • nome: pode usar só as iniciais se a pessoa preferir (ex. "M. R.").
  • terapia: nome da terapia (opcional).

  Os exemplos abaixo são fictícios, só para você ver o formato.
  Troque pelos depoimentos reais. Enquanto não houver depoimentos
  reais autorizados, deixe a lista assim ou coloque autorizado: false.
  ============================================================
*/

export type Depoimento = {
  nome: string;
  texto: string;
  terapia?: string;
  cidade?: string;
  autorizado: boolean;
};

export const depoimentos: Depoimento[] = [
  {
    nome: "EXEMPLO — troque por um real",
    texto:
      "Cheguei muito ansioso e saí de cada sessão mais leve. O acolhimento do Marco fez toda a diferença no meu processo.",
    terapia: "Hipnose Clínica",
    cidade: "",
    autorizado: false,
  },
  {
    nome: "EXEMPLO — troque por um real",
    texto:
      "Nunca tinha feito nada parecido e fui muito bem recebida. Passei a entender padrões que se repetiam na minha vida.",
    terapia: "Regressão de Memórias",
    cidade: "",
    autorizado: false,
  },
  {
    nome: "EXEMPLO — troque por um real",
    texto:
      "O Reiki me trouxe um descanso que eu não sentia há tempos. Recomendo para quem anda sobrecarregado.",
    terapia: "Reiki",
    cidade: "",
    autorizado: false,
  },
];

// Só os depoimentos autorizados aparecem no site.
export const depoimentosPublicados = depoimentos.filter((d) => d.autorizado);
