import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CursorShowcase } from "@/components/gallery/cursor-showcase";
import { CursorLinkCard } from "@/components/gallery/cursor-link-card";
import { ServerCode } from "@/components/code/server-code";
import { CopyButton } from "@/components/code/copy-button";
import { CURSORS, type CursorDefinition } from "@/registry/cursors";
import { generateVanillaCursor } from "@/lib/generate-vanilla-cursor";

const BASE_URL = "https://cursor-gallery.vercel.app";
const REPO = "https://github.com/AadiXC0DE/cursor-gallery";

// Every cursor is known at build time, so anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CURSORS.map((cursor) => ({ id: cursor.id }));
}

type Props = { params: Promise<{ id: string }> };

const findCursor = (id: string) => CURSORS.find((cursor) => cursor.id === id);

const describe = (cursor: CursorDefinition) =>
  `${cursor.description.replace(/\.$/, "")}. Install with the shadcn CLI.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cursor = findCursor(id);
  if (!cursor) return {};
  const title = `${cursor.name} cursor for React`;
  const description = describe(cursor);
  const url = `/cursors/${cursor.id}`;
  return {
    title,
    description,
    keywords: [
      `${cursor.name.toLowerCase()} cursor`,
      "animated cursor",
      "react cursor",
      "custom cursor",
      "shadcn registry",
      ...cursor.tags,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Cursor Gallery",
      url,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@AadiChowdhury7",
      images: [`${url}/opengraph-image`],
    },
  };
}

function readSource(id: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "registry", "cursors", `${id}.tsx`),
    "utf-8"
  );
}

/** Cursors that share the most tags, nearest in the registry first. */
function relatedTo(cursor: CursorDefinition, count = 8) {
  const index = CURSORS.indexOf(cursor);
  return CURSORS.filter((other) => other.id !== cursor.id)
    .map((other) => {
      // "animated" is on most cursors, so it says little about likeness.
      const score = other.tags.reduce(
        (sum, tag) =>
          cursor.tags.includes(tag)
            ? sum + (tag === "animated" ? 0.5 : 2)
            : sum,
        0
      );
      return {
        other,
        score,
        distance: Math.abs(CURSORS.indexOf(other) - index),
      };
    })
    .sort((a, b) => b.score - a.score || a.distance - b.distance)
    .slice(0, count)
    .map(({ other }) => other);
}

const label =
  "text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground";
const panel = "bg-[#0a0a0a] border border-white/10 text-white";
const panelBar =
  "flex items-center justify-between border-b border-white/10 pl-4";

export default async function CursorPage({ params }: Props) {
  const { id } = await params;
  const cursor = findCursor(id);
  if (!cursor) notFound();

  const index = CURSORS.indexOf(cursor);
  const prev = CURSORS[(index - 1 + CURSORS.length) % CURSORS.length];
  const next = CURSORS[(index + 1) % CURSORS.length];
  const source = readSource(cursor.id);
  const vanilla = generateVanillaCursor(cursor.id);
  const component =
    source.match(/export default function (\w+)/)?.[1] ?? "Cursor";
  const install = `npx shadcn@latest add ${BASE_URL}/registry/${cursor.id}`;
  const usage = `import { CustomCursor } from "@/components/cursor/custom-cursor";
