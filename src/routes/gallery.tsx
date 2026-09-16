import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { gallery } from "@/data/gallery";
import { useQuote } from "@/lib/quote-store";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Landscaping Project Gallery | K&O San Tan Valley" },
      {
        name: "description",
        content:
          "Turf yards, paver walks, plantings, and desert landscaping by K&O in San Tan Valley and the East Valley. See recent work, then request an estimate.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const openWith = useQuote((s) => s.openWith);
  const item = active !== null ? gallery[active] : null;

  return (
    <main className="pb-24 lg:pb-0">
      <PageHero
        image="/work/backyard-turf.jpg"
        imageAlt="Finished East Valley backyard with turf and hedges"
        eyebrow="Work"
        title="Lots that used to be dust."
        lede="Turf, pavers, plantings, and the weekly work that keeps them looking that way."
        crumbs={[{ href: "/", label: "Home" }, { label: "Work" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setActive(i)}
              className="group overflow-hidden rounded-lg text-left"
            >
              <span className="relative block aspect-[4/5] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </span>
              <span className="mt-3 block font-display text-xl text-ink">{g.title}</span>
              <span className="mt-1 block text-sm text-muted">{g.caption}</span>
            </button>
          ))}
        </div>
        <div className="mt-14 rounded-xl bg-olive-deep px-6 py-10 text-center text-cream sm:px-12">
          <h2 className="font-display text-3xl">Want this on your lot?</h2>
          <p className="mx-auto mt-3 max-w-md text-cream/75">
            Send a photo of the yard as it sits today. We’ll tell you what’s worth doing.
          </p>
          <Button variant="cream" className="mt-6" onClick={() => openWith()}>
            Request an estimate
          </Button>
        </div>
      </section>

      {item && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-sm text-cream"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
          <figure
            className="max-h-[88dvh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[72dvh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-cream">
              <p className="font-display text-2xl">{item.title}</p>
              <p className="mt-1 text-sm text-cream/70">{item.caption}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
