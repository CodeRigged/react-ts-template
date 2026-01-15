import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose, { Schema, model } from "mongoose";
import { Locales } from "shared/types";

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todos";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Todo model
const todoSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = model("Todo", todoSchema);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to get supported languages
app.get("/languages", (_req, res) => {
  res.json({ languages: Object.values(Locales) });
});

// Get all todos
app.get("/todos", async (_req, res) => {
  try {
    const todos = await Todo.find();
    res.json({ todos });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// Add a new todo
app.post("/todos", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });
    const todo = new Todo({ text });
    await todo.save();
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});

// Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo updated", todo: updatedTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

/**
 * Delete a specific todo by ID
 */
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo deleted", todo: deletedTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
