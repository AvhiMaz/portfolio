import mongoose, { Document, Model, Schema } from "mongoose";

interface ICounter extends Document {
  page: string;
  count: number;
}

const counterSchema = new Schema<ICounter>({
  page: { type: String, unique: true },
  count: { type: Number, default: 0 },
});

const Counter: Model<ICounter> =
  mongoose.models.Counter || mongoose.model("Counter", counterSchema);

export default Counter;
