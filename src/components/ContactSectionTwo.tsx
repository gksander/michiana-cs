import { useState } from "react";
import {
  EnvelopeIcon,
  ClipboardDocumentIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { CONTACT_EMAIL, SECTION_IDS } from "@/lib/consts";

export function ContactSectionTwo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="relative isolate overflow-hidden py-24 sm:py-36"
    >
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
            {/* Email display with icon */}
            <div className="mb-8 flex items-center justify-center gap-x-4">
              <EnvelopeIcon className="h-8 w-8" aria-hidden="true" />
              <span className="text-xl sm:text-3xl tracking-wider">
                {CONTACT_EMAIL}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 flex-row justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-x-2 rounded-lg bg-accent text-accent-foreground px-6 py-3 text-base font-semibold shadow-lg shadow-primary/50 transition-all hover:bg-accent/70 hover:shadow-xl hover:shadow-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                Send email
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-x-2 rounded-lg bg-secondary hover:bg-secondary/70 text-secondary-foreground px-6 py-3 text-base font-semibold shadow-lg transition-all hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <ClipboardDocumentIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                    Copy email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
