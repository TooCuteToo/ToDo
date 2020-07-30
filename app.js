require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");

const app = express();

const user = process.env.USER_NAME;
const pass = process.env.PASSWORD;

const connectUrl =
  `mongodb+srv://${user}:${pass}@mydata-afvh8.mongodb.net/ToDo?retryWrites=true&w=majority`;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose.connect(connectUrl, options)
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => app.listen(process.env.PORT || 3000));

app.set("view engine", "ejs");
app.use(express.static("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
