const Comments = require("../models/comments");
const Post = require("../models/post");

exports.createComments = async (req, res) => {
  try {
    const { post, body, user } = req.body;
    const comment = await Comments.create({ post, body, user });

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: comment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();
    res.status(200).json({
      successfull: true,
      data: updatedPost,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
