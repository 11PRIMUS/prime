import axios from "axios";
import { TELEGRAM_BOT_TOKEN, CHAT_ID } from "./config.js";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export const sendMessageToTelegram = async (name, email, message) => {
  try {
    const text = `📩 New Contact Form Submission\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`;

    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "Markdown",
    });

    return response.data;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    throw new Error("Failed to send message to Telegram.");
  }
};
