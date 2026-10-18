import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from 'dotenv';
dotenv.config();
const chatModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.8-flash",
  apiKey: process.env.gemini_key,
  temperature: 0,
});

async function chat(){
    const response = await chatModel.invoke("Tell me 5 animals names?");
    console.log(response.content);
}
chat();