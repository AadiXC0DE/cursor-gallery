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

## What you get

- 150+ cursors, from a dot ring that reacts to your click to a trail that lags behind the pointer
- React components built on Motion, with a hover state for links and buttons
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
