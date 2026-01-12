"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

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
          className="font-bold text-xl tracking-tight flex items-center gap-2"
        >
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          Cursor Gallery
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground items-center">
            <Link
              href="/#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/sponsor"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              Sponsor
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            </Link>
          </nav>

          <div className="flex items-center gap-3 pl-6 border-l">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-9 h-9 text-muted-foreground hover:text-foreground"
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
                className="w-9 h-9 text-muted-foreground hover:text-foreground"
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
              className="w-9 h-9"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              size="sm"
              asChild
              className="hidden sm:flex rounded-full px-5 font-bold"
            >
              <Link href="/cursors">Browse Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
