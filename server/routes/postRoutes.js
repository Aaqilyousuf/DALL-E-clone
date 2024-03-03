import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/model/post.js";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const router = express.Router();
router.use(express.json());
//GET POST
router.route("/").get(async (req, res) => {
  try {
    // res.send("hello from post route");
    const posts = await Post.find();
    res.status(200).json({ success: true, data: posts });
  } catch (err) {}
});

//SEND POST
router.route("/").post(async (req, res) => {
  try {
    // console.log(req.body);
    // if (req.data && req.data.name && req.data.prompt && req.data.photo) {
    //   var { name, prompt, photo } = req.body;
    // } else {
    //   console.log("name is not defined");
    // }
    const { name, prompt, photo } = req.body;
    const PhotoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: PhotoUrl.url,
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
});

export default router;
