import express from "express";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validation.js";
import postShema from "./post.validation.js";
import { addPost, getPosts } from "./controller/post.controller.js";
const postRouter = express.Router();

postRouter.get("/posts", getPosts);

postRouter.post("/posts", validate(postShema), auth, addPost);

export default postRouter;
