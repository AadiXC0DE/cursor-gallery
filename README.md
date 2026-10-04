# Cursor Gallery

A cursor is the thing your pointer does all day, and almost nobody designs it. This is a registry of 100+ animated ones for shadcn/ui.

[![CI](https://github.com/AadiXC0DE/cursor-gallery/actions/workflows/ci.yml/badge.svg)](https://github.com/AadiXC0DE/cursor-gallery/actions/workflows/ci.yml)

![Cursor Gallery](https://cursor-gallery.vercel.app/opengraph-image)

## Install one

```bash
npx shadcn@latest add https://cursor-gallery.vercel.app/registry/dot-ring
```

Swap `dot-ring` for whatever you picked on the site. It lands in your project as a normal shadcn component, so you own the file and can edit it.

Not on the CLI? Every cursor also has a copy button with the React (Motion) version and a plain JS one.

## What you get

- 100+ cursors, from a dot ring that reacts to your click to a trail that lags behind the pointer
- React with Motion, or vanilla JS, same visual
- Reads fine in light and dark
- Nothing to install at runtime and no config to write

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
