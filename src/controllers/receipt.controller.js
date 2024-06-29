const receiptService = require("../services/receipt.service");

const processReceipt = (request, response) => {
  const receipt = request.body;
  const result = receiptService.processReceipt(receipt);
  response.status(200).json(result);
};

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
