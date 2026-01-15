import { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  text: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Todo = model<ITodo>("Todo", todoSchema);
