# Cursor Gallery

[![CI](https://github.com/AadiXC0DE/cursor-gallery/actions/workflows/ci.yml/badge.svg)](https://github.com/AadiXC0DE/cursor-gallery/actions/workflows/ci.yml)

> **The ultimate cursor registry for Shadcn/UI** — A curated collection of 100+ high-end animated cursors. Engineered with Motion, designed for impact.

![Project Preview](https://cursor-gallery.vercel.app/opengraph-image)

## 🚀 Quick Install (Shadcn CLI)

You can now install any cursor directly into your project using the Shadcn CLI:

```bash
# Browse and install any cursor
npx shadcn@latest add https://cursor-gallery.vercel.app/registry

# Or install a specific cursor (e.g., dot-ring)
npx shadcn@latest add https://cursor-gallery.vercel.app/registry/dot-ring
```

## Features

- **Visual-First Browsing**: 100+ High-quality cursor styles.
- **Shadcn CLI Support**: Install components directly into your codebase.
- **Copy-Paste Ready**: Get React (Motion) or Vanilla JS code instantly.
- **Theme Aware**: Built for Dark and Light modes out of the box.
- **Open Source**: Free to use and contribute. MIT Licensed.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/AadiXC0DE/cursor-gallery.git
   cd cursor-gallery
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** to view the gallery.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4, Shadcn/UI
- **Animation**: Motion (Framer Motion)
- **Code Highlighting**: Shiki

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Workflow

This project uses automated CI checks for all pull requests:

- ✅ **ESLint** - Code quality and best practices
- ✅ **Prettier** - Code formatting
- ✅ **TypeScript** - Type safety
- ✅ **Build Check** - Ensures code compiles

All checks must pass before a PR can be merged. See [Branch Protection Guide](./.github/BRANCH_PROTECTION.md) for setup instructions.

### Running Checks Locally

```bash
# Run linting
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Check formatting
npm run format:check

# Format code
npm run format

# Type check
npx tsc --noEmit

# Build
npm run build
```

## License

MIT © [Aadi Chowdhury](https://x.com/AadiChowdhury7)
