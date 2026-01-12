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

### 1. Create the Component

Add a new file in:

```
src/registry/cursors/
```

Example: `my-cursor.tsx`

Your component must accept `x` and `y` props (cursor coordinates).

```tsx
"use client"
import { motion } from "framer-motion"

export default function MyCursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="fixed top-0 left-0 pointer-events-none z-50"
    >
      {/* Your cursor content */}
    </motion.div>
  )
}
```

---

### 2. Register the Cursor

Open:

```
src/registry/cursors/index.ts
```

Add a new entry to the `CURSORS` array:

```ts
{
  id: "my-cursor",
  name: "My Cool Cursor",
  description: "Short description of the cursor",
  tags: ["cool", "fun"],
  component: MyCursor,
  code: {
    react: `... component code ...`,
    vanilla: `... optional / pending ...`
  }
}
```

Make sure:

* `id` is unique
* `name` is readable
* `description` is short and clear
* `tags` are relevant

---

### 3. Test Your Cursor

Run the project:

```bash
npm run dev
```

Check that:

* Your cursor appears in the gallery
* It follows the mouse correctly
* No console errors occur

---

## Code Style

* We use **ESLint** and **Prettier**
* Before committing, run:

```bash
npm run lint
```

Fix any lint or formatting issues.

---

## Pull Request Guidelines

* One feature or fix per PR
* Describe what you changed and why
* Make sure:

  * Build works
  * Lint passes
  * App runs locally

---

## Notes

* No direct pushes to `main`
* All changes must go through Pull Requests
* Be respectful and constructive in reviews

Happy hacking! 🚀
