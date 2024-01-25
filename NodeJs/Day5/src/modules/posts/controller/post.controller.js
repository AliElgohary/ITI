import postModel from "../../../../db/models/postModel/post.model.js";

export const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const savedPost = await postModel.insertMany({
          title,
          content,
          userID: req.userId,
        });
        res.send({ message: savedPost });
    } catch (error) {
        res.send({ message: 'post not added' , error: error.message });
    }
};

export const getPosts = async (req, res) => {
    const posts = await postModel.find();
    if (posts.length > 0) {
        res.send({ posts: posts });
    } else {
        res.send({ posts: [] });
    }
  }
