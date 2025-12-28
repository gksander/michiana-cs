"use client";

import { CTALink } from "@/components/CTALink";
import { BUSINESS_NAME, SECTION_IDS } from "@/lib/consts";
import type { GetImageResult } from "astro";

const navLinks = [
  // { label: "Why choose us?", href: `#${SECTION_IDS.WHY_CHOOSE_US}` },
  { label: "Services", href: `#${SECTION_IDS.SERVICES}` },
  { label: "Get a quote", href: `#${SECTION_IDS.CONTACT}` },
];

type Props = {
  images: GetImageResult[];
};

export function HeroTwo({ images }: Props) {
  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex items-center gap-2">
            <div>
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                {BUSINESS_NAME}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-gray-900 dark:text-white transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-secondary">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-accent to-primary opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                    Michiana's trusted cleaning partner
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none dark:text-gray-400">
                    Specialized cleaning services for new build properties
                    across Michiana. From construction cleanup to move-in ready
                    perfection, we deliver immaculate results for residential
                    and commercial spaces.
                  </p>
                  <div className="mt-16 flex items-center gap-x-6">
                    <CTALink href={`#${SECTION_IDS.CONTACT}`}>
                      Get a free quote
                    </CTALink>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <img
                        src={images[0].src}
                        alt="House"
                        {...images[0].attributes}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={images[1].src}
                        alt="House"
                        {...images[1].attributes}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={images[2].src}
                        alt="House"
                        {...images[2].attributes}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={images[3].src}
                        alt="House"
                        {...images[3].attributes}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={images[4].src}
                        alt="House"
                        {...images[4].attributes}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg dark:bg-gray-700/5"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
