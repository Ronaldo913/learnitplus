const express = require("express");
const router = express.Router();
const packagesController = require("../../controllers/packagesController");

router.get("/", packagesController.list);
router.get("/show/:packageId/", packagesController.show);
router.get("/create/", packagesController.create);
router.post("/create/", packagesController.create);
router.post("/:packageId/update", packagesController.update);
router.get("/:packageId/update", packagesController.update);
router.get("/:packageId/delete", packagesController.delete);

module.exports = router;