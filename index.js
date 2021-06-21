const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();

 mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
  console.log("Connected to MongoDB right now")
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// URL to Routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(8800, () => {
  console.log("Connected to backend server")
});