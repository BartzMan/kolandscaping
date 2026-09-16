import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FaqList() {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-border border-y border-border">
      {faqs.map((item) => (
        <Accordion.Item key={item.q} value={item.q}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full min-h-14 items-center justify-between gap-6 py-5 text-left">
              <span className="font-display text-lg font-medium text-ink sm:text-xl">
                {item.q}
              </span>
              <Plus className="size-5 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="max-w-2xl pb-6 text-[0.95rem] leading-relaxed text-muted">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
