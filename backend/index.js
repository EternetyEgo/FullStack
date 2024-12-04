const express = require("express");
const app = express();
const apis = require("./server/apis");

require("./server/db")();
apis(app);

app.get("/", (req, res) => {
  res.send();
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`server running on ${port} port`);
});
