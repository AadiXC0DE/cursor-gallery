import { NextRequest, NextResponse } from "next/server";
import { REGISTRY_HEADERS, resolveRegistry } from "@/lib/registry";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = resolveRegistry(slug, new URL(request.url).origin, "/registry");

  if (!item) {
    return NextResponse.json({ error: "Cursor not found" }, { status: 404 });
  }
  return NextResponse.json(item, { headers: REGISTRY_HEADERS });
}
