// API route to fetch cursor source code
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cursorId = searchParams.get("id");

  if (!cursorId) {
    return NextResponse.json({ error: "Cursor ID required" }, { status: 400 });
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "registry",
      "cursors",
      `${cursorId}.tsx`
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Cursor file not found" },
        { status: 404 }
      );
    }

    const reactCode = fs.readFileSync(filePath, "utf-8");

    // Generate vanilla JS template based on cursor type
    const vanillaCode = generateVanillaHTML(cursorId);

    return NextResponse.json({ react: reactCode, vanilla: vanillaCode });
  } catch {
    return NextResponse.json(
      { error: "Failed to read cursor code" },
      { status: 500 }
    );
  }
}

function generateVanillaHTML(cursorId: string): string {
  const cursorName = cursorId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return `/*
 * ============================================
 * ${cursorName} Cursor - Vanilla Implementation
 * ============================================
 * 
 * 🚧 COMING SOON!
 * 
 * We're working on creating pixel-perfect vanilla HTML/CSS/JS 
 * implementations for all cursors.
 * 
 * For now, please use the React version above, which works with:
 * - React
 * - Next.js
 * - Vite
 * - Any React-based framework
 * 
 * Required dependencies:
 * - npm install framer-motion
 * - npm install react react-dom
 * 
 * Stay tuned for vanilla implementations!
 */`;
}
