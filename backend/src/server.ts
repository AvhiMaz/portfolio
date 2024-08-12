import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5513;

app.use(express.json());
app.use(cors());

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

dbConnect();

const CounterSchema = new mongoose.Schema({
  page: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", CounterSchema);

app.get("/api/viewcount", async (req: Request, res: Response) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { page: "profile" },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.json({ count: counter?.count || 0 });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch counter" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
