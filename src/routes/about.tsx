import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { useQuote } from "@/lib/quote-store";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About K&O Landscaping | Family-Owned in San Tan Valley" },
      {
        name: "description",
        content:
          "K&O is Joel Delgado and Alberto Marquez — a family landscaping and handyman crew in San Tan Valley with 15+ years of desert work. 4.9 stars from 400+ neighbors.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const openWith = useQuote((s) => s.openWith);

  return (
    <main className="pb-24 lg:pb-0">
      <PageHero
        image="/work/front-trees.jpg"
        imageAlt="Young trees and gravel landscaping at a San Tan Valley home"
        eyebrow="The crew"
        title="Two owners. One truck that actually shows up."
        lede="Joel Delgado and Alberto Marquez built K&O so East Valley homeowners could stop gambling on whoever answered the Facebook ad."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl sm:text-4xl">Family-owned in San Tan Valley.</h2>
          <div className="mt-6 grid gap-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              K&O Landscaping & Handyman Services LLC is a local shop, not a franchise
              with a call center. Joel and Alberto live in the same desert as the
              yards they work. The crew behind them brings more than fifteen years
              of landscaping and construction/remodeling — which is why the work
              ranges from biweekly maintenance to turf, pavers, irrigation, painting,
              and the punch list that never makes a contractor’s calendar.
            </p>
            <p>
              We started taking jobs because neighbors needed a crew who would quote
              fairly, show up, and leave the lot cleaner than they found it. That’s
              still the whole model. Whole streets now share a route. Irrigation
              leaks get a truck, not a ticket number. Reviews keep mentioning the
              same three things: communication, price, and the debris leaving with us.
            </p>
            <p>
              We serve San Tan Valley first, then Queen Creek, Florence, Apache
              Junction, and the rest of the East Valley when the drive makes sense.
              If you want a partner for the yard — and the odd job inside — you’re
              in the right place.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-paper p-7">
            <dl className="grid gap-5">
              {[
                { k: "Owners", v: site.owners.join(" & ") },
                { k: "Based in", v: `${site.city}, ${site.state}` },
                { k: "On the job", v: `${site.experienceYears}+ years combined` },
                { k: "Neighbors", v: `${site.reviewCount}+ reviews · ${site.rating} average` },
                { k: "BBB", v: `${site.bbb} rating` },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">{row.k}</dt>
                  <dd className="mt-1 font-medium text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
            <Button className="mt-8 w-full" onClick={() => openWith()}>
              Work with us
            </Button>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-3">
          {[
            {
              t: "Show up like it’s your house",
              d: "Respectful on the property. No radio blasting, no leftover piles, no “we’ll come back for that.”",
            },
            {
              t: "Price it like you’ll see them at Fry’s",
              d: "Fair, in-range numbers. We live here. The work has to survive the next conversation at the park.",
            },
            {
              t: "Say no when it’s not our job",
              d: "We’re a landscape and handyman crew — not a licensed general contractor for large remodels. If it isn’t a fit, we tell you.",
            },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-display text-2xl text-ink">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
