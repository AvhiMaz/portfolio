// src/app.ts
import express from "express";
import cors from "cors";
import counterRoutes from "./routes/counter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", counterRoutes);

export default app;
