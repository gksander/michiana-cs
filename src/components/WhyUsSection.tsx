import { BUSINESS_NAME, SECTION_IDS } from "@/lib/consts";

export function WhyUsSection() {
  return (
    <section
      id={SECTION_IDS.WHY_CHOOSE_US}
      className="relative bg-primary py-16 text-primary-foreground"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=200 height=200 viewBox=0 0 200 200 xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=M0 100 Q50 0 100 100 T200 100 V200 H0 Z fill=%23251a8f opacity=0.3/%3E%3C/svg%3E')] opacity-50" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            {`Why choose ${BUSINESS_NAME}?`}
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Partner with a trusted local cleaning company delivering premium
            results across Michiana.
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our experienced team blends meticulous detail with modern
            technology, ensuring a gleaming, healthy environment your teams and
            clients will appreciate.
          </p>
          <a
            href={`#${SECTION_IDS.CONTACT}`}
            className="rounded-full bg-card px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-primary/30 transition hover:bg-muted"
          >
            Get a free quote
          </a>
        </div>
        <div className="flex-1 grid gap-4 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div
              key={reason}
              className="rounded-xl border border-primary-foreground/20 bg-card/95 text-card-foreground px-5 py-4 text-sm font-semibold backdrop-blur"
            >
              <span className="mr-2 text-accent">●</span>
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  "No lock-in contracts",
  "Police-checked technicians",
  "Family owned & local",
  "Premium equipment",
  "Transparent communication",
  "Meticulous attention to detail",
];
