import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "Planndo",
    version: "1.0.0",
    cloud: "Supabase Connected",
    timestamp: new Date().toISOString(),
  });
}
