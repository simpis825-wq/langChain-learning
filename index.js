import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from 'dotenv';
dotenv.config();
const chatModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.8-flash",
  apiKey: process.env.gemini_key,
  temperature: 0,
});
// FOR INVOKE MRTHOD 
// async function chat(){
//     const response = await chatModel.invoke("Tell me 5 animals names?");
//     console.log(response.content);
// }

//FOR BATCH METHOD 
// async function chat(){
//     const response = await chatModel.batch(["Tell me 5 animals names?" ,
//         "Tell me 5 fruits names?" ,
//         "Tell me 5 vegetables names?"
        
//     ]);

    //
    // for(let i=0; i<response.length; i++){
    //     console.log(response[i].content);
    // }
    //console.log(response.content);
//}

//FOR STREAM METHOD 
    async function chat(){
    const response = await chatModel.stream("What is AI?");
    for await (const chunk of response) {
        console.log(chunk.content);
    }
}
chat();