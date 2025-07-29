import path from "node:path";
import dotenv from "dotenv";

const cwd = process.cwd;

const root = path.join.bind(cwd);

dotenv.config({ path: root(".env") });

export const config = {
  HOSTNAME: process.env.HOSTNAME || "localhost",
  PORT: Number(process.env.PORT) || 8080,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
  JWT_SECRET: process.env.JWT_SECRET || "shhhh",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
};
