# Cursor Gallery

A cursor is the thing your pointer does all day, and almost nobody designs it. This is a registry of 150+ animated ones for shadcn/ui.

[![CI](https://github.com/AadiXC0DE/cursor-gallery/actions/workflows/ci.yml/badge.svg)](https://github.com/AadiXC0DE/cursor-gallery/actions/workflows/ci.yml)

![Cursor Gallery](https://cursor-gallery.vercel.app/opengraph-image)

## Install one

```bash
npx shadcn@latest add https://cursor-gallery.vercel.app/registry/dot-ring
```

Swap `dot-ring` for whatever you picked on the site. The CLI installs `framer-motion` and adds two files to your components folder:

- `components/cursor/dot-ring.tsx`, the cursor itself
- `components/cursor/custom-cursor.tsx`, a small host that follows the pointer and hides the system cursor. Every cursor shares it, so it only lands once.

Then mount it once in your root layout, inside `<body>`:

```tsx
import { CustomCursor } from "@/components/cursor/custom-cursor";
import DotRingCursor from "@/components/cursor/dot-ring";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor cursor={DotRingCursor} />
      </body>
    </html>
  );
}
```

That's it. The host stays out of the way until the mouse first moves, does nothing on touch screens, and tells the cursor when it's over a link or button so it can react. Trying a different cursor later is one more `add` and a changed import. Both files are yours to edit.

Not on the CLI? Every cursor has a copy button on the site with its React source, and many also come as a plain HTML snippet with no dependencies.

## Use it from AI agents and scripts

Everything on the site is also plain data, so a coding agent can find and install a cursor without opening a browser.

**shadcn namespace.** Add this to `components.json` once:

```json
{
  "registries": {
    "@cursor-gallery": "https://cursor-gallery.vercel.app/r/{name}.json"
  }
}
```

Then install by name, search, or list the whole catalog:

```bash
npx shadcn@latest add @cursor-gallery/penguin
npx shadcn@latest search @cursor-gallery -q duck
npx shadcn@latest list @cursor-gallery
```

The [shadcn MCP server](https://ui.shadcn.com/docs/mcp) (`npx shadcn@latest mcp init`) reads the same namespace, so Claude Code, Cursor, Codex and other MCP clients can browse and install cursors when you ask them to.

**Registry index.** [`/r/registry.json`](https://cursor-gallery.vercel.app/r/registry.json) lists every item in the shadcn registry format, and `/r/<id>.json` returns one item with its full source.

**llms.txt.** [`/llms.txt`](https://cursor-gallery.vercel.app/llms.txt) is a short guide with a link to every cursor. [`/llms-full.txt`](https://cursor-gallery.vercel.app/llms-full.txt) adds the install command, import line and props for each one, plus the host component source.

**A page per cursor.** `https://cursor-gallery.vercel.app/cursors/<id>` has the live preview, the install command and the source.

## What you get

- 150+ cursors, from a dot ring that reacts to your click to a trail that lags behind the pointer
- React components built on Motion, with a hover state for links and buttons
- A shadcn registry, an llms.txt and a page per cursor, so people and agents can both find them
- Reads fine in light and dark
- The illustrated ones hold still when reduced motion is on

## Run it locally

```bash
git clone https://github.com/AadiXC0DE/cursor-gallery.git
cd cursor-gallery
npm install
npm run dev
```

Then open http://localhost:3000.

## Adding a cursor

Fork it, drop your component in, open a PR. CI runs ESLint, Prettier, tsc and a build, so clear these first:

```bash
npm run lint
npm run format
npx tsc --noEmit
npm run build
```

Details in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Stack

Next.js 16 on the app router, Tailwind v4, shadcn/ui, Motion for the animation, Shiki for the code panels.

## License

MIT. See [LICENSE](./LICENSE).
