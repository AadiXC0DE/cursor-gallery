"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubMark, XMark } from "@/components/brand-marks";
import { CURSORS } from "@/registry/cursors";

const NAV = [
  { label: "Gallery", href: "/#gallery" },
  { label: "Install", href: "/#install" },
  { label: "Sponsor", href: "/sponsor" },
];

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/AadiXC0DE/cursor-gallery",
    Mark: GitHubMark,
  },
  { label: "X", href: "https://x.com/AadiChowdhury7", Mark: XMark },
];

const iconButton =
  "inline-flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground transition-colors";

function Logo() {
  return (
    <Link
      href="/"
      className="font-black text-lg tracking-tighter uppercase italic flex items-center gap-2 text-foreground"
    >
      <span className="w-2.5 h-2.5 bg-foreground rounded-full" />
      Cursor Gallery
    </Link>
  );
}

function ThemeToggle({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      type="button"
      className={`${iconButton} relative`}
      onClick={onToggle}
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        {mounted && (
          <>
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-7 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-1 pl-6 border-l border-border">
                {LINKS.map(({ label, href, Mark }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    className={iconButton}
                  >
                    <Mark className="w-4 h-4" />
                    <span className="sr-only">{label}</span>
                  </Link>
                ))}
                <ThemeToggle onToggle={toggleTheme} />
                <Link
                  href="/cursors"
                  className="ml-3 inline-flex items-center h-9 px-5 bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
                >
                  All {CURSORS.length}
                </Link>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-1">
              <ThemeToggle onToggle={toggleTheme} />
              <Sheet>
                <SheetTrigger asChild>
                  <button type="button" className={iconButton}>
                    <Menu className="w-5 h-5" />
                    <span className="sr-only">Open menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="p-0 border-l border-border bg-background w-[300px]"
                >
                  <div className="flex flex-col h-full">
                    <SheetHeader className="h-16 px-6 border-b border-border justify-center text-left">
                      <SheetTitle className="font-black text-lg tracking-tighter uppercase italic">
                        Cursor Gallery
                      </SheetTitle>
                    </SheetHeader>

                    <nav className="flex flex-col px-6 py-6">
                      {[
                        ...NAV,
                        { label: `All ${CURSORS.length}`, href: "/cursors" },
                      ].map((item, i) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-baseline justify-between py-3 border-b border-border font-black text-2xl uppercase italic tracking-tighter text-foreground"
                        >
                          {item.label}
                          <span className="font-mono text-[10px] not-italic text-muted-foreground">
                            0{i + 1}
                          </span>
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-auto px-6 py-6 border-t border-border flex flex-col gap-3 text-sm">
                      {LINKS.map(({ label, href, Mark }) => (
                        <Link
                          key={label}
                          href={href}
                          target="_blank"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                        >
                          <Mark className="w-4 h-4" />
                          {label}
                        </Link>
                      ))}
                      <Link
                        href="https://www.buymeacoffee.com/AadiChowdhury7"
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Buy me a coffee
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
