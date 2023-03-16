const express = require("express");
const { createMaterial, getMaterial,deleteMaterial } = require("../controllers/material.controller");
const verifyToken = require("../Middleware/verifyToken");
const authorization = require("../Middleware/authorization");

const router = express.Router();

router.post("/create-material",verifyToken,authorization("supplier"), createMaterial);
router.get("/get-material",verifyToken,authorization("supplier"), getMaterial);
router.delete("/delete-material/:id",verifyToken,authorization("supplier"), deleteMaterial);

module.exports = router;