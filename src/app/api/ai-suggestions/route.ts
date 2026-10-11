import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tasks } = body;

    const count = Array.isArray(tasks) ? tasks.length : 0;

    return NextResponse.json({
      success: true,
      analysis: {
        score: 92,
        recommendedFocusSlots: ["09:00 - 10:30", "14:00 - 15:30"],
        priorityTasksCount: count,
        recommendation: "Batch low-priority correspondence and tackle strategic milestones in early morning deep-work blocks.",
      },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Bad request" }, { status: 400 });
  }
}
