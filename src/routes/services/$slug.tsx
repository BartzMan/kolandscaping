import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { NotFound } from "@/components/not-found";
import { PageHero } from "@/components/page-hero";
import { Button, buttonVariants } from "@/components/ui/button";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { useQuote } from "@/lib/quote-store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => ({ service: getService(params.slug) }),
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.service?.seoTitle ?? "Service | K&O Landscaping" },
      { name: "description", content: loaderData?.service?.seoDescription ?? "" },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const openWith = useQuote((s) => s.openWith);
  if (!service) return <NotFound />;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="pb-24 lg:pb-0">
      <PageHero
        image={service.image}
        imageAlt={service.imageAlt}
        eyebrow={service.eyebrow}
        title={service.title}
        lede={service.summary}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: service.title },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-12 lg:py-24">
        <article className="lg:col-span-7">
          <h2 className="font-display text-3xl text-ink">
            {service.title} in {site.city}
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{service.description}</p>
          <ul className="mt-8 grid gap-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-stone text-olive">
                  <Check className="size-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </article>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-paper p-7">
            <p className="font-display text-2xl text-ink">Get this quoted</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Send the address and a couple of photos. Joel will tell you if we can take it this week.
            </p>
            <div className="mt-6 grid gap-3">
              <Button className="w-full" onClick={() => openWith(service.title)}>
                Free estimate
              </Button>
              <a href={site.phoneHref} className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                Call {site.phone}
              </a>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              Serving {site.city}, Queen Creek, Florence, and the East Valley.
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-cream py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl">Also asked for</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="overflow-hidden rounded-lg border border-border bg-paper"
              >
                <img src={s.image} alt={s.imageAlt} className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="font-display text-xl">{s.title}</p>
                  <p className="mt-2 text-sm text-muted">{s.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
