import { CONTACT_EMAIL, SECTION_IDS } from "@/lib/consts";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function ContactSectionTwoSimple() {
  return (
    <div className="relative isolate" id={SECTION_IDS.CONTACT}>
      {/* Background pattern */}
      <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute inset-0 size-full mask-[radial-gradient(100%_50%_at_center_left,white,transparent)] stroke-gray-200 dark:stroke-white/10"
        >
          <defs>
            <pattern
              x="100%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M130 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            className="fill-accent/8"
          />
          <svg
            x="100%"
            y={-1}
            className="overflow-visible fill-gray-50 dark:fill-gray-800/20"
          >
            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-[calc(100%-13rem)] -left-56 transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
            }}
            className="aspect-1155/678 w-288.75 bg-linear-to-br from-accent via-background/30 to-background opacity-10 dark:opacity-20"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-48 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Get in touch
          </h2>
          <p className="mt-6 max-w-2xl text-xl/8 text-muted">
            Reach out directly to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-bold text-white underline hover:text-gray-200"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with inquiries or to discuss your cleaning needs.
          </p>
          <dl className="mx-auto mt-10 w-content max-w-2xl space-y-4 text-left text-base/7 text-muted">
            <div className="flex items-center justify-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-muted"
                />
              </dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="dark:hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>

            <div className="flex items-center justify-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Location</span>
                <MapPinIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-gray-400"
                />
              </dt>
              <dd>
                <span>Valparaiso, Indiana</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
