# Contributing to Cursor Gallery

We welcome contributions! Whether you want to add a new cursor style, fix a bug, or improve documentation, here's how to get started.

## Adding a New Cursor

1.  **Create the Component**:
    Add a new file in `src/registry/cursors/` (e.g., `my-cursor.tsx`).
    It must accept `x` and `y` props (coordinates).

    ```tsx
    "use client";
    import { motion } from "framer-motion";

    export default function MyCursor({ x, y }: { x: number; y: number }) {
      return (
        <motion.div
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
          className="fixed top-0 left-0 pointer-events-none z-50 ..."
        >
          {/* Your cursor content */}
        </motion.div>
      );
    }
    ```

2.  **Register it**:
    Open `src/registry/cursors/index.ts` and add a new entry to the `CURSORS` array.

    ```typescript
    {
      id: "my-cursor",
      name: "My Cool Cursor",
      description: "Description here",
      tags: ["cool", "new"],
      component: MyCursor,
      code: {
         react: `... component code ...`,
         vanilla: `... pending ...`
      }
    }
    ```

3.  **Test**:
    Run `npm run dev` and check if it appears in the gallery and works correcty.

## Code Style

- We use **ESLint** and **Prettier**.
- Run `npm run lint` before committing.
