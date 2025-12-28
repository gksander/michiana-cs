import { CTALink } from "@/components/CTALink";
import { BUSINESS_NAME, SECTION_IDS } from "@/lib/consts";

const navLinks = [
  { label: "Why choose us?", href: `#${SECTION_IDS.WHY_CHOOSE_US}` },
  { label: "Our services", href: `#${SECTION_IDS.SERVICES}` },
];

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary text-primary-foreground font-semibold">
          MG
        </div>
        <div>
          <p className="text-lg font-semibold text-foreground">
            {BUSINESS_NAME}
          </p>
          <p className="text-xs tracking-[0.1em] text-muted-foreground">
            Michiana's trusted commercial cleaning company
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-6 md:mt-0">
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CTALink href={`#${SECTION_IDS.CONTACT}`}>Get a free quote</CTALink>
      </div>
    </header>
  );
}
