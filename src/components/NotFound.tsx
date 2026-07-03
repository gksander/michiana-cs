import { Footer } from "@/components/Footer";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <main
        className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-background text-foreground"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(ellipse 80rem 80rem at 50% 0%, white, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80rem 80rem at 50% 0%, white, transparent)",
        }}
      >
        {/* Gradient blur orbs */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-32 top-12 h-64 w-64 rounded-[40%] bg-primary/30 blur-[120px]" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-[45%] bg-accent/30 blur-[120px]" />
        </div>

        {/* Gradient blob overlay */}
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

        {/* Content */}
        <div className="relative flex flex-1 flex-col items-center justify-center px-6">
          <h1 className="text-[10rem] tracking-wide font-bold text-gray-900 dark:text-white">
            404
          </h1>
          <p className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400">
            We couldn't find this content
          </p>
          <a
            href="/"
            className="mt-12 text-base font-semibold text-gray-900 underline-offset-4 transition-colors hover:underline dark:text-white dark:hover:text-gray-300"
          >
            Back to home
          </a>
        </div>
      </main>

      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}
