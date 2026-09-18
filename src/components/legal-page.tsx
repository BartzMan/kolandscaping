import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  lede,
  updated,
  children,
}: {
  title: string;
  lede: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="pb-24 lg:pb-0">
      <section className="border-b border-border bg-olive-deep text-cream">
        <div className="mx-auto max-w-3xl px-5 pt-36 pb-12">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-cream/70">
            <Link to="/" className="hover:text-cream">
              Home
            </Link>
            <span className="mx-2 text-cream/40">/</span>
            <span className="text-cream">{title}</span>
          </nav>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/60">Legal</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] font-medium sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">{lede}</p>
          <p className="mt-5 text-xs text-cream/50">Last updated {updated}</p>
        </div>
      </section>
      <article className="legal-doc mx-auto max-w-3xl px-5 py-14">{children}</article>
    </main>
  );
}
