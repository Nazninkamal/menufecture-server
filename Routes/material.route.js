const express = require("express");
const { createMaterial, getMaterial,deleteMaterial } = require("../controllers/material.controller");
const verifyToken = require("../Middleware/verifyToken");
const authorization = require("../Middleware/authorization");

const router = express.Router();

router.get("/get-material",verifyToken, getMaterial);
router.post("/create-material",verifyToken, createMaterial);
router.delete("/delete-material/:id",verifyToken, deleteMaterial);

module.exports = router;