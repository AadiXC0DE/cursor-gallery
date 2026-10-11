import { NextRequest, NextResponse } from "next/server";
import { REGISTRY_HEADERS, resolveRegistry } from "@/lib/registry";

// The shadcn convention: /r/<name>.json for items and /r/registry.json for
// the index. Namespaced installs (@cursor-gallery/<name>) resolve here.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const item = resolveRegistry(name, new URL(request.url).origin, "/r");

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(item, { headers: REGISTRY_HEADERS });
}
