import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Locales } from "shared/types";
import { applyMiddleware } from "./api/app.middleware";
import todoRoutes from "./api/routes/todoRoutes";

dotenv.config();

// MongoDB connection
const MONGO_URI = `${process.env.MONGO_URI}`;

const app = express();
const PORT = process.env.PORT || 5000;

applyMiddleware(app);

// Health check endpoint
app.get("/health", async (_req, res) => {
  if (!mongoose.connection.readyState) {
    return res.status(503).json({ status: "db not ready" });
  }
  res.json({ status: "ok" });
});

// Route to get supported languages
app.get("/languages", (_req, res) => {
  res.json({ languages: Object.values(Locales) });
});

// Todos API
app.use("/todos", todoRoutes);

// Connect to DB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

export default app; // Export app for testing
