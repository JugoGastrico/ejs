var express = require("express");
var router = express.Router();

/* GET programation page. */
router.get("/", function (req, res, next) {
  res.render("formulario");
});
router.post("/", function (req, res) {
  res.render("formulario");
});

module.exports = router;
