import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | K&O Landscaping & Handyman" },
      {
        name: "description",
        content:
          "Terms for using the K&O Landscaping website. Estimates on this site are not a contract until we write one.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      lede="This page is about the website. The actual landscaping work is a separate written quote."
      updated="September 18, 2026"
    >
      <Section title="The short version">
        <p>
          This website is a storefront for {site.name} in {site.city}, Arizona.
          Browsing it, sending the form, or calling {site.phone} does not hire us.
          A job starts when we give you a written estimate and you accept it.
        </p>
      </Section>

      <Section title="Estimates are not a contract">
        <p>
          Prices, service lists, and photos on this site are examples. Every yard is
          different. A free estimate is our opinion of the work after we see the
          property (in person or from photos you send). It is not a bid you can
          hold us to until both sides agree in writing — text, email, or paper.
        </p>
        <p>
          Weather, HOA rules, buried utilities, and what we find once we start can
          change the scope. If that happens, we stop and talk before adding cost.
        </p>
      </Section>

      <Section title="Using the site">
        <p>
          Don’t misuse the form (spam, fake jobs, scraping). Don’t copy the design,
          copy, or photos for another business. Job photos belong to us or to the
          homeowner who allowed them; they are here to show our work, not for reuse
          as stock.
        </p>
      </Section>

      <Section title="Accuracy">
        <p>
          We try to keep hours, phone number, service area, and reviews current.
          If something is off, call us. We are not responsible for Google, Facebook,
          or map listings we do not control, or for downtime on this website.
        </p>
      </Section>

      <Section title="Links">
        <p>
          Links to Google Maps and Facebook leave our site. Their terms and privacy
          rules apply once you are there.
        </p>
      </Section>

      <Section title="Liability">
        <p>
          This website is provided as-is. To the extent Arizona law allows, K&O is
          not liable for damages that come only from using or being unable to use
          the site (for example, a form that does not send). That limit does not
          take away rights you have under a signed work agreement or under Arizona
          law for the landscaping or handyman work itself.
        </p>
      </Section>

      <Section title="Arizona law">
        <p>
          These terms are governed by the laws of the State of Arizona. Disputes
          about the website will be handled in the state or federal courts that
          cover Pinal County, Arizona, unless a different forum is required by law.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          {site.name}
          <br />
          {site.addressLine}, {site.city}, {site.state} {site.zip}
          <br />
          <a href={site.phoneHref}>{site.phone}</a>
          <br />
          <a href={site.emailHref}>{site.email}</a>
        </p>
        <p>
          How we handle personal information is in the{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </Section>
    </LegalPage>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-3 grid gap-3 text-[1.02rem] leading-relaxed text-muted [&_a]:text-olive [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </section>
  );
}
