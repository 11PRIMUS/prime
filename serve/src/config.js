import dotenv from "dotenv";
dotenv.config();

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
export const CHAT_ID = process.env.CHAT_ID;
export const PORT = process.env.PORT || 5000;
