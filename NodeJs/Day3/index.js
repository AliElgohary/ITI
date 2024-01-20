const express = require("express");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/MyDB');

const app = express();
app.use(express.json());

const UserSchema = mongoose.Schema({
    userName: String,
    age: Number,
    email: String
});

const UserModel = mongoose.model('User', UserSchema);

app.post('/users', async (req, res) => {
    try {
        const { userName, age, email } = req.body;
        const newUser = new UserModel({
            userName,
            age,
            email
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users/:userId', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/users/:userId', async (req, res) => {
    try {
        const { userName, age, email } = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.userId,
            { userName, age, email },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/users/:userId', async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const MessageSchema = mongoose.Schema({
    message: String
});

const MessageModel = mongoose.model('Message', MessageSchema);

app.post('/messages', async (req, res) => {
    try {
        const { message } = req.body;
        const newMessage = new MessageModel({ message });
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/messages', async (req, res) => {
    try {
        const messages = await MessageModel.find();
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/messages/:messageId', async (req, res) => {
    try {
        const message = await MessageModel.findById(req.params.messageId);
        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(message);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/messages/:messageId', async (req, res) => {
    try {
        const { message } = req.body;
        const updatedMessage = await MessageModel.findByIdAndUpdate(
            req.params.messageId,
            { message },
            { new: true }
        );
        if (!updatedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(updatedMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/messages/:messageId', async (req, res) => {
    try {
        const deletedMessage = await MessageModel.findByIdAndRemove(req.params.messageId);
        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.status(200).json(deletedMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
