const receiptService = require("../services/receipt.service");

/**
 * Controller to process a receipt.
 * @function processReceipt
 * @param {Object} req - Express request object.
 * @param {Object} req.body - The receipt object to be processed.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const processReceipt = (request, response) => {
  const receipt = request.body;
  const result = receiptService.processReceipt(receipt);
  response.status(200).json(result);
};

/**
 * Controller to get points for a receipt by ID.
 * @function getPoints
 * @param {Object} req - Express request object.
 * @param {Object} req.params - Express request parameters.
 * @param {string} req.params.id - The ID of the receipt.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getPoints = (request, response) => {
  const { id } = request.params;
  const points = receiptService.getPoints(id);
  if (points === null) {
    response.status(404).json({ error: "Receipt not found" });
  } else {
    response.status(200).json({ points });
  }
};

module.exports = {
  processReceipt,
  getPoints,
};
