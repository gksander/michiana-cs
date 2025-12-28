import { CONTACT_EMAIL, SECTION_IDS } from "@/lib/consts";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { FormField } from "./FormField";

export function ContactSectionTwo() {
  const [componentState, setComponentState] = useState<
    "mounted" | "submitted" | null
  >(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (componentState === null) {
      setComponentState("mounted");
    }
  }, []);

  const isUnmounted = componentState === null;

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

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1fr_500px] gap-x-24 gap-y-24 py-24 lg:py-48 px-6 lg:px-8">
        <div className="relative lg:static">
          <div className="">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Get a quote or get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
              Reach out directly to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent font-semibold"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              with inquiries or complete the provided form for a free quote or
              to discuss your cleaning needs.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
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

              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (555) 234-5678"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div> */}
            </dl>
          </div>
        </div>

        {renderForm()}
      </div>
    </div>
  );

  function renderForm() {
    if (componentState === "submitted") {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 dark:text-green-400 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Thanks for submitting your inquiry!
          </h3>
          <p className="">We'll get back to you as soon as possible.</p>
        </div>
      );
    }

    return (
      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSfVNTFE34H8zyXL9_YkvZO_hB-Bcnia3vqDA-9e4_ukUHGxDw/formResponse"
        method="POST"
        target="_blank"
        onSubmit={(e) => {
          e.preventDefault();
          // Update state first
          setComponentState("submitted");
          // Then submit the form programmatically
          if (formRef.current) {
            formRef.current.submit();
          }
        }}
        className="lg:pt-16"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <FormField
              label="Name"
              id="name"
              name="entry.1845020554"
              required={true}
              type="text"
              autoComplete="given-name"
            />

            <FormField
              label="Email"
              required={true}
              id="email"
              name="entry.522338603"
              type="email"
              autoComplete="email"
            />

            <FormField
              label="Phone number (optional)"
              required={false}
              id="phone-number"
              name="entry.40901064"
              type="tel"
              autoComplete="tel"
            />

            <FormField
              label="Project description / inquiry"
              id="message"
              name="entry.1435074052"
              rows={4}
              required={true}
            />
          </div>

          <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="fbzx" value="-5207228537234945753" />

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/80 cursor-pointer px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              // disabled={isUnmounted}
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    );
  }
}
