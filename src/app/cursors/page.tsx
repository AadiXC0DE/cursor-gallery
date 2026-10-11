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

export default function CursorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
      </main>

      <Footer />
    </div>
  );
}
