import { Link } from "@tanstack/react-router";

type Crumb = { href?: string; label: string };

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden bg-olive-deep text-cream">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/32 to-ink/10" />
      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-5 pb-14 pt-36">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-cream/70">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && <span className="mx-2 text-cream/40">/</span>}
                {c.href ? (
                  <Link to={c.href} className="hover:text-cream">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-cream">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-medium sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
