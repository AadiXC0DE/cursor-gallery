"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GitHubMark, XMark } from "@/components/brand-marks";
import { CursorPreview } from "@/components/gallery/cursor-preview";
import { useCursorActions } from "@/components/cursor/cursor-context";
import { cn } from "@/lib/utils";

const button =
  "inline-flex items-center justify-center h-14 px-8 text-xs font-black uppercase tracking-[0.2em] transition-all";

function Way({
  cursor,
  title,
  body,
  children,
}: {
  cursor: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  const { setCursor, resetCursor } = useCursorActions();
  const [hover, setHover] = useState(false);
  return (
    <div
      className="bg-background flex flex-col"
      onMouseEnter={() => {
        setHover(true);
        setCursor(cursor);
      }}
      onMouseLeave={() => {
        setHover(false);
        resetCursor();
      }}
    >
      <div data-cursor-preview className="relative h-56 md:h-64 cursor-none">
        <CursorPreview
          id={cursor}
          live
          hovering={hover}
          scale={3}
          className="absolute inset-0"
        />
      </div>
      <div className="p-6 md:p-10 pt-0 md:pt-0 flex flex-col gap-4 flex-1">
        <h2 className="font-black text-3xl uppercase italic tracking-tighter text-foreground leading-none">
          {title}
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-sm flex-1">
          {body}
        </p>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
}

export default function SponsorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-32 md:pt-40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Sponsor
              </p>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]">
                Keep the
                <br />
                <span className="text-foreground/40">cursors coming.</span>
              </h1>
            </div>
            <p className="lg:col-span-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Cursor Gallery is free and MIT licensed. There&apos;s no paid tier
              and no newsletter. If it made your site a little nicer, here are
              two ways to say thanks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            <Way
              cursor="coffee"
              title="Buy a coffee"
              body="One-off, any amount, takes a minute. It goes straight to the person who makes these and helps pay for the hours the next batch takes."
            >
              <Link
                href="https://www.buymeacoffee.com/AadiChowdhury7"
                target="_blank"
                className={cn(
                  button,
                  "bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto"
                )}
              >
                Buy me a coffee
              </Link>
            </Way>
            <Way
              cursor="star"
              title="Star the repo"
              body="Free, takes one click, and it's how other developers find the project."
            >
              <Link
                href="https://github.com/AadiXC0DE/cursor-gallery"
                target="_blank"
                className={cn(
                  button,
                  "border-2 border-border hover:border-foreground text-foreground w-full sm:w-auto"
                )}
              >
                <GitHubMark className="mr-3 w-4 h-4" />
                Star on GitHub
              </Link>
            </Way>
          </div>
        </div>

        <section className="mt-24 md:mt-32 border-t border-border">
          <div className="container mx-auto px-4 max-w-7xl py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Who makes this
              </p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]">
                Hi, I&apos;m
                <br />
                <span className="text-foreground/40">Aadi.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a design engineer. I&apos;ve designed and built
                products for{" "}
                <span className="text-foreground font-semibold">Philips</span>{" "}
                and{" "}
                <span className="text-foreground font-semibold">
                  Hero MotoCorp
                </span>
                , and helped early-stage startups ship interfaces that feel as
                good as they look.
              </p>
              <p>
                Cursor Gallery is my love letter to the small stuff: the
                micro-interactions people feel without ever quite noticing them.
              </p>
              <Link
                href="https://heyaadi.com"
                target="_blank"
                className="self-start mt-2 text-xs font-black uppercase tracking-[0.2em] text-foreground underline underline-offset-8 decoration-border hover:decoration-foreground transition-colors"
              >
                More about me at heyaadi.com
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background">
          <div className="container mx-auto px-4 max-w-7xl py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
                Found a bug?
                <br />
                <span className="text-background/40">Want a cursor?</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="text-background/70 text-base md:text-lg leading-relaxed">
                Tell me on X. Bug reports, requests and &ldquo;this one would be
                great as a&hellip;&rdquo; messages all welcome.
              </p>
              <Link
                href="https://x.com/AadiChowdhury7"
                target="_blank"
                className={cn(
                  button,
                  "self-start bg-background text-foreground hover:bg-background/90"
                )}
              >
                <XMark className="mr-3 w-4 h-4" />
                Message @AadiChowdhury7
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
