const calculatePoints = (receipt) => {
  let points = 0;

  // 1. One point for every alphanumeric character in the retailer name
  points += receipt.retailer.replace(/[^a-z0-9]/gi, "").length;

  // 2. 50 points if the total is a round dollar amount with no cents
  if (Number(receipt.total) % 1 === 0) {
    points += 50;
  }

  // 3. 25 points if the total is a multiple of 0.25
  if (Number(receipt.total) % 0.25 === 0) {
    points += 25;
  }

  // 4. 5 points for every item on the receipt
  points += receipt.items.length * 5;

  // 5. Trimmed length of item description is a multiple of 3
  receipt.items.forEach((item) => {
    if (item.shortDescription.trim().length % 3 === 0) {
      points += Math.ceil(Number(item.price) * 0.2);
    }
  });

  // 6. 6 points if the day in the purchase date is odd
  const purchaseDate = new Date(receipt.purchaseDate);
  if (purchaseDate.getDate() % 2 !== 0) {
    points += 6;
  }

  // 7. 10 points if the time of purchase is between 2:00 PM and 4:00 PM
  const purchaseTime = receipt.purchaseTime.split(":");
  const hours = parseInt(purchaseTime[0]);
  if (hours >= 14 && hours < 16) {
    points += 10;
  }

  return points;
};

module.exports = calculatePoints;
