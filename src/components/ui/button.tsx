import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] text-center",
  {
    variants: {
      variant: {
        primary: "bg-olive text-cream hover:bg-olive-deep shadow-soft",
        cream: "bg-cream text-ink hover:bg-sand",
        outline: "border border-border bg-transparent text-ink hover:bg-stone",
        ghost: "text-ink hover:bg-stone",
        invert: "border border-cream/30 bg-transparent text-cream hover:bg-cream/10",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-sm",
        md: "h-12 px-5 text-sm rounded-md",
        lg: "h-14 px-7 text-base rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
