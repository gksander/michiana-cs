import { BuildingOffice2Icon, HomeIcon } from "@heroicons/react/20/solid";
import { SECTION_IDS } from "@/lib/consts";
import House from "@/assets/img/house1.jpg";
import { Image } from "astro:assets";
import type { PropsWithChildren } from "react";

const features = [
  {
    name: "Residential new build",
    description:
      "Complete post-construction cleaning for new homes, including thorough removal of construction debris, dust, and residue. We ensure every room is spotless and ready for your family to move in.",
    icon: HomeIcon,
  },
  {
    name: "Commercial new build",
    description:
      "Professional cleaning services for new commercial properties, offices, and retail spaces. We handle large-scale cleanup with efficiency and precision, ensuring your business opens on schedule.",
    icon: BuildingOffice2Icon,
  },
];

export function ServicesSectionTwo({ children }: PropsWithChildren) {
  return (
    <div className="overflow-hidden py-24 sm:py-32" id={SECTION_IDS.SERVICES}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold">What we offer</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                New build cleaning
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                Specializing in new build cleaning across Michiana, we bring
                construction cleanup expertise and attention to detail that
                ensures every surface shines. From initial debris removal to
                final polish, we make properties move-in ready.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-foreground"
                      />
                      {feature.name}.
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-secondary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-primary/20 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                {children}
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl dark:ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
