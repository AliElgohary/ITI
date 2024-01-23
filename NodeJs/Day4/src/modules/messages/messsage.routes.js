import express from 'express';
import { addMessage, deleteMessage, getMessageByUserId, getMessages, updateMessage } from './controller/message.controller.js';
import validate from '../../middlewares/validations.js';
import { addMessageSchema, updatedMessageSchema } from './message.validation.js';
const messageRouter = express.Router();


messageRouter.post("/messages",validate(addMessageSchema), addMessage );
  
  messageRouter.get("/messages", getMessages);
  
  messageRouter.get("/messages/:messageId", getMessageByUserId  );
  
  messageRouter.put("/messages/:messageId", validate(updatedMessageSchema),updateMessage);
  
  messageRouter.delete("/messages/:messageId", deleteMessage);

  export default messageRouter
  