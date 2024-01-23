import Joi from "joi";

export const addMessageSchema = Joi.object({
  message: Joi.string().min(3).max(100).required(),
  receivedID: Joi.string().hex().min(24).max(24).required(),
});

export const updatedMessageSchema = Joi.object({
  message: Joi.string().min(3).max(100).required(),
  receivedID: Joi.string().hex().min(24).max(24).required(),
});
