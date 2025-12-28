import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CONTACT_EMAIL } from "@/lib/consts";

const steps = [
  {
    title: "Request a free quote",
    description:
      "Drop us a quick note about your facility, goals, and ideal timing.",
  },
  {
    title: "Schedule a site walk-through",
    description:
      "We plan an on-site look (virtual or in person) to map out every detail.",
  },
  {
    title: "Receive a tailored proposal",
    description:
      "You get a transparent service plan, budget, and schedule to review.",
  },
  {
    title: "We get to work",
    description:
      "Approve the plan and our vetted team handles setup, service, and follow-up.",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground"
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <SectionEyebrow>Boost your business space</SectionEyebrow>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Get started in 4 simple steps
            </h2>
            <p className="text-base text-secondary-foreground/80 md:text-lg">
              We respond within one business day with the next best step for
              your cleaning or maintenance project.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-secondary-foreground/80">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-secondary-foreground/10 px-5 py-2 font-semibold text-secondary-foreground transition hover:bg-secondary-foreground/20"
            >
              <span className="text-lg">✉️</span>
              {CONTACT_EMAIL}
            </a>
          </div>

          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-lg font-semibold">
                  0{index + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    Step 0{index + 1}
                  </p>
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p className="text-sm text-secondary-foreground/80">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[32px] border border-primary-foreground/10 bg-card text-card-foreground shadow-2xl">
          <div className="space-y-6 p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                Fill out the form
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                We're finishing our online request form
              </h3>
              <p className="text-base text-muted-foreground">
                Until the form goes live, email us the basics (space size,
                frequency, any pain points) and we'll craft a proposal right
                away.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Direct email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 block text-xl font-semibold text-foreground transition hover:text-primary"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Expect a thoughtful reply within one business day.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 block w-full rounded-2xl bg-linear-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:shadow-primary/40"
              >
                Email our team
              </a>
            </div>

            <div className="rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Coming soon</p>
              <p>
                This space is reserved for our interactive booking form. Once
                the form is ready, it can drop in here without restructuring the
                layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
