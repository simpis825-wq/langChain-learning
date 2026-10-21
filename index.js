import {DallEAPIWrapper} from "@langchain/openai";
import dotenv from 'dotenv';
// Dall E is open ai model so I have to use only Open AI API key but I dont have credits ,
//  so this code is not working because I am using gemini key 
 
dotenv.config();
const chatModel = new DallEAPIWrapper({
  model: "dall-e-3",
  apiKey: process.env.gemini_key,
  n: 1,
});

const imageURL = await chatModel.invoke("cat jumping on bed");
console.log(imageURL);

