// src/routes/counter.ts
import express, { Request, Response } from "express";
import Counter from "../models/Counter";

const router = express.Router();

router.get("/viewcount", async (req: Request, res: Response) => {
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

export default router;
