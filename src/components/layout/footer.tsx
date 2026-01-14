import Link from "next/link";
import { Github, Twitter, Coffee, PlusCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-24 bg-muted/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="font-black text-2xl tracking-tighter uppercase italic text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            Cursor Gallery
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A curated collection of 70+ high-end animated cursors. Engineered
            for performance, designed for impact. Free and open-source for the
            modern web.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
              Library
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href="/cursors"
                className="hover:text-primary transition-colors"
                aria-label="All Cursors"
              >
                All Cursors
              </Link>
              <Link
                href="/#gallery"
                className="hover:text-primary transition-colors"
              >
                Featured
              </Link>
              <Link
                href="/#features"
                className="hover:text-primary transition-colors"
              >
                Features
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
              Connect
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="https://github.com/AadiXC0DE/cursor-gallery"
                target="_blank"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="https://x.com/AadiChowdhury7"
                target="_blank"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Twitter className="w-3.5 h-3.5" />
                Twitter (X)
              </a>
              <a
                href="https://x.com/AadiChowdhury7"
                target="_blank"
                className="hover:text-primary transition-colors flex items-center gap-2 font-medium"
              >
                <PlusCircle className="w-3.5 h-3.5 text-primary" />
                Request a Cursor
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
              Support
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href="/sponsor"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                Sponsor Project
              </Link>
              <a
                href="https://www.buymeacoffee.com/AadiChowdhury7"
                target="_blank"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <Coffee className="w-3.5 h-3.5" />
                Buy me a coffee
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                License
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 flex items-center gap-1.5">
          © 2026 Cursor Gallery. Built by{" "}
          <a
            href="https://x.com/AadiChowdhury7"
            target="_blank"
            className="hover:text-primary transition-colors underline decoration-primary/20 flex items-center gap-1"
          >
            <Twitter className="w-2.5 h-2.5" />
            @AadiChowdhury7
          </a>
          .
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
          PREMIUM ASSETS FOR PREMIUM BUILDERS.
        </p>
      </div>
    </footer>
  );
}
