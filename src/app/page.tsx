import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { CursorGrid } from "@/components/gallery/cursor-grid";
import { Features } from "@/components/layout/features";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CLISection } from "@/components/layout/cli-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        <section
          id="gallery"
          className="py-24 relative overflow-hidden bg-muted/20"
        >
          <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                Featured Gallery
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 uppercase italic text-foreground leading-none">
              Premium Selections
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Experience a selection of this library&apos;s finest animated
              cursors. Built with precision and high-end performance in mind.
            </p>
          </div>

          <CursorGrid onlyFeatured={true} />

          <div className="mt-16 text-center">
            <Link href="/cursors">
              <Button
                size="lg"
                className="h-14 px-10 text-xs font-black uppercase tracking-[0.2em] bg-foreground text-background hover:bg-foreground/90 rounded-none shadow-xl transition-all hover:scale-[1.02]"
              >
                Explore Full Library
                <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-24 border-t border-b border-border/50 bg-background overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    CLI Support
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase italic text-foreground leading-none">
                  Zero Config <br />
                  <span className="text-muted-foreground/60">Installation</span>
                </h2>
                <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-8">
                  Our registry is fully compatible with the official Shadcn CLI.
                  Install any cursor directly into your{" "}
                  <code className="text-primary font-bold">
                    components/cursor
                  </code>{" "}
                  folder with one command.
                </p>
              </div>

              <CLISection />
            </div>
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
}
