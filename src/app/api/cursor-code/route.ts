// Serves a cursor's React source, plus its vanilla snippet when one exists.
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { generateVanillaCursor } from "@/lib/generate-vanilla-cursor";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cursorId = searchParams.get("id");

  if (!cursorId || !/^[a-z0-9-]+$/.test(cursorId)) {
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

    const react = fs.readFileSync(filePath, "utf-8");
    // Only the illustrated cursors have a dependency-free version so far.
    const vanilla = generateVanillaCursor(cursorId) ?? null;

    return NextResponse.json({ react, vanilla });
  } catch {
    return NextResponse.json(
      { error: "Failed to read cursor code" },
      { status: 500 }
    );
  }
}
