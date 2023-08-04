const express = require("express");
const app = express();
require("dotenv").config();
const todoroutes = require("./routes/todo");
const dbConnect = require("./config/database");

app.use(express.json());

app.use("/api/v1", todoroutes);

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("app listening on port 3000");
});

dbConnect();
