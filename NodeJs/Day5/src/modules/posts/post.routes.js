import express from "express";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validation.js";
import postShema from "./post.validation.js";
import { addPost , deletePostById, deletePosts, getPosts, updatePost } from "./controller/post.controller.js";
const postRouter = express.Router();

postRouter.get("/posts", getPosts);

postRouter.post("/posts", validate(postShema), auth, addPost);

postRouter.delete("/posts", auth, deletePosts);

postRouter.delete("/posts/:id", auth, deletePostById);

postRouter.put("/posts/:id", auth, updatePost)

export default postRouter;
