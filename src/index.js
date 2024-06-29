const express = require("express");

const receipts = require("./routes/receipts.router");

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/receipts", receipts);

// Catch-all error handler
const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.render("error", { error: err });
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
