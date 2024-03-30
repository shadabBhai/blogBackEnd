const POST = require("../models/post");

exports.retrivePosts = async (req, res) => {
  try {
    const response = await POST.find({});
    res.status(500).json({
      success: true,
      data: response,
      message: "Successfully retrive",
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      data: "Internal servr issue",
      message: err.message,
    });
  }
};
