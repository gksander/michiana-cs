import { BUSINESS_NAME, CONTACT_EMAIL } from "@/lib/consts";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-10 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p className="text-xl font-semibold text-foreground">
              {BUSINESS_NAME}
            </p>
            <p className="text-sm text-muted-foreground">
              Commercial care across the Michiana region
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm font-semibold text-muted-foreground underline decoration-dotted underline-offset-4 transition hover:text-foreground lg:text-right"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="mt-4 flex flex-col gap-4 pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="text-base text-accent">●</span> Fully insured &
              vetted staff
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-base text-primary">●</span> Eco-friendly
              products
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
