/**
 * Tests for the calculatePoints function.
 * @module tests/calculatePoints
 */

const { calculatePoints } = require("../services/receipt.service");

describe("calculatePoints", () => {
  /**
   * Test case for calculating points for a simple receipt.
   * @function
   * @name should correctly calculate points for a given receipt
   */
  it("should correctly calculate points for a given receipt", () => {
    const receipt = {
      retailer: "Target",
      purchaseDate: "2022-01-02",
      purchaseTime: "13:13",
      total: "1.25",
      items: [{ shortDescription: "Pepsi - 12-oz", price: "1.25" }],
    };

    const points = calculatePoints(receipt);
    expect(points).toBe(31);
  });

  /**
   * Test case for calculating points for a more complex receipt.
   * @function
   * @name should correctly calculate points for a given receipt
   */
  it("should correctly calculate points for a given receipt", () => {
    const receipt = {
      retailer: "Target",
      purchaseDate: "2022-01-01",
      purchaseTime: "13:01",
      items: [
        {
          shortDescription: "Mountain Dew 12PK",
          price: "6.49",
        },
        {
          shortDescription: "Emils Cheese Pizza",
          price: "12.25",
        },
        {
          shortDescription: "Knorr Creamy Chicken",
          price: "1.26",
        },
        {
          shortDescription: "Doritos Nacho Cheese",
          price: "3.35",
        },
        {
          shortDescription: "   Klarbrunn 12-PK 12 FL OZ  ",
          price: "12.00",
        },
      ],
      total: "35.35",
    };

    const points = calculatePoints(receipt);
    expect(points).toBe(28);
  });

  /**
   * Test case for calculating points for a receipt with multiple identical items.
   * @function
   * @name should correctly calculate points for a given receipt
   */
  it("should correctly calculate points for a given receipt", () => {
    const receipt = {
      retailer: "M&M Corner Market",
      purchaseDate: "2022-03-20",
      purchaseTime: "14:33",
      items: [
        {
          shortDescription: "Gatorade",
          price: "2.25",
        },
        {
          shortDescription: "Gatorade",
          price: "2.25",
        },
        {
          shortDescription: "Gatorade",
          price: "2.25",
        },
        {
          shortDescription: "Gatorade",
          price: "2.25",
        },
      ],
      total: "9.00",
    };

    const points = calculatePoints(receipt);
    expect(points).toBe(109);
  });
});
