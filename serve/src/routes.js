import express from "express";
import { sendMessageToTelegram } from "./tele.js";

const router = express.Router();

router.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await sendMessageToTelegram(name, email, message);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;
