"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-40 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Fully Compatible with Shadcn/UI CLI
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-8 uppercase italic leading-[0.9]">
              Cursors That <br />
              <span className="text-primary/60">Command Attention</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            The ultimate collection of 70+ premium animated cursors for the
            modern web. Engineered with{" "}
            <Link
              href="https://motion.dev"
              target="_blank"
              className="text-foreground hover:text-primary underline decoration-primary/30 underline-offset-4 transition-colors"
            >
              Motion
            </Link>
            , optimized for performance.{" "}
            <span className="text-foreground">Copy, paste, and ship.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/cursors">
              <Button
                size="lg"
                className="h-14 px-10 text-xs font-black uppercase tracking-[0.2em] bg-foreground text-background hover:bg-foreground/90 rounded-none shadow-xl transition-all hover:scale-[1.02]"
              >
                Explore Collection
                <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </Link>

            <Link
              href="https://github.com/AadiXC0DE/cursor-gallery"
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-xs font-black uppercase tracking-[0.2em] rounded-none border-2 hover:bg-muted transition-all"
              >
                <Github className="mr-3 w-4 h-4" />
                Star on GitHub
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges / stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 pt-12 border-t border-border flex flex-wrap justify-center items-center gap-12"
          >
            {[
              { label: "CURSORS", value: "70+" },
              { label: "ENGINE", value: "MOTION" },
              { label: "LIBRARY", value: "SHADCN" },
              { label: "LICENSE", value: "MIT" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <p className="text-[10px] font-black tracking-[0.2em] text-muted-foreground/50 group-hover:text-muted-foreground transition-colors mb-1">
                  {stat.label}
                </p>
                <p className="text-lg font-black text-foreground/60 group-hover:text-foreground transition-colors tracking-tighter italic uppercase">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
