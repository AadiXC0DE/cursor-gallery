import fs from "fs";
import path from "path";
import {
  CURSORS,
  FEATURED_IDS,
  type CursorDefinition,
} from "@/registry/cursors";
import { CURSOR_ARTWORK } from "@/lib/cursor-artwork";

// Plain-text guides for language models and agents, following llms.txt
// (https://llmstxt.org). Everything here is generated from the registry, so
// it never drifts from what the site and the CLI actually serve.

export const SITE = "https://cursor-gallery.vercel.app";
const REPO = "https://github.com/AadiXC0DE/cursor-gallery";

const source = (id: string) => {
  const file = path.join(
    process.cwd(),
    "src",
    "registry",
    "cursors",
    `${id}.tsx`
  );
  return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
};

/** The component name an install gives you, read from the file itself. */
export const componentName = (cursor: CursorDefinition) =>
  source(cursor.id).match(/export default function (\w+)/)?.[1] ??
  `${cursor.id.replace(/(^|-)(\w)/g, (_, __, c: string) => c.toUpperCase())}Cursor`;

const hasVanilla = (cursor: CursorDefinition) => cursor.id in CURSOR_ARTWORK;

const intro = () => `# Cursor Gallery

> ${CURSORS.length} animated cursor components for React and Next.js, built with Motion (framer-motion) and published as a shadcn registry. One CLI command installs a cursor plus a small CustomCursor host; mounting the host once in the root layout replaces the system cursor. Free, MIT licensed.

How to use it:

- Install one cursor: \`npx shadcn@latest add ${SITE}/registry/<id>\`
- Or add the namespace to components.json, then use \`npx shadcn@latest add @cursor-gallery/<id>\`:
  \`"registries": { "@cursor-gallery": "${SITE}/r/{name}.json" }\`
  With that in place, \`npx shadcn@latest search @cursor-gallery -q <query>\`, \`shadcn list\`, \`shadcn view\` and the shadcn MCP server can browse the whole catalog.
- Mount it once inside \`<body>\` of the root layout:

\`\`\`tsx
import { CustomCursor } from "@/components/cursor/custom-cursor";
import PenguinCursor from "@/components/cursor/penguin";

<CustomCursor cursor={PenguinCursor} />
\`\`\`

- The host follows the pointer, tells the cursor when it is over a link or button (\`isHovering\`), hides the system cursor while mounted, and renders nothing on touch screens.
- Requirements: React 18+, framer-motion (installed by the CLI), Tailwind (any shadcn project has it).
- Machine-readable index: ${SITE}/r/registry.json (shadcn registry.json format). Each item, with full source, is at ${SITE}/r/<id>.json.
`;

const line = (cursor: CursorDefinition) =>
  `- [${cursor.name}](${SITE}/cursors/${cursor.id}): ${cursor.description}. id \`${cursor.id}\`, tags ${cursor.tags.join(", ")}`;

export function llmsTxt() {
  const featured = FEATURED_IDS.map((id) => CURSORS.find((c) => c.id === id)!);
  const rest = CURSORS.filter((c) => !FEATURED_IDS.includes(c.id));
  return `${intro()}
## Docs

- [README](${REPO}#readme): install, setup, and how to contribute a cursor
- [Full catalog](${SITE}/llms-full.txt): every cursor with its install command, import and props, plus the host source
- [Registry index](${SITE}/r/registry.json): the same catalog as shadcn registry JSON

## Featured cursors

${featured.map(line).join("\n")}

## All other cursors

${rest.map(line).join("\n")}

## Optional

- [Sponsor](${SITE}/sponsor): ways to support the project
- [Source on GitHub](${REPO}): MIT licensed
`;
}

export function llmsFullTxt() {
  const host = fs.readFileSync(
    path.join(process.cwd(), "src", "registry", "custom-cursor.tsx"),
    "utf-8"
  );
  const entry = (cursor: CursorDefinition) => {
    const name = componentName(cursor);
    return `### ${cursor.name}

${cursor.description}.

- id: \`${cursor.id}\`
- page: ${SITE}/cursors/${cursor.id}
- tags: ${cursor.tags.join(", ")}
- install: \`npx shadcn@latest add ${SITE}/registry/${cursor.id}\` (or \`@cursor-gallery/${cursor.id}\`)
- import: \`import ${name} from "@/components/cursor/${cursor.id}";\`
- use: \`<CustomCursor cursor={${name}} />\`
- registry item with source: ${SITE}/r/${cursor.id}.json
- vanilla HTML snippet: ${hasVanilla(cursor) ? "yes, dependency free, copy it from the cursor page" : "no, React only"}
`;
  };
  return `${intro()}
## Cursor props

Every cursor is a default-exported React component with this signature. The host passes the first three; \`isStatic\` freezes it on a still frame for previews.

\`\`\`ts
{ x: number; y: number; isHovering?: boolean; isStatic?: boolean }
\`\`\`

The illustrated cursors (the ones with a vanilla snippet) also hold still when the user has reduced motion turned on. To switch cursors, install another one and change the import.

## The host component (components/cursor/custom-cursor.tsx)

\`\`\`tsx
${host.trim()}
\`\`\`

## Every cursor

${CURSORS.map(entry).join("\n")}`;
}
