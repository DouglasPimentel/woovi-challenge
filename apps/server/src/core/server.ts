import { createServer } from "node:http";
import { app } from "@/core/app";
import { config } from "@/core/config";
import { connectToDatabase } from "@/core/database";

const HOSTNAME = config.HOSTNAME;
const PORT = config.PORT;

export async function setupServer() {
  await connectToDatabase();

  const server = createServer(app.callback());

  server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
  });
}
