import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { areas } from "@/data/areas";
import { site } from "@/data/site";
import { useQuote } from "@/lib/quote-store";
import { asset } from "@/lib/utils";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      {
        title:
          "Landscaping Service Areas | San Tan Valley, Queen Creek & East Valley",
      },
      {
        name: "description",
        content:
          "K&O serves San Tan Valley, Queen Creek, Florence, Apache Junction, and the East Valley. Local landscape maintenance, turf, pavers, and irrigation repair.",
      },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  const openWith = useQuote((s) => s.openWith);

  return (
    <main className="pb-24 lg:pb-0">
      <PageHero
        image={asset("/work/front-trees.jpg")}
        imageAlt="Desert front yard in the East Valley"
        eyebrow="Where we work"
        title="If the lot is in the East Valley, send the address."
        lede="San Tan Valley is home base. Queen Creek, Florence, Apache Junction, and selected Gilbert jobs follow."
        crumbs={[{ href: "/", label: "Home" }, { label: "Areas" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          {areas.map((a) => (
            <article key={a.name} className="rounded-xl border border-border bg-paper p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-olive-soft">{a.zip}</p>
              <h2 className="mt-2 font-display text-3xl text-ink">{a.name}</h2>
              <p className="mt-3 leading-relaxed text-muted">{a.blurb}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-xl bg-olive-deep p-8 text-cream lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="font-display text-3xl">Not sure if you’re in range?</h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/75">
              Text {site.phone} with the street. We’ll say yes, give you a day, or point you to someone who can take it. No runaround.
            </p>
          </div>
          <div className="flex items-end">
            <Button variant="cream" onClick={() => openWith()}>
              Request an estimate
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
