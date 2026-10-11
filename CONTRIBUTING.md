# Contributing to Cursor Gallery

Thanks for your interest in contributing to **Cursor Gallery**!
You can help by adding new cursor styles, fixing bugs, improving performance, or updating documentation.

All contributions are welcome.

---

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch:

```bash
git checkout -b my-feature
```

4. Make your changes
5. Test locally
6. Commit and open a Pull Request to `main`

---

## Adding a New Cursor

### 1. Create the component

Add a file in `src/registry/cursors/`, for example `my-cursor.tsx`. The file name becomes the cursor id, and the CLI serves this file as-is, so keep it self-contained: `react` and `framer-motion` are the only imports it can rely on.

The default export receives the pointer position and two flags:

- `x`, `y`: the pointer position in viewport pixels
- `isHovering`: true while the pointer is over a link, button or form control. Give it a response that suits the cursor.
- `isStatic`: true in gallery cards. Render a single good-looking frozen pose and skip loops. Treat `useReducedMotion()` the same way.

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MyCursor({
  x,
  y,
  isHovering,
  isStatic,
}: {
  x: number;
  y: number;
  isHovering?: boolean;
  isStatic?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const frozen = isStatic || reducedMotion;
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-sky-400"
        animate={{ scale: !frozen && isHovering ? 1.6 : 1 }}
      />
    </motion.div>
  );
}
```

Keep the cursor centered on the pointer and roughly 40px or smaller, and check it on both light and dark backgrounds.

### 2. Register it

Open `src/registry/cursors/index.ts`, import the component, and add an entry to `CURSORS`:

```ts
{
  id: "my-cursor", // must match the file name
  name: "My Cursor",
  description: "One short line about what it does",
  tags: ["animated", "playful"],
  component: MyCursor,
  code: { react: `// My cursor`, vanilla: `// Pending` },
},
```

The site and the CLI read the real source from the file, so `code` only holds placeholders.

### 3. Test it

```bash
npm run dev
```

- Hover its card on http://localhost:3000/cursors and check the live cursor, its hover state, and the frozen card preview.
- Check the CLI install from a scratch shadcn project: `npx shadcn@latest add http://localhost:3000/registry/my-cursor`, then mount it with `<CustomCursor cursor={MyCursor} />` as shown in the README.

---

## Code Style

- We use **ESLint** and **Prettier**
- Before committing, run the same checks CI does:

```bash
npm run lint
npm run format
npx tsc --noEmit
npm test
npm run build
```

---

## Pull Request Guidelines

- One feature or fix per PR
- Describe what you changed and why
- Make sure:
  - Build works
  - Lint passes
  - App runs locally

---

## Notes

- No direct pushes to `main`
- All changes must go through Pull Requests
- Be respectful and constructive in reviews

Happy hacking! 🚀
