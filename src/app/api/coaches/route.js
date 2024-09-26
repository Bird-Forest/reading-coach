import { getCoachById } from "@/services/coaches";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const coach = await getCoachById(id);
    return NextResponse.json(coach, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Відбулася помилка" }, { status: 500 });
  }
}
