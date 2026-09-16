import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { useQuote } from "@/lib/quote-store";
import { cn } from "@/lib/utils";

export function NotFound() {
  const openWith = useQuote((s) => s.openWith);
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-5 py-32 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-olive-soft">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
        That page isn’t on this lot.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be old. The yard work is still here.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className={cn(buttonVariants())}>
          Back home
        </Link>
        <Button variant="outline" onClick={() => openWith()}>
          Free estimate
        </Button>
      </div>
    </main>
  );
}
