const express = require("express");
const router = express.Router();
const timelinesController = require("../../controllers/timelinesController");

router.get("/", timelinesController.list);
router.get("/show/:timelineId/", timelinesController.show);
router.get("/create/", timelinesController.create);
router.post("/create/", timelinesController.create);
router.post("/:timelineId/update", timelinesController.update);
router.get("/:timelineId/update", timelinesController.update);
router.get("/:timelineId/delete", timelinesController.delete);

module.exports = router;