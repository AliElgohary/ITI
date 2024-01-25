import userModel from "../../../../db/models/userModel/user.model.js";
import bcrybt from "bcrypt";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
  try {
    const { userName, email, password, Cpassword, age, gender } = req.body;
    if (password !== Cpassword)
      return res.json({ message: "password and Cpassword must match" });
    const isVerify = false;
    let foundedUser = await userModel.findOne({ email: req.body.email });
    if (foundedUser) return res.json({ message: "user already exists" });
    let hashedPassword = bcrybt.hashSync(password, 10);
    const savedUser = await userModel.insertMany({
      userName,
      email,
      password: hashedPassword,
      age,
      gender,
      isVerify,
    });
    res.status(200).json({ userCreated: savedUser });
  } catch (error) {
    console.error(error);
    res.json({ error: error.message });
  }
};

export const signIn = async (req, res, next) => {
  let { email, password } = req.body;
  let foundedUser = await userModel.findOne({ email });
  if (!foundedUser)
    return res.send({ message: "Not a registered user, you need to register" });
  let matchedPassword = bcrybt.compareSync(password, foundedUser.password);
  if (matchedPassword) {
    let token = jwt.sign({ id: foundedUser._id }, "secret");
    res.send({ message: "Login successful", token: token });
  } else {
    res.send({ message: "wrong credentials " });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ users: users });
  } catch (error) {
    console.error(error);
    res.json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userName, email, password, age } = req.body;
    const hashedPassword = bcrybt.hashSync(password, 10);
    await userModel.findByIdAndUpdate(req.userId, {
      userName,
      email,
      password: hashedPassword,
      age,
    });
    const user = await userModel.findById(req.userId);
    res.send({ message: "user updated succesfully", updatedUser: user });
  } catch (error) {
    res.send({ error: "error updating user" + error });
  }
};

export const deleteUser = async (req, res) => {
  const user = await userModel.findByIdAndDelete(req.userId);
  if (!user) {
    res.send({ message: "user not found" });
  } else {
    res.send({ message: "user deleted" });
  }
};

export const searchByName = async (req, res) => {
  const { letter, maxAge } = req.body;
  const nameRegex = new RegExp(`^${letter}`, "i");
  const users = await userModel.find({
    userName: nameRegex,
    age: { $lt: maxAge },
  });
  if (users.length > 0) {
    res.send({ users: users });
  } else {
    res.send({ messages: "No available users" });
  }
};

export const searchByAge = async (req, res) => {
  const { minAge, maxAge } = req.body;
  const users = await userModel.find({
    age: { $gte: minAge, $lte: maxAge },
  });
  if (users.length > 0) {
    res.send({ users: users });
  } else {
    res.send({ messages: "No available users" });
  }
};


