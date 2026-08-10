import { Header } from "@/components/layout/header";
import { CursorGrid } from "@/components/gallery/cursor-grid";
import { Footer } from "@/components/layout/footer";
import { CURSORS } from "@/registry/cursors";

export const metadata = {
  title: "All Cursors",
  description: `Browse the full collection of ${CURSORS.length}+ custom animated cursors for React, Next.js, and Vanilla JS. Optimized for performance, installable via the Shadcn CLI.`,
  alternates: {
    canonical: "/cursors",
  },
};

export default function CursorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            All Cursors
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our growing library of {CURSORS.length}+ high-quality
            animated cursors. Optimized for performance and easy to integrate.
          </p>
        </div>
        <CursorGrid />
      </main>

      <Footer />
    </div>
  );
}
