const Like = require("../models/likes");
const Post = require("../models/post");
exports.createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const response = await Like.create({ post, user });
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { like: response._id } },
      { new: true }
    ).populate("like");
    res.status(200).json({
      successfull: true,
      post: updatePost,
      message: "like ",
    });
  } catch (err) {
    res.status(500).json({
      successfull: false,
      data: "Internal Issue",
      error: err.message,
    });
  }
};

exports.unLike = async (req, res) => {
  try {
    const { post, like } = req.body;

    const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { like: deleteLike._id } },
      { new: true }
    );

    res.json({
      data: updatedPost,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
