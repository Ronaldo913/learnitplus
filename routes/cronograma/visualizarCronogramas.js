var express = require('express');
var router = express.Router();
const timelinesController = require("../../controllers/timelinesController");

/* GET home page. */
router.get("/", timelinesController.listarTimelines);

module.exports = router;
