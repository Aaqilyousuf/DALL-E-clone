import express from "express";
import * as dotenv from "dotenv";
import openai, { OpenAIApi } from "openai";
import Post from "../mongodb/model/post.js";
const { Configuration } = openai;
dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openaiApi = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello From Dall-e model");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openaiApi.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    if (!image) {
      alert("here is problem!!!");
      res.status(404).json({
        message: "Image is not found someting wrong with generation!!!",
      });
    }

    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error : " + err);
  }
});

export default router;
