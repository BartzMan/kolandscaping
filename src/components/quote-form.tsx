import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 w-full rounded-md border border-border bg-paper px-4 text-base text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-olive";

const areaClass =
  "min-h-32 w-full resize-y rounded-lg border border-border bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-olive";

type QuoteFormProps = {
  preset?: string;
  compact?: boolean;
};

export function QuoteForm({ preset = "", compact = false }: QuoteFormProps) {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(preset);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("San Tan Valley");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (preset) setService(preset);
  }, [preset]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Name and phone are all we need to get started.");
      return;
    }
    setError("");
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      `City: ${city}`,
      `Service: ${service || "Not sure"}`,
      "",
      message || "(No extra notes)",
    ].join("\n");

    const lead = {
      name,
      phone,
      email,
      city,
      service,
      message,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("ko-leads") || "[]") as unknown[];
      localStorage.setItem("ko-leads", JSON.stringify([lead, ...prev].slice(0, 20)));
    } catch {
      /* ignore */
    }

    const mailto = `${site.emailHref}?subject=${encodeURIComponent(
      `Estimate request — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-paper p-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-olive text-cream">
          <Check className="size-5" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">We have it.</h3>
        <p className="mt-3 text-muted leading-relaxed">
          If your mail app opened, send it. If it didn’t, text Joel the same details — that’s usually faster.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={site.smsHref}>
            <Button type="button" className="w-full sm:w-auto">
              Text {site.phone}
            </Button>
          </a>
          <a href={site.phoneHref}>
            <Button type="button" variant="outline" className="w-full sm:w-auto">
              <Phone className="size-4" />
              Call now
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}>
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input
            className={fieldClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Phone
          <input
            className={fieldClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
      </div>
      <div className={cn("grid gap-4", compact ? "" : "sm:grid-cols-2")}>
        <label className="grid gap-1.5 text-sm font-medium">
          Email <span className="font-normal text-muted">(optional)</span>
          <input
            className={fieldClass}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          City
          <input
            className={fieldClass}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            autoComplete="address-level2"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        What do you need?
        <select
          className={cn(fieldClass, "appearance-none")}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Notes <span className="font-normal text-muted">(photos can be texted)</span>
        <textarea
          className={areaClass}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Address, what’s going on, anything the HOA flagged…"
        />
      </label>
      {error && <p className="text-sm text-olive-deep">{error}</p>}
      <Button type="submit" size="lg" className="w-full">
        <Send className="size-4" />
        Request a free estimate
      </Button>
      <p className="text-center text-sm text-muted">
        Or skip the form —{" "}
        <a className="underline decoration-border underline-offset-4 hover:text-ink" href={site.smsHref}>
          text {site.phone}
        </a>
        . We usually reply the same day.
      </p>
      <p className="text-center text-xs leading-relaxed text-muted/80">
        By sending, you agree we can call or text you about this estimate.{" "}
        <Link to="/privacy" className="underline decoration-border underline-offset-2 hover:text-ink">
          Privacy
        </Link>
        .
      </p>
    </form>
  );
}
