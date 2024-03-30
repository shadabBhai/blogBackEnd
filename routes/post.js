const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/createPost");

router.post("/createpost", createPost);

module.exports = router;
