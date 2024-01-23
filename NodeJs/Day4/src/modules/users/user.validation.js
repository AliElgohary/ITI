import Joi from "joi";


export const addUserSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(20).required(),
  age: Joi.number().min(15).max(50).required(),
  email: Joi.string().email(),
  password: String,
});

export const updatedUserSSchema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(20).required(),
    age: Joi.number().min(15).max(50).required(),
    email: Joi.string().email(),
});