# Manutenção & Operação — Guia do Gabriel 🛠️

Guia técnico do site da **Despertar PΨ**. Cobre rodar localmente,
publicar na Vercel, apontar o domínio, configurar os leads, o Google e
os analytics.

Stack: **Next.js 16 (App Router) + TypeScript + Tailwind v4**. Site
estático (SSG), hospedado na **Vercel** (plano grátis).

---

## 1. Rodar no seu computador

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:3000
npm run build      # gera a versão de produção (testa se está tudo ok)
npm start          # serve a versão de produção localmente
```

Estrutura que importa:
```
src/
  app/            páginas (cada pasta = um endereço do site)
    terapias/[slug]/   template que gera as 9 páginas de terapia
    api/contato/       recebe o formulário (e-mail + planilha)
  components/      peças visuais reutilizáveis
  content/         ⭐ TODO o texto editável (é o que o Marco mexe)
  lib/             utilitários (whatsapp, seo, analytics, helpers)
public/fotos/     imagens (coloque as fotos aqui)
```

Regras do projeto:
- Nenhum texto de conteúdo dentro de componente — tudo em `src/content`.
- Cores e fontes são tokens em `src/app/globals.css`.
- Adicionar uma terapia = adicionar um item em `content/terapias.ts`.
  A página, o card, o sitemap e o SEO saem automáticos.

---

## 2. Subir para o GitHub

1. Crie um repositório **privado** no GitHub (ex.: `despertar-psi`).
2. Na pasta do projeto:
```bash
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/despertar-psi.git
git push -u origin main
```
> O `.gitignore` já ignora `node_modules`, `.next` e `.env*`. As chaves
> secretas nunca vão para o GitHub.

---

## 3. Publicar na Vercel (grátis)

1. Entre em https://vercel.com e faça login **com o GitHub**.
2. **Add New > Project** e importe o repositório.
3. A Vercel detecta Next.js sozinha. Clique em **Deploy**.
4. Em ~1 min o site está no ar em `algo.vercel.app`.

A partir daí: todo `git push` para a `main` **republica sozinho**. E o
Marco editando pelo GitHub aciona esse mesmo fluxo.

### Variáveis de ambiente
Em **Project Settings > Environment Variables**, adicione as chaves do
arquivo `.env.example` (veja seções 5, 6 e 7). Depois de adicionar,
faça um **Redeploy** para elas valerem.

---

## 4. Apontar o domínio próprio

1. Na Vercel: **Project Settings > Domains > Add** e digite o domínio
   (ex.: `despertarparapsi.com.br`).
2. A Vercel mostra os registros DNS a configurar. No painel de **onde o
   domínio foi registrado** (Registro.br, GoDaddy, etc.):
   - Domínio raiz (`dominio.com.br`): registro **A** apontando para o IP
     que a Vercel indicar.
   - `www`: registro **CNAME** apontando para `cname.vercel-dns.com`.
3. Propaga em minutos a algumas horas. O **HTTPS é automático**.
4. Depois, atualize `siteUrl` em `src/content/clinica.ts` para o domínio
   final e faça commit.

---

## 5. Leads por e-mail (Resend)

1. Crie conta grátis em https://resend.com (3.000 e-mails/mês).
2. Gere uma **API Key** e, de preferência, verifique um domínio para o
   remetente (ex.: `contato@despertarparapsi.com.br`).
3. Na Vercel, defina:
   - `RESEND_API_KEY`
   - `CONTATO_EMAIL_DESTINO` (e-mail do Marco)
   - `CONTATO_EMAIL_REMETENTE` (remetente verificado)

Sem isso, o formulário ainda funciona: ele apenas abre o WhatsApp já
preenchido (a captura por e-mail/planilha é um extra).

---

## 6. Leads na planilha do Google (CRM simples)

1. Crie uma Planilha Google. Na primeira linha:
   `Quando | Nome | Telefone | Interesse | Mensagem`.
2. Menu **Extensões > Apps Script** e cole:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([d.quando, d.nome, d.telefone, d.interesse, d.mensagem]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Implantar > Nova implantação > Tipo: App da Web**.
   - Executar como: **você**.
   - Quem tem acesso: **Qualquer pessoa**.
4. Copie a URL gerada e defina `PLANILHA_WEBHOOK_URL` na Vercel.

Cada lead vira uma linha — é o CRM do Marco (contatou / virou cliente?).

---

## 7. Analytics e SEO

- **GA4:** crie a propriedade, pegue o ID `G-XXXX` e defina
  `NEXT_PUBLIC_GA_ID`. Só carrega após o consentimento de cookies.
  Eventos já disparados: `clique_whatsapp` (com a origem),
  `envio_formulario`, `quiz_concluido`.
- **Meta Pixel:** defina `NEXT_PUBLIC_META_PIXEL_ID` para remarketing.
- **Google Search Console** (https://search.google.com/search-console):
  adicione o domínio e envie `https://SEU_DOMINIO/sitemap.xml`.
- **Rich Results Test** (https://search.google.com/test/rich-results):
  valide `LocalBusiness` e `FAQPage` de algumas páginas.

### Google Meu Negócio (o que mais traz cliente presencial)
Crie/otimize o perfil em https://business.google.com com o **mesmo**
nome, endereço e telefone do site (categoria: ex. "Terapeuta
holístico"), fotos e link para o site. É o que coloca a clínica no mapa
e coleta avaliações.

---

## 8. Trocar as fotos

Coloque os arquivos em `public/fotos/` e, no componente `PhotoSlot` da
página, informe o `src` (ex.: `src="/fotos/marco.jpg"`). Enquanto não
houver `src`, aparece um placeholder elegante. Use imagens em boa
resolução — o `next/image` gera WebP/AVIF e redimensiona sozinho.

---

## 9. Checklist antes de considerar "no ar"

- [ ] Endereço, horários e CNPJ preenchidos em `clinica.ts`
- [ ] Formação e história do Marco em `sobre` / `clinica.ts`
- [ ] Fotos reais no lugar dos placeholders
- [ ] `siteUrl` com o domínio final
- [ ] Variáveis de ambiente na Vercel + redeploy
- [ ] `npm run build` sem erros
- [ ] Testar o formulário ponta a ponta (e-mail chega? linha na planilha?)
- [ ] Testar os botões de WhatsApp no **celular**
- [ ] Sitemap enviado no Search Console
- [ ] Google Meu Negócio criado
