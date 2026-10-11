import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { CursorStrip } from "@/components/layout/cursor-strip";
import { CursorGrid } from "@/components/gallery/cursor-grid";
import { Install } from "@/components/layout/install";
import { Features } from "@/components/layout/features";
import { Footer } from "@/components/layout/footer";
import { GitHubMark } from "@/components/brand-marks";
import Link from "next/link";
import { CURSORS } from "@/registry/cursors";

const FEATURED = CURSORS.filter((cursor) => cursor.featured).length;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Cursor Gallery",
      url: "https://cursor-gallery.vercel.app",
      description:
        "Animated cursors for React and Next.js, installable with the shadcn CLI.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Cursor Gallery",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://cursor-gallery.vercel.app",
      description: `${CURSORS.length} animated cursors for React and Next.js, built with Motion and installable with the shadcn CLI. Free and MIT licensed.`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Aadi Chowdhury",
        url: "https://heyaadi.com",
      },
    },
  ],
};

const sectionButton =
  "inline-flex items-center justify-center h-14 px-10 text-xs font-black uppercase tracking-[0.2em] transition-all";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Header />

      <main className="flex-1">
        <Hero />

        <CursorStrip />

        <section
          id="gallery"
          className="py-24 md:py-32 bg-background scroll-mt-16"
        >
          <div className="container mx-auto px-4 max-w-7xl mb-14 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  The gallery
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]">
                  Hover to try.
                  <br />
                  <span className="text-foreground/40">Click to take.</span>
                </h2>
              </div>
              <p className="lg:col-span-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                {FEATURED} favorites out of {CURSORS.length}. Put your pointer
                on any card and it turns into that cursor. Click one for the
                source and the install command.
              </p>
            </div>
          </div>

          <CursorGrid onlyFeatured />

          <div className="mt-14 text-center">
            <Link
              href="/cursors"
              className={`${sectionButton} bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:scale-[1.02]`}
            >
              See all {CURSORS.length}
            </Link>
          </div>
        </section>

        <Install />

        <Features />

        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                Free.
                <br />
                <span className="text-background/40">MIT licensed.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="text-background/70 text-base md:text-lg leading-relaxed">
                Cursor Gallery is made and maintained by Aadi Chowdhury. If one
                of these ends up on your site, a star or a coffee is how the
                next batch gets made.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/sponsor"
                  className={`${sectionButton} bg-background text-foreground hover:bg-background/90`}
                >
                  Sponsor
                </Link>
                <Link
                  href="https://github.com/AadiXC0DE/cursor-gallery"
                  target="_blank"
                  className={`${sectionButton} border-2 border-background/30 hover:border-background`}
                >
                  <GitHubMark className="mr-3 w-4 h-4" />
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
