import Link from "next/link";
import { CURSORS } from "@/registry/cursors";

const COLUMNS = [
  {
    title: "Library",
    links: [
      { label: `All ${CURSORS.length} cursors`, href: "/cursors" },
      { label: "Favorites", href: "/#gallery" },
      { label: "Install", href: "/#install" },
      { label: "Details", href: "/#features" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AadiXC0DE/cursor-gallery",
        external: true,
      },
      { label: "X", href: "https://x.com/AadiChowdhury7", external: true },
      {
        label: "Request a cursor",
        href: "https://x.com/AadiChowdhury7",
        external: true,
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Sponsor", href: "/sponsor" },
      {
        label: "Buy me a coffee",
        href: "https://www.buymeacoffee.com/AadiChowdhury7",
        external: true,
      },
      {
        label: "MIT License",
        href: "https://github.com/AadiXC0DE/cursor-gallery/blob/main/LICENSE",
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24 grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col gap-4 max-w-sm">
          <Link
            href="/"
            className="font-black text-2xl tracking-tighter uppercase italic text-foreground flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-foreground rounded-full" />
            Cursor Gallery
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {CURSORS.length} animated cursors for React. Hover them, take the
            ones you like, change whatever you want. Free and open source.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
          {COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                {column.title}
              </p>
              <ul className="flex flex-col gap-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link ? "_blank" : undefined}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-7xl py-8 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
        <p>
          © 2026 Cursor Gallery. Built by{" "}
          <a
            href="https://x.com/AadiChowdhury7"
            target="_blank"
            className="text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border transition-colors"
          >
            @AadiChowdhury7
          </a>
          .
        </p>
        <p>Point responsibly.</p>
      </div>
    </footer>
  );
}
