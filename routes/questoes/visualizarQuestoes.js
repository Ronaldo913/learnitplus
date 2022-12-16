var express = require('express');
var router = express.Router();
const questionsController = require("../../controllers/questionsController");

/* GET home page. */
router.get("/", questionsController.listarQuestions);

module.exports = router;
