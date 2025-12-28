import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { CONTACT_EMAIL, SECTION_IDS } from "@/lib/consts";

export function ContactSectionTwo() {
  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="relative isolate overflow-hidden py-24 sm:py-36"
    >
      {/* Decorative background elements
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-linear-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
            <EnvelopeIcon
              className="h-12 w-12 text-accent"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Have a question or ready to get started? Reach out to us directly
            via email and we'll get back to you as soon as possible.
          </p>
          <div className="mt-16">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-x-3 rounded-lg bg-accent text-accent-foreground px-8 py-4 text-lg font-semibold shadow-lg shadow-primary/50 transition-all hover:bg-accent/70 hover:shadow-xl hover:shadow-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
