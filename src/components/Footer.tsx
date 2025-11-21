import { BUSINESS_NAME } from "@/lib/consts";

const footerLinks = [
  { label: "Why choose us?", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#f4f7fb] pt-16 pb-10 text-slate-700">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 rounded-[40px] bg-white px-8 py-10 shadow-[0_25px_55px_rgba(68,87,151,0.12)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-3xl bg-linear-to-br from-indigo-500 to-emerald-400 text-lg font-semibold text-white shadow-lg shadow-indigo-200">
              MCS
            </div>
            <div>
              <p className="text-xl font-semibold text-slate-900">
                {BUSINESS_NAME}
              </p>
              <p className="text-sm text-slate-500">
                Commercial care across the Michiana region
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-900 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to top
            <span className="text-lg">↑</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Coastal Cleanline Logistics. All
            rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="text-base text-emerald-500">●</span> Fully
              insured & vetted staff
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-base text-indigo-500">●</span> Eco-friendly
              products
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
