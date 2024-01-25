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
    res.send({ message: "post not added", error: error.message });
  }
};

export const getPosts = async (req, res) => {
  const posts = await postModel.find();
  if (posts.length > 0) {
    res.send({ posts: posts });
  } else {
    res.send({ posts: [] });
  }
};

export const deletePosts = async (req, res) => {
  const post = await postModel.deleteMany({ userID: req.userId });
  if (post) {
    res.send({ status: "deleted" });
  } else {
    res.send({ message: "nothing to delete" });
  }
};

export const deletePostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postModel.findById(postId);
    if (!post) return res.send({ message: " post not found" });
    if (post.userID == req.userId) {
      await postModel.findByIdAndDelete(postId);
      return res.send({ message: " post deleted successfully " });
    } else {
      return res.send({ message: " not authorized " });
    }
  } catch (error) {
    res.send({ error: "can't delete ", err: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const post = await postModel.findById(postId);

    if (!post) {
      return res.send({ message: "Post not found" });
    }
    if (post.userID == req.userId) {
      await postModel.findByIdAndUpdate(postId, {
        title,
        content,
      });
      const newPost = await postModel.findById(postId);
      res.send({ newPost: newPost });
    } else {
      res.send({ message: "Not authorized to update this post" });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const allPosts = await postModel.find().populate("userID");
    res.json({ message: "All posts populated", allPosts });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const sortedPosts = async (req, res) => {
  try {
    const allPosts = await postModel.find().sort({ createdAt: -1 });
    res.json({ allPostsSorted: allPosts });
  } catch (error) {
    res.json({ error: error.message });
  }
};
