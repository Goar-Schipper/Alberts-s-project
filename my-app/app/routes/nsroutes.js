// This is for routing
const express = require("express");
const router = express.Router();
const nsController = require("../controllers/nscontroller");

router.get("/", nsController.getDataForDeparture);

module.exports = router;
