const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/createPost");
const { retrivePosts } = require("../controllers/getPost");
const { createLike, unLike } = require("../controllers/createLike");
const { createComments } = require("../controllers/createComments");
const { retriveLikes } = require("../controllers/getLike");

router.post("/createpost", createPost);
router.get("/retriveposts", retrivePosts);
router.post("/likepost", createLike);
router.get("/retrivelikes", retriveLikes);
router.post("/unlikepost", unLike);
router.post("/commentpost", createComments);

module.exports = router;
