var express = require('express');
var router = express.Router();
const packagesController = require("../../controllers/packagesController");

/* GET home page. */
router.get("/", packagesController.listarPackages);

module.exports = router;
