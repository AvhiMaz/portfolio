import dbConnect from "@/lib/dbConnet";
import Counter from "@/model/counter";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    // Find and update the counter, incrementing the count by 1
    const counter = await Counter.findOneAndUpdate(
      { page: "profile" },
      { $inc: { count: 1 } },
      { new: true, upsert: true } // `new: true` returns the updated document
    );

    // Respond with the updated counter value
    return NextResponse.json({ count: counter?.count || 0 });
  } catch (error) {
    console.error("Error updating counter:", error);
    return NextResponse.json(
      { error: "Failed to update counter" },
      { status: 500 }
    );
  }
}
