/*
  ============================================================
  DADOS DA CLÍNICA — Despertar PΨ
  ============================================================
  Este é o arquivo mais importante para você editar.
  Tudo aqui aparece no site inteiro. Trocar o telefone aqui,
  por exemplo, muda o número em TODOS os botões de WhatsApp,
  no rodapé e nos dados que o Google lê.

  COMO EDITAR: mude apenas o texto que estiver entre aspas "..."
  Não apague as aspas, as vírgulas nem os nomes à esquerda dos
  dois-pontos. Em caso de dúvida, veja o arquivo COMO-EDITAR.md.

  ⚠️ Os campos marcados com "PREENCHER" precisam dos dados reais
  antes de o site ir ao ar.
  ============================================================
*/

export const clinica = {
  // Nome como aparece nos títulos e no topo do site.
  nome: "Despertar PΨ",
  // Versão por extenso (usada onde o símbolo Ψ não fica bom, ex.: Google).
  // Uma palavra só (como o domínio) para o Google não separar em "para psi".
  nomeExtenso: "Despertar ParaPSI",
  // Nome EXATAMENTE como está no Google Meu Negócio (usado nos dados
  // estruturados da empresa). Se mudar lá, mude aqui também.
  nomeNoGoogle: "Despertar ParaPSI - Parapsicologia Clínica",
  // Frase curta que descreve a atividade (aparece ao lado do nome).
  atividade: "Parapsicologia Clínica e Terapias Integrativas",

  // — Profissional —
  profissional: {
    nome: "Marco Sadério",
    nomeCompleto: "Marco Antonio Sadério Pereira",
    titulo: "Parapsicólogo Clínico",
    // Formação e certificações. PREENCHER com os dados reais do Marco.
    formacao: "PREENCHER: instituição e ano de formação",
    // Lista de certificações/qualificações (uma por linha, entre aspas).
    credenciais: [
      "PREENCHER: ex. Formação em Hipnose Clínica",
      "PREENCHER: ex. Practitioner em PNL",
      "PREENCHER: ex. Reiki nível ___",
    ],
  },

  // — Contato —
  // Telefone com DDD, só números, com o 55 do Brasil na frente.
  // (47) 99145-1945  ->  5547991451945
  whatsappNumero: "5547991451945",
  // Como o telefone aparece escrito para o visitante.
  telefoneExibicao: "(47) 99145-1945",
  email: "despertarparapsi@gmail.com",

  // — Endereço — PREENCHER. É o dado mais importante para o SEO local
  // (aparecer no Google Maps e em buscas "parapsicólogo em [cidade]").
  endereco: {
    logradouro: "Avenida Getúlio Vargas, 567",
    complemento: "", // sala/andar, se houver
    bairro: "Bucarein",
    cidade: "Joinville",
    estado: "SC",
    cep: "89202-205",
    // Coordenadas do pino da clínica no Google Maps (dados para o Google).
    latitude: "-26.31258",
    longitude: "-48.8453314",
    // Ponto de INÍCIO do tour 360° no quadro da página de contato: a
    // entrada da clínica (portão do 567), o mesmo ponto do link
    // "tourVirtual" abaixo. Os três valores vêm desse link:
    // .../maps/@LATITUDE,LONGITUDE,3a,75y,DIREÇÃOh,...
    tourLatitude: "-26.3126306",
    tourLongitude: "-48.8453667",
    tourDirecao: "75.8", // para onde a câmera aponta ao abrir (graus)
    // Link para o botão "Como chegar" (perfil do Google do Marco).
    linkMapa: "https://share.google/0zdUJUY7Ejjeo3TGY",
  },

  // Tour virtual 360° da clínica (Street View do Google). Deixe "" para esconder.
  tourVirtual:
    "https://www.google.com/maps/@-26.3126306,-48.8453667,3a,75y,75.8h,90t/data=!3m4!1e1!3m2!1sCIABIhDEq-lH6Kyqiju8vcWdMH8w!2e10",
  tourVirtualRotulo: "Conheça nossa clínica em 360°",
  tourVirtualDescricao: "Abre o tour no Google Maps em uma nova aba.",

  // Atende presencial, online, ou os dois? true = sim.
  atendePresencial: true,
  atendeOnline: true,
  // Plataforma do atendimento online.
  plataformaOnline: "Google Meet",

  // — Horários de atendimento —
  // Cada linha: dia(s) e horário. Deixe a lista vazia [] para esconder.
  horarios: [
    { dias: "Segunda a sexta", horario: "8h às 18h" },
  ],

  // — Redes sociais —
  // Cole o link completo. Deixe "" para esconder o ícone daquela rede.
  // (Facebook, YouTube e TikTok: PREENCHER quando o Marco enviar os links.)
  redes: {
    instagram: "https://www.instagram.com/despertarparapsi/",
    facebook: "https://www.facebook.com/despertarparapsi",
    youtube: "https://www.youtube.com/@despertarparapsi",
    tiktok: "https://www.tiktok.com/@despertarparapsi",
  },

  // — Dados fiscais para o rodapé —
  // Atende como pessoa física (sem CNPJ). Deixe vazio "".
  cnpj: "",

  // — Domínio final do site —
  // Usado para links absolutos e para o Google.
  siteUrl: "https://despertarparapsi.com.br",

  // — Aviso legal (disclaimer) — aparece no rodapé e nas páginas de terapia.
  // Importante para deixar claro que é prática complementar.
  disclaimer:
    "As terapias oferecidas são práticas integrativas e complementares de bem-estar e autoconhecimento. Não constituem tratamento médico ou psicológico, não fazem diagnóstico e não substituem o acompanhamento de profissionais de saúde, tampouco a interrupção de tratamentos ou medicações em curso.",
} as const;

// — Interruptores de funcionalidades ainda em avaliação com o Marco —
// Troque false por true para ligar quando ele decidir.
export const funcionalidades = {
  blog: false, // seção de artigos
  agendaOnline: false, // cliente escolhe horário sozinho (Cal.com/Calendly)
  depoimentos: true, // seção de depoimentos de clientes
} as const;
