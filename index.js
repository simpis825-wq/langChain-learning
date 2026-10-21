import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from 'dotenv';
import {ChatPromptTemplate} from '@langchain/core/prompts';
import {StringOutputParser,CommaSeparatedListOutputParser} from '@langchain/core/output_parsers';

dotenv.config();
const chatModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.8-flash",
  apiKey: process.env.gemini_key,
  temperature: 0,
});
const prompt = ChatPromptTemplate.fromTemplate(
  "Write a {words} words paragraph about {topic}"
);

//const chain = prompt.pipe(chatModel).pipe(new StringOutputParser());
const chain = prompt.pipe(chatModel).pipe(new CommaSeparatedListOutputParser())


const response = await chain.invoke ({
  topic:"maths",
  words:40
})
console.log(response);