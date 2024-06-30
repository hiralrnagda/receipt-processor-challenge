const express = require("express");
const router = express.Router();
const receiptController = require("../controllers/receipt.controller");

/**
 * Route to process a receipt.
 * @route POST /api/receipts/process
 * @group Receipts - Operations related to receipts
 * @param {Object} req.body - The receipt object to be processed.
 * @returns {Object} 200 - An object containing the unique ID for the processed receipt.
 */
router.post("/process", receiptController.processReceipt);

/**
 * Route to get points for a receipt by ID.
 * @route GET /api/receipts/{id}/points
 * @group Receipts - Operations related to receipts
 * @param {string} id.path - The ID of the receipt.
 * @returns {Object} 200 - An object containing the points for the receipt.
 * @returns {Error} 404 - Receipt not found.
 */
router.get("/:id/points", receiptController.getPoints);

module.exports = router;
