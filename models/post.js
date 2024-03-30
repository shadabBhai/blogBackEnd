const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 70,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  like: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
    maxlength: 29,
  },
});

module.exports = mongoose.model("posts", postSchema);
