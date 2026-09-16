import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { useQuote } from "@/lib/quote-store";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Landscaping & Handyman Services in San Tan Valley | K&O" },
      {
        name: "description",
        content:
          "Landscape maintenance, artificial turf, pavers, irrigation repair, yard cleanup, and handyman work in San Tan Valley and the East Valley. Free estimates.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const openWith = useQuote((s) => s.openWith);

  return (
    <main className="pb-24 lg:pb-0">
      <PageHero
        image="/work/front-plantings.jpg"
        imageAlt="Maintained shrubs and gravel along a San Tan Valley sidewalk"
        eyebrow="Services"
        title="Landscaping that holds up. Handyman work that actually gets done."
        lede="Six things we do every week in the East Valley — quoted clearly, finished clean."
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="grid items-center gap-8 overflow-hidden rounded-xl border border-border bg-paper lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={s.image} alt={s.imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="p-6 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-olive-soft">
                  {s.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-3xl text-ink">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{s.description}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-olive hover:underline"
                >
                  {s.title} in San Tan Valley
                </Link>
                <div className="mt-6">
                  <Button onClick={() => openWith(s.title)}>Get a quote</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
