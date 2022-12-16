var express = require('express');
var router = express.Router();
const usersController = require("../../controllers/usersController");

/* GET home page. */
router.get("/", usersController.listarUsers);

module.exports = router;
