import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "yustack-web",
    version: "0.1.0",
    checks: {
      web: true,
      api: true,
    },
  });
}
