//JWT generation logic for embed Metabase.
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("🚀 ~ POST ~ body:", body)

    return Response.json({
      message: "The metabase is not connected yet - we will do it at the next stage"
    });
  } catch (err) {
    console.log("🚀 ~ POST ~ err:", err)
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }
}