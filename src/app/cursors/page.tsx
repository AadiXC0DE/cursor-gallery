import Link from "next/link";
import { Header } from "@/components/layout/header";
import { CursorGrid } from "@/components/gallery/cursor-grid";
import { Footer } from "@/components/layout/footer";
import { CURSORS } from "@/registry/cursors";

export const metadata = {
  title: "All Cursors",
  description: `All ${CURSORS.length} animated cursors for React and Next.js. Hover any card to try it, click for the source and the shadcn install command.`,
  alternates: {
    canonical: "/cursors",
  },
};

const BASE_URL = "https://cursor-gallery.vercel.app";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "All cursors",
  url: `${BASE_URL}/cursors`,
  description: `All ${CURSORS.length} animated cursors for React and Next.js, each installable with the shadcn CLI.`,
  isPartOf: { "@type": "WebSite", name: "Cursor Gallery", url: BASE_URL },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: CURSORS.length,
    itemListElement: CURSORS.map((cursor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: cursor.name,
      url: `${BASE_URL}/cursors/${cursor.id}`,
    })),
  },
};

// Every cursor by name, as plain links, so each page is one click away even
// before the grid above has loaded it.
const A_TO_Z = [...CURSORS].sort((a, b) => a.name.localeCompare(b.name));

export default function CursorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Header />

      <main className="flex-1 pt-32 md:pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-7xl mb-14 md:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
              The library
            </p>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]">
              All {CURSORS.length}.
            </h1>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Hover any card and your pointer turns into that cursor. Click one
            for the source and the install command. Search by name, or narrow it
            down by kind.
          </p>
        </div>
        <CursorGrid />

        <section
          aria-labelledby="a-to-z"
          className="container mx-auto px-4 max-w-7xl mt-24 md:mt-32"
        >
          <div className="flex items-end justify-between gap-6 border-b border-border pb-6 mb-8">
            <h2
              id="a-to-z"
              className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]"
            >
              A to Z
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              {CURSORS.length} pages
            </p>
          </div>
          <ul className="columns-2 sm:columns-3 lg:columns-5 gap-8 text-sm">
            {A_TO_Z.map((cursor) => (
              <li key={cursor.id} className="break-inside-avoid py-1">
                <Link
                  href={`/cursors/${cursor.id}`}
                  prefetch={false}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {cursor.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
