# Como editar o site — Guia do Marco 🌟

Bem-vindo! Este guia foi escrito para você mexer no seu site **sem
precisar saber programar**. Você vai conseguir trocar textos, telefone,
adicionar depoimentos e mudar fotos sozinho.

> **A regra de ouro:** mude apenas o texto que estiver **entre aspas
> `"assim"`**. Não apague aspas, vírgulas nem os nomes antes dos
> dois-pontos. Se seguir isso, nada quebra.

---

## Onde tudo fica

Todo o texto do site está numa pasta chamada **`src/content`**. São 5
arquivos, cada um com uma parte do conteúdo:

| Arquivo | O que você muda ali |
|---|---|
| `clinica.ts` | Telefone, e-mail, endereço, horários, redes sociais, aviso legal |
| `terapias.ts` | As 9 terapias (textos, benefícios, dúvidas) |
| `depoimentos.ts` | Depoimentos de clientes |
| `faq.ts` | Perguntas frequentes |
| `quiz.ts` | As perguntas do teste "qual terapia é ideal para você" |

---

## Como editar (o passo a passo)

Você vai editar pelo **GitHub**, no navegador. Não precisa instalar nada.

1. Entre no site do repositório (o Gabriel te manda o link e te adiciona).
2. Clique na pasta **`src`** e depois em **`content`**.
3. Clique no arquivo que quer mudar (ex.: `clinica.ts`).
4. Clique no **lápis** ✏️ (canto superior direito) para editar.
5. Mude o texto entre aspas.
6. Desça até o fim e clique no botão verde **"Commit changes"**.
7. Pronto! Em cerca de **1 minuto** a mudança aparece no site sozinha.

> Errou? Sem pânico. O GitHub guarda todas as versões. O Gabriel
> consegue voltar atrás com um clique.

---

## Receitas rápidas

### Trocar o telefone / WhatsApp
No arquivo `clinica.ts`, mude estas duas linhas:
```
whatsappNumero: "5547991451945",   ← só números, com 55 na frente
telefoneExibicao: "(47) 99145-1945",  ← como aparece escrito
```
O número muda no site **inteiro** de uma vez.

### Preencher o endereço
No `clinica.ts`, procure o bloco `endereco` e troque cada campo que
começa com **"PREENCHER"**. O endereço é muito importante para o site
aparecer no Google quando alguém procurar um profissional na sua cidade.

### Mudar os horários de atendimento
No `clinica.ts`, no bloco `horarios`, troque os textos "PREENCHER".

### Adicionar um depoimento de cliente
No arquivo `depoimentos.ts`:
1. Copie um bloco inteiro, das chaves `{` até `},`.
2. Cole logo abaixo.
3. Preencha `nome`, `texto` e a `terapia`.
4. **Importante:** troque `autorizado: false` por `autorizado: true`
   — só assim ele aparece no site. Só publique com autorização da pessoa.

> **Pedindo autorização (LGPD):** mande algo como *"Posso publicar seu
> depoimento no meu site? Pode ser só com suas iniciais, se preferir.
> Você autoriza?"* e guarde a resposta.

### Trocar uma foto
1. Coloque o arquivo da foto na pasta **`public/fotos`** (peça ajuda ao
   Gabriel na primeira vez).
2. Onde hoje aparece um bloco cinza escrito "Foto...", é só informar o
   caminho da imagem. O Gabriel deixa isso pronto — depois você só troca
   o arquivo com o mesmo nome.

### Ligar ou desligar seções
No fim do `clinica.ts` existe um bloco `funcionalidades`:
```
blog: false,          ← troque para true quando quiser um blog
agendaOnline: false,  ← agenda para o cliente marcar sozinho
depoimentos: true,    ← mostrar/esconder a seção de depoimentos
```

---

## O que você NÃO deve mexer

- Qualquer coisa fora da pasta `src/content`.
- As palavras **antes** dos dois-pontos (ex.: `nome:`, `slug:`).
- O campo `slug` das terapias — ele é o endereço da página no Google.
- Aspas, vírgulas, colchetes `[ ]` e chaves `{ }`.

---

## ⚖️ Um cuidado importante com as palavras

Como as terapias são práticas **complementares**, evite no site palavras
como **"tratamento", "cura", "curar", "paciente"** ou promessas de
resultado. Prefira **"apoio", "acompanhamento", "bem-estar",
"cliente"**. Isso protege você juridicamente e passa mais seriedade.

Qualquer dúvida, fale com o Gabriel. Boas edições! ✨
