import MessageModel from "../../../../db/models/message.model.js";
import UserModel from "../../../../db/models/user.model.js";

export const addMessage = async (req, res) => {
  try {
    let foundedUser = await UserModel.findById(req.body.receivedID);
    if (!foundedUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    const message = req.body;
    const newMessage = new MessageModel(message);
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessageByUserId = async (req, res) => {
  try {
    const message = await MessageModel.find({
      receivedID: req.params.messageId,
    }).populate("receivedID");
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json({ statusbar: "success", messages: message });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const updatedMessage = await MessageModel.findByIdAndUpdate(
      req.params.messageId,
      { message },
      { new: true }
    );
    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(updatedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const deletedMessage = await MessageModel.findByIdAndRemove(
      req.params.messageId
    );
    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(deletedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
