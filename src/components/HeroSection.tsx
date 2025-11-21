import { SECTION_IDS } from "@/lib/consts";

export function HeroSection() {
  return (
    <section className="relative mx-auto mt-4 grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Trusted cleaning partners
          </p>
          <h1 className="text-4xl font-bold leading-16 text-foreground md:text-5xl lg:text-6xl">
            Michiana's trusted cleaning partner
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Tailored commercial cleaning that matches your schedule, space, and
            standards across the Michiana region. Immaculate results for
            offices, healthcare, hospitality, and beyond.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`#${SECTION_IDS.CONTACT}`}
            className="rounded-full bg-linear-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:shadow-primary/50"
          >
            Get a free quote
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-4 -top-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-semibold text-primary shadow-lg">
          <span className="text-sm">⬇</span>
          <span>See the detail in every pass</span>
        </div>
        <div className="rounded-[32px] border border-border bg-linear-to-br from-muted to-border p-4 shadow-2xl shadow-primary/20">
          <div className="aspect-[4/3] w-full rounded-[24px] bg-muted/60 text-center text-lg font-semibold text-muted-foreground">
            <div className="flex h-full items-center justify-center">
              Hero image placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
