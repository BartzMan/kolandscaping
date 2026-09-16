import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { services } from "@/data/services";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-olive-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo invert />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream/75">
            Family-owned landscaping and handyman work for San Tan Valley and the East Valley.
            Turf, pavers, irrigation, maintenance — and the list on the fridge.
          </p>
          <a
            href={site.facebook}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-cream/80 hover:text-cream"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="size-4" />
            Follow the work on Facebook
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/50">Visit</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-cream/80 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
            San Tan Valley
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-cream/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={site.emailHref} className="break-all hover:text-cream">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <a href={site.maps} target="_blank" rel="noreferrer" className="hover:text-cream">
                {site.addressLine}
                <br />
                {site.city}, {site.state} {site.zip}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-cream/55">
            Mon–Fri 8–6 · Sat 8–5 · Sun 8–3 · Arizona time
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            {services.map((s) => s.navLabel).join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
