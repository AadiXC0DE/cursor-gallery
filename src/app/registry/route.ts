import { NextRequest, NextResponse } from "next/server";
import { REGISTRY_HEADERS, resolveRegistry } from "@/lib/registry";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    resolveRegistry("registry", new URL(request.url).origin, "/registry"),
    { headers: REGISTRY_HEADERS }
  );
}
