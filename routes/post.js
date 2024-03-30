const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/createPost");
const { retrivePosts } = require("../controllers/getPost");

router.post("/createpost", createPost);
router.get("/retrive", retrivePosts);

module.exports = router;
