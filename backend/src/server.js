import express from "express";
import { ENV } from "./env.js";

const app = express();
const PORT = ENV.PORT || 8001;

app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is healthy" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
