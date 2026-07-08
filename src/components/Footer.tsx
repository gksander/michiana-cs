import { Logo } from "@/components/Logo";
import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/lib/consts";

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-2 pb-10 text-center">
          <Logo className="h-8 w-auto" />
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Residential and commercial
          </p>
          <a
            href={CONTACT_PHONE_HREF}
            className="text-sm font-semibold text-muted-foreground underline decoration-dotted underline-offset-4 transition hover:text-foreground"
          >
            {CONTACT_PHONE}
          </a>
        </div>
        <div className="flex flex-col gap-4 border-t border-border pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm font-semibold text-muted-foreground underline decoration-dotted underline-offset-4 transition hover:text-foreground lg:text-right"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
