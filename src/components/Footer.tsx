import { BUSINESS_NAME } from "@/lib/consts";

const footerLinks = [
  { label: "Why choose us?", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-10 text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 rounded-[40px] bg-card px-8 py-10 shadow-[0_25px_55px_rgba(68,87,151,0.12)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-3xl bg-linear-to-br from-primary to-accent text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20">
              MCS
            </div>
            <div>
              <p className="text-xl font-semibold text-foreground">
                {BUSINESS_NAME}
              </p>
              <p className="text-sm text-muted-foreground">
                Commercial care across the Michiana region
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-muted-foreground">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-border px-4 py-2 transition hover:border-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-primary"
          >
            Back to top
            <span className="text-lg">↑</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
