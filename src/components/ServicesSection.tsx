export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-20 text-foreground"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Our cleaning services
        </p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Comprehensive care for every surface
        </h2>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Select the specialty you need today—carpet, windows, pressure washing,
          and general cleaning with impeccable consistency.
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
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card text-muted-foreground ring-1 ring-border hover:text-foreground"
            }`}
          >
            {service}
          </button>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] bg-card/60 text-card-foreground p-8 shadow-[0_5px_10px_var(--color-primary)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Carpet Cleaning
          </p>
          <h3 className="mt-3 text-3xl font-bold">Deep care for every fiber</h3>
          <p className="mt-3 text-base text-muted-foreground">
            Professional deep cleaning for commercial and residential spaces
            with stain removal, deodorizing, and fast drying using premium
            equipment.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SERVICE_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card px-5 py-4"
              >
                <p className="text-sm font-semibold text-primary">
                  ✦ {feature.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-border bg-muted/80 p-4 shadow-inner">
          <div className="aspect-[3/4] w-full rounded-[24px] bg-muted/60 text-center text-lg font-semibold text-muted-foreground">
            <div className="flex h-full items-center justify-center">
              Service image placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICE_FEATURES = [
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
