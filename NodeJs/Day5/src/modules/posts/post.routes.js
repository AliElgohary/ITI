import express from "express";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validation.js";
import { postShema, postUpdateSchema } from "./post.validation.js";
import {
  addPost,
  deletePostById,
  deletePosts,
  getPosts,
  getUserPosts,
  sortedPosts,
  updatePost,
} from "./controller/post.controller.js";
const postRouter = express.Router();

postRouter.get("/posts", getPosts);

postRouter.post("/posts", validate(postShema), auth, addPost);

postRouter.delete("/posts", auth, deletePosts);

postRouter.delete("/posts/:id", auth, deletePostById);

postRouter.put("/posts/:id", validate(postUpdateSchema), auth, updatePost);

postRouter.get("/populated", getUserPosts);

postRouter.get("/sort", sortedPosts);

export default postRouter;
