import express from "express";
import { addUser, deleteUser, getAllUsers, searchByAge, searchByName, signIn, updateUser } from "./controller/user.controller.js";
import { loginSchema, newUserSchema, updateUserSchema } from "./user.validation.js";
import { validate } from "../../middlewares/validation.js";
import { auth } from "../../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/users", auth ,getAllUsers);

userRouter.post("/users", validate(newUserSchema), addUser);

userRouter.post("/users/login", validate(loginSchema), signIn);

userRouter.put('/users',validate(updateUserSchema), auth , updateUser)

userRouter.delete('/users' , auth , deleteUser);

userRouter.post('/users/sname', searchByName);

userRouter.post('/users/sage' , searchByAge);

export default userRouter;
