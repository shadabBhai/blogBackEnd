const Post = require("../models/post");

exports.createPost = async (req, res) => {
  try {
    const { title, description, like, comments } = req.body;
    const response = await Post.create({ title, description, like, comments });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal server issue",
      error: err.message,
    });
  }
};
