/*
  ============================================================
  CONTATOS DO SITE — Despertar ParaPSI
  ============================================================
  Recebe cada contato enviado pelo formulário do site e:
    1) grava uma linha na planilha (Data, Nome, WhatsApp, Interesse, Mensagem)
    2) envia um e-mail de aviso para despertarparapsi@gmail.com

  COMO INSTALAR (na conta Google da clínica):
    1. sheets.google.com → nova planilha em branco → nome "Contatos do site".
    2. Menu Extensões → Apps Script → apague o que estiver lá →
       cole TODO este arquivo → clique no ícone de salvar.
    3. Implantar → Nova implantação → engrenagem → "App da Web":
         Executar como: Eu
         Quem tem acesso: Qualquer pessoa
       → Implantar → Autorizar acesso → escolher a conta.
       Aviso "O Google não verificou este app" é normal (o script é seu):
       Avançado → Acessar (não seguro) → Permitir.
    4. Copie o "URL do app da Web" (termina em /exec) e envie ao Gabriel.

  ATENÇÃO: se alterar este código depois, use Implantar → Gerenciar
  implantações → editar (lápis) → Versão: "Nova versão". Isso mantém
  o mesmo URL. Uma "Nova implantação" gera um URL diferente, e aí o
  site precisa ser atualizado.
  ============================================================
*/

// Responde "ok" SOMENTE depois que a linha foi gravada na planilha.
// Qualquer erro na gravação responde "erro" (o site então não mostra
// "Recebemos o seu contato"). Falha só no e-mail NÃO desfaz o "ok":
// o contato já está salvo na planilha.
function doPost(e) {
  var nome, tel, interesse, msg, quando;
  try {
    var aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (aba.getLastRow() === 0) {
      aba.appendRow(["Data", "Nome", "WhatsApp/telefone", "Interesse", "Mensagem"]);
    }
    var d = JSON.parse(e.postData.contents);
    nome = limpo(d.nome, 120);
    tel = limpo(d.telefone, 40);
    if (!nome || !tel) return ContentService.createTextOutput("ignorado");
    interesse = limpo(d.interesse, 120);
    msg = limpo(d.mensagem, 2000);
    quando = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm");
    aba.appendRow([quando, nome, tel, interesse, msg]);
    SpreadsheetApp.flush(); // garante que a linha foi escrita
  } catch (err) {
    return ContentService.createTextOutput("erro");
  }
  try {
    MailApp.sendEmail(
      "despertarparapsi@gmail.com",
      "Novo contato pelo site: " + nome,
      "Recebido em " + quando + "\n\n" +
      "Nome: " + nome + "\n" +
      "WhatsApp/telefone: " + tel + "\n" +
      "Interesse: " + (interesse || "não informado") + "\n" +
      "Mensagem: " + (msg || "(sem mensagem)")
    );
  } catch (err) {
    // e-mail falhou, mas o contato está salvo na planilha
  }
  return ContentService.createTextOutput("ok");
}

// Corta textos longos e impede que alguém injete fórmulas na planilha.
function limpo(v, max) {
  v = String(v || "").trim().slice(0, max);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
