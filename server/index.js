const express = require("express");
const app = express();
const port = 4000;

const restaurants = require("./src/restaurant");

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/restaurants", (_, res) => {
  return res.send(restaurants);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
