import dbConnect from "@/lib/dbConnet";
import Counter from "@/model/counter";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    console.log("Request received");
    console.log("Attempting to update counter");

    const counter = await Counter.findOneAndUpdate(
      { page: "profile" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );

    console.log("Counter updated:", counter);

    return NextResponse.json({ count: counter?.count || 0 });
  } catch (error) {
    console.error("Error updating counter:", error);
    return NextResponse.json(
      { error: "Failed to update counter" },
      { status: 500 }
    );
  }
}
