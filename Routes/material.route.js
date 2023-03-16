const express = require("express");
const { createMaterial, getMaterial } = require("../controllers/material.controller");
const verifyToken = require("../Middleware/verifyToken");
const authorization = require("../Middleware/authorization");

const router = express.Router();

router.post("/create-material",verifyToken,authorization("supplier"), createMaterial);
router.get("/get-material",verifyToken,authorization("supplier"), getMaterial);

module.exports = router;