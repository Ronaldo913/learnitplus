const express = require("express");
const router = express.Router();
const questionsController = require("../../controllers/questionsController");

router.get("/", questionsController.list);
router.get("/show/:questionId/", questionsController.show);
router.get("/create/", questionsController.create);
router.post("/create/", questionsController.create);
router.post("/:questionId/update", questionsController.update);
router.get("/:questionId/update", questionsController.update);
router.get("/:questionId/delete", questionsController.delete);

module.exports = router;