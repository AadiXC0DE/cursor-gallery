"use client";

import {
  MousePointer2,
  Zap,
  Palette,
  Code2,
  Download,
  Component,
} from "lucide-react";

const FEATURES = [
  {
    icon: MousePointer2,
    title: "Visual First",
    description:
      "Browse cursors visually. Hover to preview instantly on your own screen.",
  },
  {
    icon: Code2,
    title: "React & JS Ready",
    description: (
      <>
        Copy-paste components for React (
        <a
          href="https://motion.dev"
          target="_blank"
          className="underline decoration-primary/30 hover:text-primary transition-colors"
        >
          Motion
        </a>
        ) or vanilla JavaScript.
      </>
    ),
  },
  {
    icon: Zap,
    title: "Zero Config",
    description:
      "Drop into any Next.js, Vite, or Cra project. No complex setup required.",
  },
  {
    icon: Palette,
    title: "Shadcn/UI Ready",
    description:
      "Designed to look and feel like part of the Shadcn ecosystem. Seamless integration.",
  },
  {
    icon: Component,
    title: "Performance",
    description:
      "Lightweight animations powered by CSS transforms and requestAnimationFrame.",
  },
  {
    icon: Download,
    title: "Open Source",
    description:
      "Free to use for personal and commercial projects. MIT Licensed.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-32 bg-background border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic text-foreground leading-none">
            Engineering <br />
            <span className="text-muted-foreground/60">Micro-Interactions</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium max-w-xl">
            Everything is built for performance and absolute control. Every
            cursor is optimized for high-refresh-rate displays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group relative flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center text-foreground border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-black text-xl uppercase italic tracking-tighter text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
