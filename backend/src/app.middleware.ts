import logger from "@logger";
import bodyParser from "body-parser";
import cors from "cors";
import { Express } from "express";
import pino from "pino-http";

const pinoOptions =
  process.env.NODE_ENV === "test"
    ? {
        serializers: {
          req: () => undefined,
          res: () => undefined,
          err: () => undefined,
        },
      }
    : {};

/**
 * Applies all global middleware to the Express app.
 */
export function applyMiddleware(app: Express) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    pino({
      logger,
      ...pinoOptions,
    }),
  );
}
