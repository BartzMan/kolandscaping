import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { FaqList } from "@/components/faq-list";
import { site } from "@/data/site";
import { getOpenStatus } from "@/lib/hours";
import { asset } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact K&O Landscaping | Free Estimate in San Tan Valley" },
      {
        name: "description",
        content:
          "Call or text (480) 930-5833 for a free landscaping or handyman estimate in San Tan Valley, AZ. Mon–Fri 8–6, Sat 8–5, Sun 8–3. Email kolandscapinghandymanllc@gmail.com.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [hours, setHours] = useState("Mon–Fri 8–6 · Arizona time");
  useEffect(() => {
    setHours(getOpenStatus().label);
  }, []);

  return (
    <main className="pb-24 lg:pb-0">
      <PageHero
        image={asset("/work/paver-walk.jpg")}
        imageAlt="Paver walkway at a San Tan Valley home"
        eyebrow="Contact"
        title="Call, text, or send the form. We’ll take it from there."
        lede="Free estimates. Same-day answers on most messages. Photos of the yard help."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl">Talk to Joel</h2>
          <p className="mt-3 leading-relaxed text-muted">
            The fastest path is a text with your address and two photos. The form goes to the same inbox.
          </p>
          <ul className="mt-8 grid gap-5">
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-stone text-olive">
                <Phone className="size-4" />
              </span>
              <span>
                <a href={site.phoneHref} className="font-medium text-ink hover:underline">
                  {site.phone}
                </a>
                <span className="mt-1 block text-sm text-muted">Call or text · {hours}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-stone text-olive">
                <Mail className="size-4" />
              </span>
              <span>
                <a href={site.emailHref} className="break-all font-medium text-ink hover:underline">
                  {site.email}
                </a>
                <span className="mt-1 block text-sm text-muted">Estimates and photos</span>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-stone text-olive">
                <MapPin className="size-4" />
              </span>
              <span>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-ink hover:underline"
                >
                  {site.addressLine}, {site.city}, {site.state} {site.zip}
                </a>
                <span className="mt-1 block text-sm text-muted">East Valley, Arizona</span>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-stone text-olive">
                <Clock className="size-4" />
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {site.hours.map((h) => (
                  <span key={h.days} className="flex justify-between gap-6 py-0.5">
                    <span className="text-ink">{h.short}</span>
                    <span>
                      {h.open} – {h.close}
                    </span>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-stone text-olive">
                <Facebook className="size-4" />
              </span>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-ink hover:underline"
              >
                Facebook — recent jobs
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-paper p-6 sm:p-8 lg:col-span-7">
          <h2 className="font-display text-2xl">Free estimate</h2>
          <p className="mt-2 mb-6 text-sm text-muted">
            Name and phone are enough. We’ll follow up by text.
          </p>
          <QuoteForm />
        </div>
      </section>

      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl">Common questions</h2>
          <div className="mt-8">
            <FaqList />
          </div>
        </div>
      </section>
    </main>
  );
}
