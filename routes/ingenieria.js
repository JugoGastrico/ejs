var express = require("express");
var router = express.Router();

/* GET programation page. */
router.get("/", function (req, res, next) {
  res.render("errorConstr");
});
router.post("/", function (req, res) {
  res.render("errorConstr");
});

module.exports = router;
