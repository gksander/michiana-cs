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
        "rounded-full px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:shadow-primary/50",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
