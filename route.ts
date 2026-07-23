import { NextResponse } from "next/server";
import { db } from "@/db";
import { experts } from "@/db/schema";
import { ensureDbInitialized, initialExperts } from "@/lib/seed";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    await ensureDbInitialized();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let result;
    if (category && category !== "Hamısı") {
      result = await db.select().from(experts).where(eq(experts.category, category));
    } else {
      result = await db.select().from(experts);
    }

    if (result.length === 0) {
      return NextResponse.json({ success: true, experts: initialExperts });
    }

    return NextResponse.json({ success: true, experts: result });
  } catch (error) {
    console.error("GET experts error:", error);
    return NextResponse.json({ success: true, experts: initialExperts });
  }
}
