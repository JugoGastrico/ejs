/* Routes are connected to Controllers folder */

var express = require("express");
var router = express.Router();
const prograController = require("../controllers/programacion");
const homeController = require("../controllers/home");
const ingenieriaController = require("../controllers/ingenieria");
const formularioController = require("../controllers/formulario");

router.get("/programacion", prograController.progra);
router.post("/programacion", prograController.progra);
router.get("/", homeController.home);
router.post("/", homeController.home);
router.get("/ingenieria", ingenieriaController.ing);
router.post("/ingenieria", ingenieriaController.ing);
router.get("/contactanos", formularioController.form);
router.post("/contactanos", formularioController.form);

module.exports = router;