import ${component} from "@/components/cursor/${cursor.id}";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor cursor={${component}} />
      </body>
    </html>
  );
}`;
  const url = `${BASE_URL}/cursors/${cursor.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        "@id": `${url}#source`,
        name: `${cursor.name} cursor`,
        description: describe(cursor),
        url,
        image: `${url}/opengraph-image`,
        codeRepository: REPO,
        programmingLanguage: ["TypeScript", "React"],
        runtimePlatform: "React",
        license: "https://opensource.org/licenses/MIT",
        keywords: cursor.tags.join(", "),
        author: {
          "@type": "Person",
          name: "Aadi Chowdhury",
          url: "https://heyaadi.com",
        },
        isPartOf: {
          "@type": "WebSite",
          name: "Cursor Gallery",
          url: BASE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Cursor Gallery",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cursors",
            item: `${BASE_URL}/cursors`,
          },
          { "@type": "ListItem", position: 3, name: cursor.name, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 pt-28 md:pt-36 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 md:mb-14 font-mono text-[11px] text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/cursors"
                  className="hover:text-foreground transition-colors"
                >
                  Cursors
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {cursor.name}
              </li>
            </ol>
          </nav>

          {/* Name and preview */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <p className={label}>
                Cursor {String(index + 1).padStart(3, "0")} of {CURSORS.length}
              </p>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9] break-words">
                {cursor.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {cursor.description.replace(/\.$/, "")}.
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[12px] text-muted-foreground">
                {cursor.tags.map((tag) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <CursorShowcase id={cursor.id} name={cursor.name} />
            </div>
          </section>

          {/* Install */}
          <section
            aria-labelledby="install"
            className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border"
          >
            <div className="bg-background p-6 md:p-10 flex flex-col gap-5 min-w-0">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  01
                </span>
                <h2
                  id="install"
                  className="font-black text-2xl md:text-3xl uppercase italic tracking-tighter text-foreground leading-none"
                >
                  Add it
                </h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                One command. It adds{" "}
                <code className="font-mono text-foreground">
                  components/cursor/{cursor.id}.tsx
                </code>
                , the shared{" "}
                <code className="font-mono text-foreground">
                  custom-cursor.tsx
                </code>{" "}
                host, and framer-motion if you don&apos;t have it.
              </p>
              <div className={panel}>
                <div className={panelBar}>
                  <span className="font-mono text-[11px] text-white/50">
                    Terminal
                  </span>
                  <CopyButton
                    text={install}
                    className="border-l border-white/10"
                  />
                </div>
                <p className="p-5 font-mono text-[13px] leading-relaxed break-words">
                  <span className="text-white/30 select-none">$ </span>
                  npx shadcn@latest add{" "}
                  <span className="text-white/60">
                    <span className="whitespace-nowrap">
                      https://cursor-gallery.vercel.app/
                    </span>
                    <wbr />
                    registry/
                    <wbr />
                    <span className="text-white">{cursor.id}</span>
                  </span>
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                Added the Cursor Gallery registry to your{" "}
                <code className="font-mono">components.json</code>? Then{" "}
                <code className="font-mono text-foreground">
                  npx shadcn@latest add @cursor-gallery/{cursor.id}
                </code>{" "}
                works too.{" "}
                <a
                  href={`${REPO}#readme`}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  How to set it up
                </a>
                .
              </p>
            </div>

            <div className="bg-background p-6 md:p-10 flex flex-col gap-5 min-w-0">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  02
                </span>
                <h2 className="font-black text-2xl md:text-3xl uppercase italic tracking-tighter text-foreground leading-none">
                  Mount it
                </h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                Once, in your root layout. It follows the pointer, hides the
                system cursor while it&apos;s mounted, switches to the hover
                state over links and buttons, and does nothing on touch screens.
              </p>
              <div className={panel}>
                <div className={panelBar}>
                  <span className="font-mono text-[11px] text-white/50">
                    app/layout.tsx
                  </span>
                  <CopyButton
                    text={usage}
                    className="border-l border-white/10"
                  />
                </div>
                <ServerCode code={usage} language="tsx" />
              </div>
            </div>
          </section>

          {/* Source */}
          <section aria-labelledby="source" className="mt-20 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
              <div className="lg:col-span-7">
                <p className={`${label} mb-6`}>The source</p>
                <h2
                  id="source"
                  className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]"
                >
                  It&apos;s your file.
                </h2>
              </div>
              <p className="lg:col-span-5 text-muted-foreground text-base leading-relaxed">
                This is exactly what the CLI copies into your project. React and
                framer-motion, nothing else, so change the colors, the timing or
                the drawing.
              </p>
            </div>

            <div className={panel}>
              <div className={panelBar}>
                <span className="font-mono text-[11px] text-white/50">
                  components/cursor/{cursor.id}.tsx
                </span>
                <CopyButton
                  target="react-source"
                  className="border-l border-white/10"
                />
              </div>
              <ServerCode
                id="react-source"
                code={source}
                language="tsx"
                className="max-h-[640px]"
              />
            </div>

            {vanilla ? (
              <div className="mt-10">
                <h3 className="font-black text-xl md:text-2xl uppercase italic tracking-tighter text-foreground leading-none">
                  Not on React?
                </h3>
                <p className="mt-3 mb-5 text-sm text-muted-foreground leading-relaxed max-w-xl">
                  The same cursor as one snippet with no dependencies. Paste it
                  anywhere in the page body.
                </p>
                <div className={panel}>
                  <div className={panelBar}>
                    <span className="font-mono text-[11px] text-white/50">
                      {cursor.id}.html
                    </span>
                    <CopyButton
                      target="vanilla-source"
                      className="border-l border-white/10"
                    />
                  </div>
                  <ServerCode
                    id="vanilla-source"
                    code={vanilla}
                    language="html"
                    highlight={false}
                    className="max-h-[480px]"
                  />
                </div>
              </div>
            ) : (
              <p className="mt-4 text-xs text-muted-foreground">
                React only for now. The illustrated cursors also come as a plain
                HTML snippet.
              </p>
            )}
          </section>

          {/* Related */}
          <section aria-labelledby="related" className="mt-20 md:mt-28">
            <div className="flex items-end justify-between gap-6 mb-8">
              <h2
                id="related"
                className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-foreground leading-[0.9]"
              >
                More like this
              </h2>
              <Link
                href="/cursors"
                className="shrink-0 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                All {CURSORS.length}
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
              {relatedTo(cursor).map((other) => (
                <CursorLinkCard
                  key={other.id}
                  id={other.id}
                  name={other.name}
                  description={other.description}
                />
              ))}
            </div>
          </section>

          {/* Previous and next */}
          <nav
            aria-label="More cursors"
            className="mt-px grid grid-cols-2 gap-px bg-border border border-t-0 border-border"
          >
            <Link
              href={`/cursors/${prev.id}`}
              rel="prev"
              className="bg-background p-6 md:p-8 hover:bg-muted/40 transition-colors"
            >
              <span className={label}>Previous</span>
              <span className="mt-2 block font-black text-xl md:text-3xl uppercase italic tracking-tighter text-foreground leading-none">
                {prev.name}
              </span>
            </Link>
            <Link
              href={`/cursors/${next.id}`}
              rel="next"
              className="bg-background p-6 md:p-8 text-right hover:bg-muted/40 transition-colors"
            >
              <span className={label}>Next</span>
              <span className="mt-2 block font-black text-xl md:text-3xl uppercase italic tracking-tighter text-foreground leading-none">
                {next.name}
              </span>
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
