import "dotenv/config";
import express from "express";
import initConnection from "./db/initConnection.js";
import userRouter from "./src/modules/users/user.routes.js";
import postRouter from "./src/modules/posts/post.routes.js";

initConnection();

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("working");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
