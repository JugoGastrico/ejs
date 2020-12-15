var express = require("express");
var router = express.Router();

/* GET programation page. */
router.get("/", function (req, res, next) {
  res.render("progra");
});
router.post("/", function (req, res) {
  res.render("progra");
});

module.exports = router;
