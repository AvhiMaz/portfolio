import dbConnect from "@/lib/dbConnet";
import Counter from "@/model/counter";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const counter = await Counter.findOneAndUpdate(
      { page: "profile" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    console.log("Updated counter:", counter?.count); // Add logging

    return NextResponse.json({ count: counter?.count || 0 });
  } catch (error) {
    console.error("Error updating counter:", error);
    return NextResponse.json(
      { error: "Failed to update counter" },
      { status: 500 }
    );
  }
}
