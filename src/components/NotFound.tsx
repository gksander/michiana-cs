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
        {/* Decorative glows as soft radial-gradients (not runtime blur
            filters) to avoid expensive GPU blur passes on mobile. */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div
            className="absolute -left-40 top-0 h-128 w-lg"
            style={{
              background:
                "radial-gradient(closest-side, var(--primary), transparent)",
            }}
          />
          <div
            className="absolute -right-24 -top-16 h-136 w-136"
            style={{
              background:
                "radial-gradient(closest-side, var(--accent), transparent)",
            }}
          />
        </div>

        {/* Gradient blob overlay */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 lg:ml-24 xl:ml-48"
        >
          <div
            className="aspect-801/1036 w-200.25 opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, var(--accent), transparent)",
            }}
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
