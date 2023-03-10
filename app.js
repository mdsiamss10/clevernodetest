const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.json({ success: true });
});
app.listen(5050, () => {
  console.log("Server is running.");
});
