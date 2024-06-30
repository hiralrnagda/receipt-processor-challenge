const { v4: uuidv4 } = require("uuid");

const receipts = new Map();

const processReceipt = (receipt) => {
  const id = uuidv4();
  receipts.set(id, receipt);
  return { id };
};

const calculatePoints = (receipt) => {
  let points = 0;
  const isAlphanumeric = (char) => /^[a-zA-Z0-9]+$/i.test(char);

  // One point for every alphanumeric character in the retailer name
  points += [...receipt.retailer].filter(isAlphanumeric).length;

  // 50 points if the total is a round dollar amount with no cents
  if (Number(receipt.total) % 1 === 0) {
    points += 50;
  }

  // 25 points if the total is a multiple of 0.25
  if (Number(receipt.total) % 0.25 === 0) {
    points += 25;
  }

  // 5 points for every two items on the receipt
  points += Math.floor(receipt.items.length / 2) * 5;

  // If the trimmed length of the item description is a multiple of 3,
  // multiply the price by 0.2 and round up to the nearest integer
  receipt.items.forEach((item) => {
    if (item.shortDescription.trim().length % 3 === 0) {
      points += Math.ceil(Number(item.price) * 0.2);
    }
  });

  // 6 points if the day in the purchase date is odd
  const day = new Date(receipt.purchaseDate).getUTCDate();
  if (day % 2 !== 0) {
    points += 6;
  }

  // 10 points if the time of purchase is after 2:00 PM and before 4:00 PM
  const [hours, minutes] = receipt.purchaseTime.split(":").map(Number);
  if ((hours > 14 || (hours === 14 && minutes >= 0)) && hours < 16) {
    points += 10;
  }

  return points;
};

const getPoints = (receiptId) => {
  const receipt = receipts.get(receiptId);
  if (!receipt) {
    return null;
  }
  return calculatePoints(receipt);
};

module.exports = {
  processReceipt,
  getPoints,
  calculatePoints,
};
