const Like = require("../models/likes");

exports.retriveLikes = async (req, res) => {
  try {
    const response = await Like.find({});

    res.status(500).json({
      sucessfull: true,
      data: response,
      message: "retrive likes sucessfully",
    });
  } catch (error) {
    res.status(200).json({
      succeccfull: false,
      data: "internal issue",
      error: error.message,
    });
  }
};
