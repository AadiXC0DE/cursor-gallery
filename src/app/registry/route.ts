import { NextRequest, NextResponse } from "next/server";
import { CURSORS } from "@/registry/cursors";
import { cursorItem, hostItem } from "./items";

// Registry index in the shadcn registry.json shape. File contents are served
// per item at /registry/<name>, so they are left out here to keep this small.
export async function GET(request: NextRequest) {
  const origin = new URL(request.url).origin;
  return NextResponse.json({
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "cursor-gallery",
    homepage: "https://cursor-gallery.vercel.app",
    items: [
      hostItem(false),
      ...CURSORS.map((cursor) => cursorItem(cursor, origin, false)),
    ].map((item) => {
      const { $schema, ...rest } = item;
      void $schema;
      return rest;
    }),
  });
}
