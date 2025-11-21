import { BUSINESS_NAME, SECTION_IDS } from "@/lib/consts";

const navLinks = [
  { label: "Why choose us?", href: `#${SECTION_IDS.WHY_CHOOSE_US}` },
  { label: "Our services", href: `#${SECTION_IDS.SERVICES}` },
];

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-emerald-400 text-white font-semibold">
          MCS
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">
            {BUSINESS_NAME}
          </p>
          <p className="text-xs tracking-[0.2em] text-slate-500">
            Commercial care across the Michiana region
          </p>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-6 md:mt-0">
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`#${SECTION_IDS.CONTACT}`}
          className="rounded-full bg-linear-to-r from-indigo-600 to-emerald-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
        >
          Get a free quote
        </a>
      </div>
    </header>
  );
}
