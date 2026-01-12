import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { CURSORS } from "@/registry/cursors";

export async function GET() {
  const registry = CURSORS.map((cursor) => ({
    name: `cursor-${cursor.id}`,
    type: "registry:ui",
    title: cursor.name,
    description: cursor.description,
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        path: `components/cursor/${cursor.id}.tsx`,
        type: "registry:ui",
        content: getCursorCode(cursor.id),
      },
    ],
    categories: cursor.tags,
  }));

  return NextResponse.json(registry);
}

function getCursorCode(cursorId: string): string {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "registry",
      "cursors",
      `${cursorId}.tsx`
    );
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
    return `// Error: Source for ${cursorId} not found`;
  } catch {
    return `// Error: Failed to read source for ${cursorId}`;
  }
}
