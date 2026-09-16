import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { nav, site } from "@/data/site";
import { useQuote } from "@/lib/quote-store";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const openWith = useQuote((s) => s.openWith);
  const setNavOpen = useQuote((s) => s.setNavOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
    setNavOpen(false);
  }, [pathname, setNavOpen]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    setNavOpen(menu);
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, setNavOpen]);

  const solid = !isHome || scrolled || menu;
  const invert = isHome && !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-8 z-40 transition-[background-color,border-color,backdrop-filter] duration-200",
        solid
          ? "border-b border-border bg-sand/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5">
        <Logo invert={invert} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  invert
                    ? active
                      ? "text-cream"
                      : "text-cream/70 hover:text-cream"
                    : active
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              invert ? "text-cream" : "text-ink",
            )}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Button
            size="sm"
            variant={invert ? "cream" : "primary"}
            onClick={() => openWith()}
          >
            Free estimate
          </Button>
        </div>

        <button
          className={cn(
            "grid size-11 place-items-center rounded-sm lg:hidden",
            invert ? "text-cream" : "text-ink",
          )}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu((v) => !v)}
        >
          {menu ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menu && (
        <div className="fixed inset-x-0 top-[6.25rem] bottom-0 z-40 overflow-y-auto border-t border-border bg-sand px-5 py-6 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-12 items-center text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 grid gap-3">
            <a href={site.phoneHref} className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
              <Phone className="size-4" />
              {site.phone}
            </a>
            <Button
              className="w-full"
              onClick={() => {
                setMenu(false);
                openWith();
              }}
            >
              Free estimate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
