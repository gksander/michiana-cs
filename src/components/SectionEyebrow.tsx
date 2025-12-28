import type { PropsWithChildren } from "react";

type Props = {};

export function SectionEyebrow({ children }: PropsWithChildren<Props>) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
      {children}
    </p>
  );
}
