import express from "express";
import * as dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

dotenv.config();
const corsOption: CorsOptions = {
  origin: ["http://localhost:5173"],
};
const app = express();
const port = process.env.PORT || 9999;

app.use(cors(corsOption));
app.use(express.json());

app.listen(9999, () => {
  console.log("Server started on port 9999");
});

app.get("/test", (req, res) => {
  console.log("HI");
  res.json("hi me");
});

app.get("/askMe", async (req, res) => {
  const query = decodeURI(req.originalUrl.split("?=")[1]);
  console.log(query);
  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 0,
  });

  const llmRes = await llm.invoke([
    {
      role: "system",
      content:
        "You are an expert in all fields and give short concise answers.",
    },
    { role: "user", content: query },
  ]);

  res.json(llmRes.content);
});
