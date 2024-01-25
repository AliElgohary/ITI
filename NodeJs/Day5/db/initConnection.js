import mongoose from "mongoose";

const initConnection = () => {
  return mongoose
    .connect(process.env.DB)
    .then(() => console.log("mongodb connection established"))
    .catch((err) => console.log("error connecting to MongoDB: " + err));
};

export default initConnection;
