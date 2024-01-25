import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: "string", minLength: [3, "this is a short post title"] },
    content: { type: "string", minLength: 10 },
    userID: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("Post", postSchema);
export default postModel;
