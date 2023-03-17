const express = require("express");
const { createMaterial, getMaterial,deleteMaterial } = require("../controllers/material.controller");
const verifyToken = require("../Middleware/verifyToken");
const authorization = require("../Middleware/authorization");

const router = express.Router();

router.get("/get-material",verifyToken, getMaterial);
router.post("/create-material",verifyToken,authorization("supplier"), createMaterial);
router.delete("/delete-material/:id",verifyToken,authorization("supplier"), deleteMaterial);

module.exports = router;