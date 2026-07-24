import Link from "next/link";
import { PsiMark } from "@/components/PsiMark";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center sm:py-32">
      <PsiMark className="h-14 w-14 text-[var(--color-gold)]" />
      <h1 className="mt-8 text-[2rem] leading-tight sm:text-4xl">
        Esta página não foi encontrada.
      </h1>
      <p className="mt-4 text-[var(--color-ink-soft)]">
        O caminho que você procurava não existe ou foi movido. Que tal recomeçar
        pelo início?
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-ember)] px-7 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-ember-deep)]"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
