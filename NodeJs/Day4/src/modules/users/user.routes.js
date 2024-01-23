import express from "express";
import {
  addUser,
  deleteUser,
  getUserByID,
  getUsers,
  updateUser,
} from "./controller/user.controller.js";
import validate from "../../middlewares/validations.js";
import { addUserSchema, updatedUserSSchema } from "./user.validation.js";
const userRouter = express.Router();

userRouter.post("/users", validate(addUserSchema), addUser);

userRouter.get("/users", getUsers);

userRouter.get("/users/:userId", getUserByID);

userRouter.put("/users/:userId", validate(updatedUserSSchema), updateUser);

userRouter.delete("/users/:userId", deleteUser);

export default userRouter;
