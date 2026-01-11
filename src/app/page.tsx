import { Header } from "@/components/layout/header"
import { Hero } from "@/components/layout/hero"
import { CursorGrid } from "@/components/gallery/cursor-grid"
import { Features } from "@/components/layout/features"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section id="gallery" className="py-24 relative overflow-hidden bg-muted/20">
            <div className="container mx-auto px-4 mb-16 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic text-foreground leading-none">
                    Premium <br />
                    <span className="text-muted-foreground/60">Selections</span>
                </h2>
                <p className="text-muted-foreground text-lg font-medium max-w-xl">
                    Experience a selection of this library's finest animated cursors. 
                    Built with precision and high-end performance in mind.
                </p>
            </div>
            
            <CursorGrid onlyFeatured={true} />

            <div className="mt-16 text-center">
                <Link href="/cursors">
                    <Button size="lg" className="h-14 px-10 text-xs font-black uppercase tracking-[0.2em] bg-foreground text-background hover:bg-foreground/90 rounded-none shadow-xl transition-all hover:scale-[1.02]">
                        Explore Full Library
                        <ArrowRight className="ml-3 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </section>

        <Features />
      </main>

      <Footer />
    </div>
  );
}
