import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | K&O Landscaping & Handyman" },
      {
        name: "description",
        content:
          "How K&O Landscaping & Handyman Services LLC in San Tan Valley, AZ collects and uses contact information from estimate requests.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="Plain English on what we collect when you request an estimate, call, or text — and what we do with it."
      updated="September 18, 2026"
    >
      <Section title="Who we are">
        <p>
          This policy is for {site.name} (“K&O,” “we,” “us”), a landscaping and
          handyman company based at {site.addressLine}, {site.city}, {site.state}{" "}
          {site.zip}. Contact:{" "}
          <a href={site.phoneHref}>{site.phone}</a> or{" "}
          <a href={site.emailHref}>{site.email}</a>.
        </p>
      </Section>

      <Section title="What we collect">
        <p>When you use this website, call, text, email, or Facebook, we may collect:</p>
        <ul>
          <li>Name, phone number, email, city, and street address</li>
          <li>The service you asked about and any notes you write</li>
          <li>Photos or videos of the property that you send us</li>
          <li>Call and text records needed to quote and schedule the job</li>
        </ul>
        <p>
          The estimate form asks for name and phone (required), plus optional email,
          city, and notes. We do not ask for payment card numbers on this site.
        </p>
      </Section>

      <Section title="Why we use it">
        <p>We use that information to:</p>
        <ul>
          <li>Return your call or text and give a free estimate</li>
          <li>Schedule, do, and follow up on the work</li>
          <li>Send a written quote or invoice if you ask for one</li>
          <li>Keep records of jobs we have already done for you</li>
        </ul>
        <p>
          We do not sell your information. We do not buy marketing lists. We do not
          run ads from the data on this form.
        </p>
      </Section>

      <Section title="Calls and texts">
        <p>
          If you give us a phone number — on the form, by calling, or by texting
          first — you are asking us to contact you about that estimate or job. We
          may call or text from {site.phone}. Message and data rates from your
          carrier may apply. Reply STOP if you want texts to stop; we will still
          be able to reach you by phone for an active job if needed.
        </p>
      </Section>

      <Section title="Who we share with">
        <p>We share information only as needed to do the work:</p>
        <ul>
          <li>Owners and crew on the job</li>
          <li>A subcontractor (for example, a specialist) if the job requires it</li>
          <li>
            Hosting, email, and maps tools that make this website and our inbox run
          </li>
          <li>Authorities if the law requires it</li>
        </ul>
      </Section>

      <Section title="This website">
        <p>
          The site is hosted in the United States. It may log basic technical data
          (browser type, pages viewed) to keep the site working. We do not run a
          cookie banner because we do not use advertising trackers on this site.
        </p>
        <p>
          The estimate form opens your email app so the request goes to{" "}
          {site.email}. Until the live site is connected to that inbox, a copy may
          also sit in your browser on this device. That is a preview behavior, not
          a mailing list.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep job and contact records as long as we need them to serve you and
          to run the business (quotes, warranties, invoices). You can ask us to
          update or delete your contact details; we may retain what the law or a
          warranty still requires.
        </p>
      </Section>

      <Section title="Photos of finished work">
        <p>
          Like most landscaping crews, we may photograph completed jobs for our
          gallery, Google, and Facebook. If you do not want your house shown,
          tell us before we start — or any time after — and we will not post it.
        </p>
      </Section>

      <Section title="Children">
        <p>This site is for homeowners and property managers. We do not knowingly collect information from children under 13.</p>
      </Section>

      <Section title="Your choices">
        <p>
          Email {site.email} or call {site.phone} to see, correct, or delete the
          contact information we have for you. Arizona does not have a California-style
          “do not sell” law; we do not sell personal information in any event.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          If this policy changes in a material way, we will update the date at the
          top of this page. The{" "}
          <Link to="/terms">Terms of Use</Link> cover use of the website itself.
        </p>
      </Section>
    </LegalPage>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="legal-body mt-3 grid gap-3 text-[1.02rem] leading-relaxed text-muted [&_a]:text-olive [&_a]:underline [&_a]:underline-offset-4 [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
