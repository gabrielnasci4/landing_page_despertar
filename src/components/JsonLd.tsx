/*
  Insere os "dados estruturados" na página, no formato que o
  Google entende. Não aparece nada na tela.
*/
export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
