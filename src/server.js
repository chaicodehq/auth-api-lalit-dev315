import "dotenv/config";
import { createApp } from "./app.js";
import { connectDB } from "./db/connect.js";

const { PORT, MONGO_URI } = process.env;

async function start() {
  try {
    // TODO: Read PORT from process.env, default to 3000
    const port = PORT || 3000;

    // TODO: Read MONGO_URI from process.env, default to "mongodb://localhost:27017/auth_api"
    const uri = MONGO_URI;

    await connectDB(uri);
    const app = createApp();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();
