const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const hemlet = require("helmet")
const morgan = require("morgan")

dotenv.config();

 mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
  console.log("Connected to MongoDB right now")
});

app.listen(8800, () => {
  console.log("Connected to backend server")
})