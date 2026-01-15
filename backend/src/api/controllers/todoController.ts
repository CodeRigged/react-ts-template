import { Request, Response } from "express";
import * as todoService from "../services/todoService";

export const getTodos = async (_req: Request, res: Response) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json({ todos });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });
    const todo = await todoService.createTodo(text);
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });
    const updatedTodo = await todoService.updateTodo(id, text);
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo updated", todo: updatedTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoService.deleteTodo(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo deleted", todo: deletedTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
