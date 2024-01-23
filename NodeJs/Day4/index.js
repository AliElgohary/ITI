import express from "express";
import mongoose from "mongoose";
import userRouter from "./src/modules/users/user.routes.js";
import messageRouter from "./src/modules/messages/messsage.routes.js";

mongoose.connect("mongodb://localhost:27017/MyDB");

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(messageRouter);

let isLoggedIn = true;

const auth = (req , res , next) => { 
  if (isLoggedIn){
    next();
  } else {
    res.json({ message : 'you need to login first' });
  }
};

app.get('/', auth ,(req, res) => {
  res.json({ message : ' authed' });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
