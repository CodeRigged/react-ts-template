import cors from "cors";
import bodyParser from "body-parser";
import { Express } from "express";

/**
 * Applies all global middleware to the Express app.
 */
export function applyMiddleware(app: Express) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}
