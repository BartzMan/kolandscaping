import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-olive text-olive" />
      ))}
    </span>
  );
}
