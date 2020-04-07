const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

//load environment variables

dotenv.config({ path: "./config/config.env" });

//Connect database
db();

//initialize app

const app = express();

//Body parser

app.use(express.json());

//Enable cors

app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
