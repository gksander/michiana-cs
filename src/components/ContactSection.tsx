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

const contactEmail = "hello@michianacs.com";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0c0f2c] py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-emerald-400/30 blur-[160px]" />
        <div className="absolute right-[-10%] top-24 h-96 w-96 rounded-[45%] bg-indigo-500/40 blur-[180px]" />
        <div className="absolute inset-0 bg-linear-to-br from-[#101749] via-[#1e2e9d]/80 to-[#16c9a2]/50" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200">
            Boost your business space
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Get started in 4 simple steps
            </h2>
            <p className="text-base text-white/80 md:text-lg">
              We respond within one business day with the next best step for
              your cleaning or maintenance project.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-semibold text-white transition hover:bg-white/20"
            >
              <span className="text-lg">✉️</span>
              {contactEmail}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 font-semibold">
              <span className="text-lg">🛡️</span>
              Your information is 100% secure
            </span>
          </div>

          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold">
                  0{index + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                    Step 0{index + 1}
                  </p>
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p className="text-sm text-white/80">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white text-slate-900 shadow-[0_35px_65px_rgba(17,40,101,0.35)]">
          <div className="space-y-6 p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-500">
                Fill out the form
              </p>
              <h3 className="text-2xl font-bold leading-tight">
                We're finishing our online request form
              </h3>
              <p className="text-base text-slate-600">
                Until the form goes live, email us the basics (space size,
                frequency, any pain points) and we'll craft a proposal right
                away.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                Direct email
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 block text-xl font-semibold text-slate-900 transition hover:text-indigo-600"
              >
                {contactEmail}
              </a>
              <p className="mt-2 text-sm text-slate-600">
                Expect a thoughtful reply within one business day.
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 block w-full rounded-2xl bg-linear-to-r from-indigo-600 to-emerald-400 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:shadow-indigo-400/60"
              >
                Email our team
              </a>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-200 p-5 text-sm text-slate-500">
              <p className="font-semibold text-slate-700">Coming soon</p>
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
