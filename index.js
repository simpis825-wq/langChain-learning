import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from 'dotenv';
import {ChatPromptTemplate} from '@langchain/core/prompts';
dotenv.config();
const chatModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.8-flash",
  apiKey: process.env.gemini_key,
  temperature: 0,
});
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Explain topic within 20 words."],
  ["human", "Tell me about {topic} with example."]
]);
const message = await prompt.formatMessages({ topic: "Nest.js" });

async function chat (){
const response = await chatModel.invoke(message);
console.log(response.content);
 }
 chat();