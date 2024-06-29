const express = require("express");
const receiptController = require("../controllers/receipt.controller");

const router = express.Router();

router.post("/process", receiptController.createReceiptRecord);

router.get("/:id/points", receiptController.getReceiptRecord);

module.exports = router;
