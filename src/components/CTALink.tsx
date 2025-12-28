import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function CTALink({
  children,
  className,
  ...rest
}: PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      className={cn(
        "px-8 py-3 text-xl font-semibold bg-accent hover:bg-accent/60 text-accent-foreground transition-colors duration-300",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
