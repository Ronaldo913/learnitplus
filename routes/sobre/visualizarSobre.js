var express = require('express');
var router = express.Router();
const aboutsController = require("../../controllers/aboutsController");

/* GET home page. */
router.get("/", aboutsController.listarAbouts);

module.exports = router;
