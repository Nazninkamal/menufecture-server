const express = require("express");
const { createFeedback, getFeedback } = require("../controllers/feedback.controller");
const verifyToken = require("../Middleware/verifyToken");
const authorization = require("../Middleware/authorization");

const router = express.Router();

router.post("/create-feedback",verifyToken, createFeedback);
router.get("/get-feedback",verifyToken, getFeedback);

module.exports = router;