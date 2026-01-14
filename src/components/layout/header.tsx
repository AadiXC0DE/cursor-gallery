"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight flex items-center gap-2"
          >
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            Cursor Gallery
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
          Cursor Gallery
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground items-center">
            <Link
              href="/#features"
              className="hover:text-foreground transition-all hover:translate-y-[-1px]"
            >
              Features
            </Link>
            <Link
              href="/sponsor"
              className="hover:text-foreground transition-all flex items-center gap-1.5 hover:translate-y-[-1px]"
            >
              Sponsor
              <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.6)]" />
            </Link>
          </nav>

          <div className="flex items-center gap-3 pl-6 border-l border-border/50">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-9 h-9 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                <Link
                  href="https://github.com/AadiXC0DE/cursor-gallery"
                  target="_blank"
                >
                  <Github className="w-[1.2rem] h-[1.2rem]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-9 h-9 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                <Link href="https://x.com/AadiChowdhury7" target="_blank">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[1rem] h-[1rem]"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="sr-only">Twitter (X)</span>
                </Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 hover:bg-accent/50 transition-all"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              size="sm"
              asChild
              className="rounded-full px-5 font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-[0.97]"
            >
              <Link href="/cursors">Browse Gallery</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 hover:bg-accent/50 transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 hover:bg-accent/50 transition-all"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl w-[280px]"
            >
              <div className="flex flex-col h-full overflow-hidden">
                <SheetHeader className="p-6 border-b border-border/50 text-left">
                  <SheetTitle>
                    <span className="font-bold text-lg tracking-tight">
                      Menu
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 px-6 py-6 flex flex-col gap-8 overflow-y-auto">
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 ml-1">
                      Main
                    </p>
                    <nav className="flex flex-col gap-1">
                      <Link
                        href="/#features"
                        className="text-xl font-semibold hover:text-primary transition-all py-2.5 flex items-center justify-between group rounded-lg px-2 hover:bg-accent/50"
                      >
                        Features
                        <span className="text-muted-foreground/20 text-xs font-medium">
                          01
                        </span>
                      </Link>
                      <Link
                        href="/sponsor"
                        className="text-xl font-semibold hover:text-primary transition-all py-2.5 flex items-center justify-between group rounded-lg px-2 hover:bg-accent/50"
                      >
                        Sponsor
                        <span className="text-muted-foreground/20 text-xs font-medium">
                          02
                        </span>
                      </Link>
                      <Link
                        href="/cursors"
                        className="text-xl font-semibold hover:text-primary transition-all py-2.5 flex items-center justify-between group rounded-lg px-2 hover:bg-accent/50"
                      >
                        Gallery
                        <span className="text-muted-foreground/20 text-xs font-medium">
                          03
                        </span>
                      </Link>
                    </nav>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 ml-1">
                      Connect
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-11 justify-start gap-3 rounded-xl border-border/50 hover:bg-accent/50 transition-all font-medium px-4"
                        asChild
                      >
                        <Link
                          href="https://github.com/AadiXC0DE/cursor-gallery"
                          target="_blank"
                        >
                          <Github className="w-4 h-4 text-muted-foreground" />
                          <span>GitHub</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-11 justify-start gap-3 rounded-xl border-border/50 hover:bg-accent/50 transition-all font-medium px-4"
                        asChild
                      >
                        <Link
                          href="https://x.com/AadiChowdhury7"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3.5 h-3.5 text-muted-foreground"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          <span>Twitter</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-11 justify-start gap-3 rounded-xl border-border/50 hover:bg-accent/50 transition-all font-medium px-4"
                        asChild
                      >
                        <Link
                          href="https://www.buymeacoffee.com/AadiChowdhury7"
                          target="_blank"
                        >
                          <div className="w-4 h-4 text-muted-foreground flex items-center justify-center">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-coffee"
                            >
                              <path d="M10 2v2" />
                              <path d="M14 2v2" />
                              <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z" />
                              <path d="M17 12h2a2 2 0 0 1 0 4h-2" />
                              <path d="M6 2v2" />
                            </svg>
                          </div>
                          <span>Buy me a coffee</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-border/50 bg-background/50 mt-auto">
                  <Button
                    size="sm"
                    className="w-full rounded-xl font-bold h-12 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-all active:scale-[0.98]"
                    asChild
                  >
                    <Link href="/cursors">Browse All Cursors</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
