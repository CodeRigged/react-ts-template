import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Locales } from "shared/types";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic route
app.get("/", (_req, res) => {
  res.json({ message: "Hello from the Backend!" });
});

// Route to get supported languages
app.get("/languages", (_req, res) => {
  res.json({ languages: Object.values(Locales) });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
