import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { FaqList } from "@/components/faq-list";
import { Stars } from "@/components/stars";
import { gallery } from "@/data/gallery";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getOpenStatus } from "@/lib/hours";
import { useQuote } from "@/lib/quote-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "K&O Landscaping | San Tan Valley Turf, Pavers & Handyman",
      },
      {
        name: "description",
        content:
          "Family-owned landscaping and handyman crew in San Tan Valley, AZ. Artificial turf, pavers, irrigation repair, and weekly maintenance. 4.9 stars from 400+ neighbors. Call (480) 930-5833.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const openWith = useQuote((s) => s.openWith);
  const [hours, setHours] = useState("Mon–Fri 8–6 · Arizona time");

  useEffect(() => {
    setHours(getOpenStatus().label);
  }, []);

  return (
    <main className="pb-24 lg:pb-0">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-olive-deep text-cream">
        <img
          src="/work/front-curb.jpg"
          alt="Finished San Tan Valley front yard with turf, plantings, and a clean driveway"
          className="absolute inset-0 size-full object-cover object-[62%_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/62 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:pb-20">
          <p className="fade-up text-xs font-medium uppercase tracking-[0.22em] text-cream/70">
            San Tan Valley · East Valley
          </p>
          <h1 className="fade-up fade-up-1 mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.05] font-medium sm:text-6xl lg:text-[4.4rem]">
            The yard you wanted
            <br />
            <em className="font-normal italic">when you bought the house.</em>
          </h1>
          <p className="fade-up fade-up-2 mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Family-owned turf, pavers, irrigation, and maintenance — the crew
            400+ East Valley neighbors already text. Fair prices. Debris hauled.
            Work that still looks right in July.
          </p>
          <div className="fade-up fade-up-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" variant="cream" onClick={() => openWith()}>
              Get a free estimate
            </Button>
            <a href={site.phoneHref} className={cn(buttonVariants({ variant: "invert", size: "lg" }))}>
              <Phone className="size-4" />
              {site.phone}
            </a>
          </div>
          <div className="fade-up fade-up-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/80">
            <span className="inline-flex items-center gap-2">
              <Stars />
              {site.rating} · {site.reviewCount}+ reviews
            </span>
            <span>BBB {site.bbb}</span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4" />
              {hours}
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {[
            { k: `${site.rating}`, v: "Google rating from neighbors who live here" },
            { k: `${site.reviewCount}+`, v: "Reviews across Google, BBB, and Nextdoor" },
            { k: `${site.experienceYears}+ yrs`, v: "Combined landscaping & construction experience" },
          ].map((s) => (
            <div key={s.k} className="bg-cream px-6 py-10 sm:px-10">
              <p className="font-display text-4xl text-olive sm:text-5xl">{s.k}</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div className="relative">
          <img
            src="/work/backyard-turf.jpg"
            alt="Backyard turf with paver border and trimmed hedges"
            className="aspect-[4/5] w-full rounded-xl object-cover shadow-soft sm:aspect-[5/6]"
          />
          <div className="absolute -right-3 -bottom-6 hidden max-w-[16rem] rounded-lg border border-border bg-paper p-5 shadow-soft sm:block">
            <p className="font-display text-lg text-ink">Built for 115° days.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Turf that drains, hedges that hold a line, gravel that doesn’t look abandoned.
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive-soft">
            Why people stay
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.15] font-medium sm:text-5xl">
            A local crew, not a rotating bid mill.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">
            Joel Delgado and Alberto Marquez run K&O as a family shop out of San
            Tan Valley. The same people who quote the job show up for it. That’s
            why whole streets end up on a biweekly route — and why an irrigation
            leak at 3 p.m. can still get a truck at 4.
          </p>
          <ul className="mt-8 grid gap-4">
            {[
              {
                icon: ShieldCheck,
                t: "We say the price, then do that job",
                d: "Fair, in-range quotes. No fog, no surprise extras after the trailer is already in the driveway.",
              },
              {
                icon: Truck,
                t: "Debris leaves with us",
                d: "Trim, pull, haul. Reviews mention the cleanup as much as the work — because most crews skip it.",
              },
              {
                icon: Sparkles,
                t: "Desert-literate",
                d: "HOA fronts, monsoon drop, drip that actually runs. We work East Valley lots every week.",
              },
            ].map((item) => (
              <li key={item.t} className="flex gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-sm bg-stone text-olive">
                  <item.icon className="size-4" />
                </span>
                <span>
                  <span className="block font-medium text-ink">{item.t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{item.d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-olive-deep py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/55">
                What we do
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.15] font-medium sm:text-5xl">
                The outdoor list, and the indoor one.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-cream/80 hover:text-cream"
            >
              All services
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-xl bg-olive"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-cream/50">{s.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">{s.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive-soft">
                Recent work
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
                East Valley lots, after.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink"
            >
              Full gallery
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.slice(0, 4).map((g, i) => (
              <Link
                key={g.src}
                to="/gallery"
                className={cn(
                  "group relative overflow-hidden rounded-lg",
                  i === 0 ? "col-span-2 row-span-2 min-h-72" : "min-h-40 md:min-h-44",
                )}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                  <p className="font-display text-lg">{g.title}</p>
                  <p className="text-xs text-cream/75">{g.area}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive-soft">
            How it works
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium sm:text-5xl">
            Text the address. We’ll take it from there.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Call, text, or send the form",
                d: "Photos help. Tell us the city, the issue, and whether it’s a one-time job or a route.",
              },
              {
                n: "02",
                t: "We walk it and quote it",
                d: "Clear number, clear scope. Irrigation leaks are often diagnosed and priced on the spot.",
              },
              {
                n: "03",
                t: "We do the work. Then we leave it clean.",
                d: "Same crew. Debris hauled. If you want a biweekly after, we put you on the street’s route.",
              },
            ].map((step) => (
              <li key={step.n} className="relative">
                <p className="font-display text-4xl text-olive/30">{step.n}</p>
                <h3 className="mt-4 font-display text-2xl text-ink">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive-soft">
              Neighbors, not scripts
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
              {site.rating} from people on your street.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {reviews.slice(0, 6).map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-xl border border-border bg-paper p-6"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="font-medium text-ink">{r.name}</span>
                  <span className="mx-2 text-border">·</span>
                  {r.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-20 text-cream lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/55">
              Service area
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
              San Tan Valley first. East Valley always.
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-cream/80">
              Queen Creek, Florence, Apache Junction, and selected Gilbert jobs.
              Text the address — we’ll tell you if we can take it this week.
            </p>
            <Link
              to="/areas"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm hover:underline"
            >
              See cities we cover
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["San Tan Valley", "Queen Creek", "Florence", "Apache Junction"].map((city) => (
              <div
                key={city}
                className="rounded-lg border border-cream/15 bg-olive-deep/40 px-5 py-6"
              >
                <p className="font-display text-xl">{city}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cream/50">Arizona</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive-soft">
          Questions
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
          Before you hire a crew off a van wrap.
        </h2>
        <div className="mt-10">
          <FaqList />
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-olive-deep">
        <img
          src="/work/backyard-turf.jpg"
          alt="San Tan Valley backyard with turf"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-cream lg:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/70">
            Free estimates
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
            Send the photos. We’ll tell you what it takes.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-cream/80">
            No hard sell. If we’re not the right crew, we’ll say so. If we are, you’ll have a number and a date.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="cream" onClick={() => openWith()}>
              Request an estimate
            </Button>
            <a href={site.smsHref} className={cn(buttonVariants({ variant: "invert", size: "lg" }))}>
              Text Joel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
