import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema(
    {
      message: String,
      receivedID : {
        type : mongoose.Types.ObjectId,
        ref: "User"
      },
    },
    {
      timestamps: true,
    }
  );

  const MessageModel = mongoose.model("Message", MessageSchema);
  export default MessageModel