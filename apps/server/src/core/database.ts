import mongoose from "mongoose";
import { config } from "@/core/config";

export async function connectToDatabase() {
  await mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error("Error connecting to MongoDB: " + error.message);
      }
    });
}
