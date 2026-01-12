import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { CursorGrid } from "@/components/gallery/cursor-grid";
import { Features } from "@/components/layout/features";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
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

              <div className="w-full max-w-2xl">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-[#0d0d0d] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                          Terminal
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                      <div className="flex items-start gap-4">
                        <span className="text-primary mt-1 shrink-0">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="w-4 h-4"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                        <div className="space-y-4">
                          <p className="text-white/90 leading-relaxed font-bold break-all">
                            npx shadcn@latest add{" "}
                            <span className="text-primary">
                              https://cursor-gallery.vercel.app/registry/cursor-float
                            </span>
                          </p>
                          <div className="space-y-1">
                            <p className="text-white/40 text-xs italic">
                              # Fetches 100+ premium animated cursors
                            </p>
                            <p className="text-white/40 text-xs italic">
                              # Dependencies installed automatically
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
}
