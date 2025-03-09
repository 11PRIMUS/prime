import express from "express";
import cors from "cors";
import { PORT } from "./config.js";  // Add .js extension
import routes from "./routes.js";    // Add .js extension

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
