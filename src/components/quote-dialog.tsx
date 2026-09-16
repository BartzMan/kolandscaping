import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { useQuote } from "@/lib/quote-store";

export function QuoteDialog() {
  const { open, setOpen, preset } = useQuote();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/50 data-[state=open]:animate-[fade-up_200ms_ease-out]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-[90] w-[min(100%-1.5rem,34rem)] max-h-[min(92dvh,44rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-border bg-sand p-6 shadow-soft outline-none sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-2xl text-ink">
                Free estimate
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-relaxed text-muted">
                Name, phone, and a line about the job. Joel will text or call you back.
              </Dialog.Description>
            </div>
            <Dialog.Close className="grid size-11 shrink-0 place-items-center rounded-sm text-muted hover:bg-stone hover:text-ink">
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
          <QuoteForm preset={preset} compact />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
