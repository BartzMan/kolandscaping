import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { useQuote } from "@/lib/quote-store";

export function MobileCta() {
  const openWith = useQuote((s) => s.openWith);
  const navOpen = useQuote((s) => s.navOpen);

  if (navOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-sand/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a href={site.phoneHref} className="flex-1">
          <Button variant="outline" className="w-full">
            <Phone className="size-4" />
            Call
          </Button>
        </a>
        <Button className="flex-1" onClick={() => openWith()}>
          Free estimate
        </Button>
      </div>
    </div>
  );
}
