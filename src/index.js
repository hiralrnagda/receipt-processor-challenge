const express = require("express");

const receipts = require("./routes/receipt.route");

const PORT = 3000;

const app = express();

/**
 * Middleware to parse incoming JSON requests.
 * @middleware
 */
app.use(express.json());

/**
 * Middleware to use receipt routes.
 * @middleware
 */
app.use("/receipts", receipts);

// Catch-all error handler
app.use((error, request, response) => {
  response.render("error", { error: error });
  response.status(500).end(); // response.status is not a function
});

/**
 * Starts the Express server.
 * @function
 * @param {number} PORT - The port on which the server will listen.
 */
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
