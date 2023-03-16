const express = require("express");
const { createMaterial, getMaterial } = require("../controllers/material.controller");


const router = express.Router();

router.post("/create-material", createMaterial);
router.get("/get-material", getMaterial);

module.exports = router;