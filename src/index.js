const express = require("express");

const receipts = require("./routes/receipt.route");

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/receipts", receipts);

// Catch-all error handler
app.use((error, request, response) => {
  response.render("error", { error: error });
  response.status(500).end(); // response.status is not a function
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
