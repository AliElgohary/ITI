import mongoose from "mongoose";

const userScema = mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
    age: Number,
    gender: String,
    isVerify: Boolean,
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userScema);
export default userModel;
