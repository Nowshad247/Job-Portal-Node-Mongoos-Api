const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    work: "Hello",
  });
});
module.exports = router;
