const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");

router.get("/", usersController.list);
router.get("/show/:userId/", usersController.show);
router.get("/create/", usersController.create);
router.post("/create/", usersController.create);
router.post("/:userId/update", usersController.update);
router.get("/:userId/update", usersController.update);
router.get("/:userId/delete", usersController.delete);

module.exports = router;