const express = require("express");
const router = express.Router();

//@route -GET api/posts
//@desc =testing API
//@access-public
router.get("/", (req, res) => res.send("this is the posts route"));

module.exports = router;
