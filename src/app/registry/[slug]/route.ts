import { NextRequest, NextResponse } from "next/server";
import { cursorItem, findCursor, hostItem, HOST_NAME } from "../items";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (slug.replace(/\.json$/, "") === HOST_NAME) {
    return NextResponse.json(hostItem());
  }

  const cursor = findCursor(slug);
  if (!cursor) {
    return NextResponse.json({ error: "Cursor not found" }, { status: 404 });
  }

  return NextResponse.json(cursorItem(cursor, new URL(request.url).origin));
}
