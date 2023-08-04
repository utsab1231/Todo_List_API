const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connection to database sucessfull"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;
