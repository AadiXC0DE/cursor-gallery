"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { CodeBlock } from "@/components/code/code-block";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { cn } from "@/lib/utils";

const DEMO_ID = "arcade-coin";
const REGISTRY = "https://cursor-gallery.vercel.app/registry";

const PACKAGE_MANAGERS = [
  { name: "npm", command: "npx" },
  { name: "pnpm", command: "pnpm dlx" },
  { name: "yarn", command: "yarn dlx" },
  { name: "bun", command: "bunx --bun" },
];

const USAGE = `import { CustomCursor } from "@/components/cursor/custom-cursor";
import ArcadeCoinCursor from "@/components/cursor/arcade-coin";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor cursor={ArcadeCoinCursor} />
      </body>
    </html>
  );
}`;

function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          // Clipboard can be blocked; the text is still selectable.
        }
      }}
      className={cn(
        "inline-flex items-center justify-center w-9 h-9 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors",
        className
      )}
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

function Terminal() {
  const [pm, setPm] = useState(PACKAGE_MANAGERS[0]);
  const command = `${pm.command} shadcn@latest add ${REGISTRY}/${DEMO_ID}`;
  return (
    <div className="bg-[#0a0a0a] border border-white/10 text-white">
      <div className="flex items-center justify-between border-b border-white/10 pl-4">
        <div className="flex">
          {PACKAGE_MANAGERS.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setPm(item)}
              className={cn(
                "h-10 px-3 text-[11px] font-mono transition-colors border-b-2 -mb-px",
                pm.name === item.name
                  ? "text-white border-white"
                  : "text-white/40 border-transparent hover:text-white/70"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
        <CopyButton text={command} className="border-0 border-l h-10 w-10" />
      </div>
      <p className="p-5 font-mono text-[13px] leading-relaxed break-words">
        <span className="text-white/30 select-none">$ </span>
        {pm.command} shadcn@latest add{" "}
        <span className="text-white/60">
          <span className="whitespace-nowrap">
            https://cursor-gallery.vercel.app/
          </span>
          <wbr />
          registry/
          <wbr />
          <span className="text-white">{DEMO_ID}</span>
        </span>
      </p>
    </div>
  );
}

/** A tiny page where the cursor drifts onto a button and back. */
function HoverDemo() {
  const reduceMotion = useReducedMotion();
  const [over, setOver] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setOver((v) => !v), 2400);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="relative border border-border bg-background overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-4 h-9">
        <div className="h-4 flex-1 max-w-56 bg-muted/60 px-2 flex items-center">
          <span className="font-mono text-[10px] text-muted-foreground">
            your-site.com
          </span>
        </div>
      </div>
      <div className="relative h-56 md:h-64 p-6 md:p-8">
        <div className="space-y-2.5">
          <div className="h-3.5 w-2/3 bg-muted" />
          <div className="h-3.5 w-1/2 bg-muted" />
          <div className="h-2 w-3/4 bg-muted/60 mt-5" />
          <div className="h-2 w-2/3 bg-muted/60" />
        </div>
        <div
          className={cn(
            "absolute left-6 md:left-8 bottom-8 h-10 pl-5 pr-20 inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300",
            over
              ? "bg-foreground text-background"
              : "bg-foreground/90 text-background"
          )}
        >
          Insert coin
        </div>
        <div
          className="absolute transition-all duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={
            over
              ? { left: "10.25rem", top: "calc(100% - 3.6rem)" }
              : { left: "72%", top: "38%" }
          }
        >
          <CursorPreview
            id={DEMO_ID}
            live
            hovering={over}
            scale={1.6}
            className="w-0 h-0"
          />
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    title: "Add it",
    body: "Run this in your project. You get the cursor, a small host component that follows the pointer, and framer-motion if it isn't installed yet.",
  },
  {
    title: "Mount it",
    body: "Put it in your root layout, once. While it's mounted the system cursor is hidden, and on touch screens it switches itself off.",
  },
  {
    title: "Ship it",
    body: "Over links and buttons it switches to its hover state, like the coin dropping into the slot. That's the whole setup, and the file is yours to change.",
  },
];

function Step({ n, children }: { n: number; children?: React.ReactNode }) {
  const step = STEPS[n];
  return (
    <div className="flex flex-col gap-6 p-6 md:p-10 bg-background">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          0{n + 1}
        </span>
        <h3 className="font-black text-2xl md:text-3xl uppercase italic tracking-tighter text-foreground leading-none">
          {step.title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
        {step.body}
      </p>
      {children}
    </div>
  );
}

export function Install() {
  return (
    <section
      id="install"
      className="py-24 md:py-32 bg-background border-t border-border scroll-mt-16"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Install
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]">
              One command.
              <br />
              <span className="text-foreground/40">One line.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Every cursor is a shadcn registry item. The CLI copies the source
            into your project, so there&apos;s no package to keep updated and
            nothing stopping you from changing it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
          <Step n={0}>
            <Terminal />
            <div className="font-mono text-[12px] leading-relaxed text-muted-foreground border-l border-border pl-4">
              <p className="text-foreground">components/cursor/</p>
              <p className="pl-4">
                arcade-coin.tsx{" "}
                <span className="text-muted-foreground/50">the cursor</span>
              </p>
              <p className="pl-4">
                custom-cursor.tsx{" "}
                <span className="text-muted-foreground/50">
                  follows the pointer
                </span>
              </p>
            </div>
          </Step>
          <Step n={1}>
            <div className="relative bg-[#0a0a0a] border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pl-4">
                <span className="font-mono text-[11px] text-white/50">
                  app/layout.tsx
                </span>
                <CopyButton
                  text={USAGE}
                  className="border-0 border-l h-10 w-10"
                />
              </div>
              <CodeBlock
                code={USAGE}
                language="tsx"
                className="[&_div]:!p-5 [&_pre]:!text-[12px] [&_pre]:!leading-relaxed"
              />
            </div>
          </Step>
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            <Step n={2} />
            <div className="p-6 md:p-10 bg-background">
              <HoverDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
