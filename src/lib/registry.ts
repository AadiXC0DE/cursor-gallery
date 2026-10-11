import fs from "fs";
import path from "path";
import { CURSORS, type CursorDefinition } from "@/registry/cursors";

const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";
export const HOST_NAME = "custom-cursor";

const readSource = (...segments: string[]) => {
  const filePath = path.join(process.cwd(), "src", "registry", ...segments);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : null;
};

// `@components/` resolves to the components alias in the user's
// components.json, so files land next to their other components.
const file = (source: string, target: string, content?: string) => ({
  path: `registry/${source}`,
  type: "registry:component",
  target: `@components/cursor/${target}`,
  ...(content === undefined ? {} : { content }),
});

const usage = (cursor: CursorDefinition, source: string | null) => {
  const component =
    source?.match(/export default function (\w+)/)?.[1] ?? "Cursor";
  return `Mount it once in your root layout, inside <body>:

import { CustomCursor } from "@/components/cursor/custom-cursor";
import ${component} from "@/components/cursor/${cursor.id}";

<CustomCursor cursor={${component}} />`;
};

export function hostItem(withContent = true) {
  const content = withContent ? readSource("custom-cursor.tsx") : undefined;
  return {
    $schema: SCHEMA,
    name: HOST_NAME,
    type: "registry:component",
    title: "Custom Cursor",
    description:
      "Follows the pointer and renders a Cursor Gallery cursor in place of the system one.",
    files: [
      file("custom-cursor.tsx", "custom-cursor.tsx", content ?? undefined),
    ],
  };
}

export function cursorItem(
  cursor: CursorDefinition,
  hostUrl: string,
  withContent = true
) {
  const source = readSource("cursors", `${cursor.id}.tsx`);
  const content = withContent ? (source ?? undefined) : undefined;
  return {
    $schema: SCHEMA,
    name: cursor.id,
    type: "registry:component",
    title: cursor.name,
    description: cursor.description,
    dependencies: ["framer-motion"],
    registryDependencies: [hostUrl],
    files: [file(`cursors/${cursor.id}.tsx`, `${cursor.id}.tsx`, content)],
    categories: cursor.tags,
    docs: usage(cursor, source),
  };
}

export function findCursor(slug: string) {
  // Older links use the `cursor-` prefix, so accept both forms.
  const id = slug.replace(/\.json$/, "");
  return (
    CURSORS.find((cursor) => cursor.id === id) ??
    CURSORS.find((cursor) => `cursor-${cursor.id}` === id)
  );
}

/**
 * The shadcn registry index. Item contents are left out to keep it small;
 * each item is served in full at its own URL.
 */
export function registryIndex(hostUrl: string) {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "cursor-gallery",
    homepage: "https://cursor-gallery.vercel.app",
    items: [
      hostItem(false),
      ...CURSORS.map((cursor) => cursorItem(cursor, hostUrl, false)),
    ].map((item) => {
      const { $schema, ...rest } = item;
      void $schema;
      return rest;
    }),
  };
}

// Registry clients poll these, so let the CDN answer most requests.
export const REGISTRY_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
  "Access-Control-Allow-Origin": "*",
};

/**
 * Resolves one registry request. `base` is the path the request came in on
 * (`/registry` or `/r`), so dependencies point back at the same scheme.
 * `registry` is the index, which `shadcn search` and `shadcn list` ask for.
 */
export function resolveRegistry(slug: string, origin: string, base: string) {
  const name = slug.replace(/\.json$/, "");
  const ext = base === "/r" ? ".json" : "";
  const hostUrl = `${origin}${base}/${HOST_NAME}${ext}`;

  if (name === "registry") return registryIndex(hostUrl);
  if (name === HOST_NAME) return hostItem();
  const cursor = findCursor(name);
  return cursor ? cursorItem(cursor, hostUrl) : null;
}
