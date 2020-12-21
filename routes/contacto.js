var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Form Completado.");
});
router.post("/", function (req, res, next) {
  res.send("Form Completado");
});

module.exports = router;
