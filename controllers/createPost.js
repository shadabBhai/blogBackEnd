const Post = require("../models/post");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const response = await Post.create({ title, body });
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
