# Backlog — Despertar PΨ

Lista de pendências e próximos passos. Ordenado por prioridade.

---

## 🔴 Importante — resolver em breve

### 1. Migrar a hospedagem do Vercel para o Netlify (uso comercial)
**Por quê:** o plano gratuito (Hobby) do Vercel é oficialmente **só para uso
pessoal, não comercial**. O site da clínica é uso comercial, então está fora
dos termos. O Netlify (também grátis) **permite uso comercial**.

**Esforço:** baixo.
- Do meu lado (Claude): ~30–45 min — conectar o repositório ao Netlify,
  ajustar config, remover o Speed Insights (é específico do Vercel), testar o
  build e o formulário.
- Do Marco: ~2 min — trocar 1 vez o registro DNS no Registro.br (o Netlify
  informa o novo valor; mesma tela de antes).
- Propagação: minutos a poucas horas. O site fica no ar o tempo todo.

**Alternativa:** ficar no Vercel e assinar o plano Pro (~US$ 20/mês ≈ R$ 110/mês).
Sem migração, mas com custo. Recomendação: **migrar para o Netlify** (grátis e
regularizado).

---

## 🟡 Aguardando material do Marco

Cobrar estes itens com o Marco:

- [ ] **Formação e certificações** (instituição, ano, níveis de Reiki/PNL/hipnose) — para a página "Sobre" e o rodapé
- [ ] **História pessoal** — um parágrafo sobre por que escolheu a parapsicologia (o texto atual da página "Sobre" é provisório)
- [ ] **Depoimentos reais** — 3 a 5, com nome (ou iniciais) e autorização de uso (LGPD)
- [ ] **Links das redes sociais** — Facebook, YouTube e TikTok (o Instagram já está no ar; os campos já estão prontos em `clinica.ts`, só colar os links)
- [ ] **Fotos específicas por terapia** — o Marco vai procurar uma foto para cada terapia (hoje todas usam a foto do consultório)
- [ ] **Redesign do quiz** — o Marco vai propor um novo fluxo. Problemas que ele apontou: não faz sentido sugerir hipnose/regressão logo de cara (assusta, é um processo). Ajuste de segurança já aplicado: a "regressão a vidas passadas" saiu das sugestões automáticas e os caminhos de "receio/primeira vez" levam a terapias suaves (Reiki, relaxamento). Aguarda a visão dele para o redesenho completo.

---

## 🟢 Melhorias que podemos fazer quando quiserem

- [ ] **Google Meu Negócio** — otimizar o perfil (nome, categoria, descrição, fotos, **link do site**) e **apagar o perfil duplicado**. É o que mais traz cliente presencial e resolve o problema de não aparecer bem na busca por "despertar para psi".
- [ ] **E-mail profissional** `@despertarparapsi.com.br` — via Zoho Mail (grátis). Passo a passo próprio.
- [ ] **Search Console + sitemap** — cadastrar o site no Google Search Console e enviar o sitemap, para acelerar a indexação.
- [ ] **Seção de frases** — o arquivo tem outros conjuntos ("200 filosóficas", "300 pílulas de luz", etc.). Hoje o site usa as ~157 "cápsulas". Dá para ampliar/variar depois.

---

## ✅ Já resolvido

- Site no ar em https://despertarparapsi.com.br (com HTTPS)
- Identidade verde do logo, fotos reais, ícone (lótus) na aba
- Publicação automática (commit → deploy)
- Feedbacks do Marco (rodada 1): fontes maiores, logo maior, botão "Agendar" verde, textos revisados, cápsula aleatória, redes sociais preparadas
