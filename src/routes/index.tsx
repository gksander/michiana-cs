import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { BUSINESS_NAME } from "@/lib/consts";

const SITE_URL = "https://michiana.group";
const META_DESCRIPTION =
  "Specialized cleaning services for new build properties across Michiana. From construction cleanup to move-in ready perfection, we deliver immaculate results for residential and commercial spaces.";
const META_KEYWORDS =
  "new build cleaning, construction cleanup, post-construction cleaning, residential cleaning, commercial cleaning, Michiana cleaning services, move-in ready cleaning, construction debris removal, new home cleaning, new build property cleaning, northwest Indiana, southwest Michigan, Michiana region, Gary cleaning, Hammond cleaning, East Chicago cleaning, Merrillville cleaning, Crown Point cleaning, Valparaiso cleaning, Portage cleaning, Michigan City cleaning, South Bend cleaning, Niles cleaning, St. Joseph cleaning, Benton Harbor cleaning, Kalamazoo cleaning, Battle Creek cleaning";
const OG_IMAGE = `${SITE_URL}/og/site.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: BUSINESS_NAME },
      { name: "description", content: META_DESCRIPTION },
      { name: "keywords", content: META_KEYWORDS },
      { name: "robots", content: "index, follow" },

      // OpenGraph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: BUSINESS_NAME },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: "en_US" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: BUSINESS_NAME },
      { name: "twitter:description", content: META_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        {/* Decorative glows. Rendered as soft radial-gradients (not runtime
            blur filters) so mobile GPUs don't have to Gaussian-blur large,
            high-DPR layers on every paint. */}
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

        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
