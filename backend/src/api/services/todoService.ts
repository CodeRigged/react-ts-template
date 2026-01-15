import { Todo, ITodo } from "../models/Todo";

export const getAllTodos = async (): Promise<ITodo[]> => {
  return Todo.find();
};

export const createTodo = async (text: string): Promise<ITodo> => {
  const todo = new Todo({ text });
  return todo.save();
};

export const updateTodo = async (id: string, text: string): Promise<ITodo | null> => {
  return Todo.findByIdAndUpdate(id, { text }, { new: true });
};

export const deleteTodo = async (id: string): Promise<ITodo | null> => {
  return Todo.findByIdAndDelete(id);
};
