const express = require("express");
const router = express.Router();

//@route -GET api/auth
//@desc =testing API
//@access-public
router.get("/", (req, res) => res.send("this is the auth route"));

module.exports = router;
