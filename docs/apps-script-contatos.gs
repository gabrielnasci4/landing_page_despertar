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

function doPost(e) {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (aba.getLastRow() === 0) {
    aba.appendRow(["Data", "Nome", "WhatsApp/telefone", "Interesse", "Mensagem"]);
  }
  try {
    var d = JSON.parse(e.postData.contents);
    var nome = limpo(d.nome, 120), tel = limpo(d.telefone, 40);
    if (!nome || !tel) return ContentService.createTextOutput("ignorado");
    var interesse = limpo(d.interesse, 120), msg = limpo(d.mensagem, 2000);
    var quando = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm");
    aba.appendRow([quando, nome, tel, interesse, msg]);
    MailApp.sendEmail(
      "despertarparapsi@gmail.com",
      "Novo contato pelo site: " + nome,
      "Recebido em " + quando + "\n\n" +
      "Nome: " + nome + "\n" +
      "WhatsApp/telefone: " + tel + "\n" +
      "Interesse: " + (interesse || "não informado") + "\n" +
      "Mensagem: " + (msg || "(sem mensagem)")
    );
  } catch (err) {}
  return ContentService.createTextOutput("ok");
}

// Corta textos longos e impede que alguém injete fórmulas na planilha.
function limpo(v, max) {
  v = String(v || "").trim().slice(0, max);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}
