const express = require("express");
const { addQuote, uploadTheeDFile, getMyQuotes, getMySingleQuotes, updateMySingleQuotes, deleteMySingleQuotes, downLoadDocument, getMyAllQuotes, getMyAllOrderQuotes, fileUploader } = require("../controllers/quote.controller");
const threeDFileUploader = require("../Middleware/threeDFileUploader");

const verifyToken = require("../Middleware/verifyToken");
const uploader = require("../Middleware/uploader");



const router = express.Router();

router.post("/create-a-quote/:id",
    verifyToken,
    threeDFileUploader
        .single("threeDFile"),
    addQuote);

router.patch("/update-ThreeD-File/:id",
    verifyToken,
    threeDFileUploader
        .single("threeDFile"),
    uploadTheeDFile);

router.patch("/update-my-quote/:id", verifyToken, updateMySingleQuotes);
router.delete("/delete-my-quote/:id", verifyToken, deleteMySingleQuotes);
router.get('/downLoad/document/:id', verifyToken, downLoadDocument);

router.get("/get-my-quotes/:id",
    verifyToken,
    getMyQuotes);

router.get("/get-my-all-quotes",
    verifyToken,
    getMyAllQuotes);
router.get("/get-all-order-quotes",
    verifyToken,
    getMyAllOrderQuotes);


router.get("/get-my-single-quote/:id",
    verifyToken,
    getMySingleQuotes);

router.post("/fileUploader",
    uploader.single('file'),
    fileUploader);

module.exports = router;