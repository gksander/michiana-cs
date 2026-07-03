import { BlurImage } from "@/components/BlurImage";
import { CTALink } from "@/components/CTALink";
import { Logo } from "@/components/Logo";
import { BUSINESS_NAME, SECTION_IDS } from "@/lib/consts";
// Rendered in fixed 176px (w-44) columns; cap width for retina without shipping full-res.
import house1 from "@/assets/img/house1.jpg?format=avif&w=480&as=metadata";
import house2 from "@/assets/img/house2.jpg?format=avif&w=480&as=metadata";
import house3 from "@/assets/img/house3.jpg?format=avif&w=480&as=metadata";
import house4 from "@/assets/img/house4.jpg?format=avif&w=480&as=metadata";
import house5 from "@/assets/img/house5.jpg?format=avif&w=480&as=metadata";
// BlurHash strings (computed at build time) for blur-up LQIP placeholders.
import house1Blur from "@/assets/img/house1.jpg?blurhash";
import house2Blur from "@/assets/img/house2.jpg?blurhash";
import house3Blur from "@/assets/img/house3.jpg?blurhash";
import house4Blur from "@/assets/img/house4.jpg?blurhash";
import house5Blur from "@/assets/img/house5.jpg?blurhash";
// Rendered in 80px (h-20 w-20) boxes as white silhouettes; cap width for retina.
import osha from "@/assets/img/osha.png?w=160&as=metadata";
import iwca from "@/assets/img/iwca.png?w=160&as=metadata";

const images = [
  { img: house1, blurhash: house1Blur },
  { img: house2, blurhash: house2Blur },
  { img: house3, blurhash: house3Blur },
  { img: house4, blurhash: house4Blur },
  { img: house5, blurhash: house5Blur },
];

function HousePhoto({ image }: { image: (typeof images)[number] }) {
  return (
    <div className="relative">
      <BlurImage
        src={image.img.src}
        width={image.img.width}
        height={image.img.height}
        blurhash={image.blurhash}
        priority
        alt="House"
        className="aspect-2/3 w-full rounded-xl object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
    </div>
  );
}

const navLinks = [
  // { label: "Why choose us?", href: `#${SECTION_IDS.WHY_CHOOSE_US}` },
  { label: "Services", href: `#${SECTION_IDS.SERVICES}` },
  { label: "Get a quote", href: `#${SECTION_IDS.CONTACT}` },
];

export function Hero() {
  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <a href="#" className="flex items-center gap-3">
            <Logo className="h-6 w-auto" />
            <span className="text-xl hidden sm:block font-semibold tracking-wide">
              {BUSINESS_NAME}
            </span>
          </a>
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
                    Michiana's post-build finishing experts
                  </h1>
                  <p className="mt-8 text-lg sm:max-w-md sm:text-xl/8 lg:max-w-none text-muted">
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
                    <HousePhoto image={images[0]} />
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <HousePhoto image={images[1]} />
                    <HousePhoto image={images[2]} />
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <HousePhoto image={images[3]} />
                    <HousePhoto image={images[4]} />
                  </div>
                </div>
              </div>
            </div>
            <CertificationRibbon />
          </div>
        </div>
      </main>
    </div>
  );
}

function CertificationRibbon() {
  return (
    <div className="flex flex-col items-center justify-center gap-24 bg-zinc-800/30 px-6 py-8 backdrop-blur-sm sm:flex-row sm:gap-20 lg:px-8">
      {/* OSHA Group */}
      <div className="flex w-full max-w-sm items-center gap-3 sm:w-auto sm:max-w-none">
        <img
          src={osha.src}
          width={osha.width}
          height={osha.height}
          alt="OSHA"
          className="h-20 w-20 shrink-0 object-contain brightness-0 invert"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">OSHA Certified</span>
          <span className="text-xs text-muted">
            Comprehensive Safety & Compliance Standards
          </span>
        </div>
      </div>
      {/* IWCA Group */}
      <div className="flex w-full max-w-sm items-center gap-3 sm:w-auto sm:max-w-none">
        <img
          src={iwca.src}
          width={iwca.width}
          height={iwca.height}
          alt="IWCA"
          className="h-20 w-20 shrink-0 object-contain brightness-0 invert"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Member of IWCA</span>
          <span className="text-xs text-muted">
            International Window Cleaning Association
          </span>
        </div>
      </div>
    </div>
  );
}
