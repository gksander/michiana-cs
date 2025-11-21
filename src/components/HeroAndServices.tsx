import { Header } from "@/components/Header";
import { SECTION_IDS } from "@/lib/consts";

const heroHighlights = [
  "Tailored maintenance plans",
  "Premium equipment & eco products",
  "Fully insured & vetted pros",
];

const reasons = [
  "No lock-in contracts",
  "Police-checked technicians",
  "Family owned & local",
  "Premium equipment",
  "Transparent communication",
  "Meticulous attention to detail",
];

const serviceFeatures = [
  {
    title: "Deep Carpet Cleaning",
    description:
      "Remove embedded dirt, bacteria, and allergens with pro-grade tools.",
  },
  {
    title: "Stain & Odor Removal",
    description: "Eliminate stubborn marks and odors to restore every fiber.",
  },
  {
    title: "Fast Drying Technology",
    description: "Modern extraction reduces downtime for busy facilities.",
  },
  {
    title: "Commercial & Residential",
    description: "Flexible packages for offices, homes, strata, and estates.",
  },
];

export function HeroAndServices() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] text-slate-900">
      <div className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-32 top-12 h-64 w-64 rounded-[40%] bg-indigo-200 blur-[120px]" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-[45%] bg-emerald-200 blur-[120px]" />
        </div>

        <Header />

        <section className="relative mx-auto mt-4 grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
                Trusted cleaning partners
              </p>
              <h1 className="text-4xl font-bold leading-16 text-slate-900 md:text-5xl lg:text-6xl">
                Michiana's trusted cleaning partner
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">
                Tailored commercial cleaning that matches your schedule, space,
                and standards across the Michiana region. Immaculate results for
                offices, healthcare, hospitality, and beyond.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`#${SECTION_IDS.CONTACT}`}
                className="rounded-full bg-gradient-to-r from-indigo-600 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
              >
                Get a free quote
              </a>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-lg">
              <span className="text-sm">⬇</span>
              <span>See the detail in every pass</span>
            </div>
            <div className="rounded-[32px] border border-slate-100 bg-gradient-to-br from-slate-100 to-slate-200 p-4 shadow-2xl shadow-indigo-200">
              <div className="aspect-[4/3] w-full rounded-[24px] bg-slate-300/60 text-center text-lg font-semibold text-slate-600">
                <div className="flex h-full items-center justify-center">
                  Hero image placeholder
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        id={SECTION_IDS.WHY_CHOOSE_US}
        className="relative bg-[#2c1fb7] py-16 text-white"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=200 height=200 viewBox=0 0 200 200 xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=M0 100 Q50 0 100 100 T200 100 V200 H0 Z fill=%23251a8f opacity=0.3/%3E%3C/svg%3E')] opacity-50" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Why choose Michiana Commercial Services?
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Partner with a trusted local cleaning company delivering premium
              results across Michiana.
            </h2>
            <p className="text-lg text-white/80">
              Our experienced team blends meticulous detail with modern
              technology, ensuring a gleaming, healthy environment your teams
              and clients will appreciate.
            </p>
            <a
              href={`#${SECTION_IDS.CONTACT}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2c1fb7] shadow-lg shadow-indigo-900/30 transition hover:bg-slate-100"
            >
              Get a free quote
            </a>
          </div>
          <div className="flex-1 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-semibold backdrop-blur"
              >
                <span className="mr-2 text-emerald-300">●</span>
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-20 text-slate-900"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Our cleaning services
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Comprehensive care for every surface
          </h2>
          <p className="mt-3 text-base text-slate-600 md:text-lg">
            Select the specialty you need today—carpet, windows, pressure
            washing, and general cleaning with impeccable consistency.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "Carpet Cleaning",
            "Window Cleaning",
            "Pressure Washing",
            "General Cleaning",
          ].map((service, index) => (
            <button
              key={service}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                index === 0
                  ? "bg-[#2c1fb7] text-white shadow-lg shadow-indigo-200"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_35px_65px_rgba(65,80,140,0.15)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Carpet Cleaning
            </p>
            <h3 className="mt-3 text-3xl font-bold">
              Deep care for every fiber
            </h3>
            <p className="mt-3 text-base text-slate-600">
              Professional deep cleaning for commercial and residential spaces
              with stain removal, deodorizing, and fast drying using premium
              equipment.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {serviceFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50 px-5 py-4"
                >
                  <p className="text-sm font-semibold text-indigo-500">
                    ✦ {feature.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-100 bg-slate-100/80 p-4 shadow-inner">
            <div className="aspect-[3/4] w-full rounded-[24px] bg-slate-300/60 text-center text-lg font-semibold text-slate-600">
              <div className="flex h-full items-center justify-center">
                Service image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
