import { clinica } from "@/content/clinica";

/*
  Pequenos ajudantes usados pelo site para lidar com os dados
  da clínica de forma segura — inclusive enquanto alguns campos
  ainda estão como "PREENCHER".
*/

// Um campo ainda não foi preenchido de verdade?
export function pendente(valor: string): boolean {
  return !valor || valor.trim().startsWith("PREENCHER");
}

// Temos o endereço completo? (controla se mostramos endereço/mapa)
export function temEndereco(): boolean {
  const e = clinica.endereco;
  return !pendente(e.logradouro) && !pendente(e.cidade);
}

// Endereço em uma linha, para exibir e para o Google.
export function enderecoLinha(): string {
  const e = clinica.endereco;
  const partes = [
    e.logradouro,
    !pendente(e.complemento) ? e.complemento : "",
    e.bairro,
    e.cidade && e.estado ? `${e.cidade} - ${e.estado}` : e.cidade,
    e.cep,
  ].filter((p) => p && !pendente(p));
  return partes.join(", ");
}

// Cidade/UF para uso em textos de SEO ("em Cidade - UF").
export function cidadeUf(): string {
  const e = clinica.endereco;
  if (pendente(e.cidade)) return "";
  return e.estado && !pendente(e.estado) ? `${e.cidade} - ${e.estado}` : e.cidade;
}

// Formato de atendimento em texto ("presencial e online", etc.).
export function formatoAtendimento(): string {
  if (clinica.atendePresencial && clinica.atendeOnline) return "presencial e online";
  if (clinica.atendePresencial) return "presencial";
  if (clinica.atendeOnline) return "online";
  return "";
}
