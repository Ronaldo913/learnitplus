const express = require("express");
const router = express.Router();
const aboutsController = require("../../controllers/aboutsController");

router.get("/", aboutsController.list);
router.get("/show/:aboutId/", aboutsController.show);
router.get("/create/", aboutsController.create);
router.post("/create/", aboutsController.create);
router.post("/:aboutId/update", aboutsController.update);
router.get("/:aboutId/update", aboutsController.update);
router.get("/:aboutId/delete", aboutsController.delete);

module.exports = router;