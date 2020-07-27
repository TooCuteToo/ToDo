const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");

const app = express();

const connectUrl =
  "mongodb+srv://Bao2001181020:h3ocojjuh3o@mydata-afvh8.mongodb.net/ToDo?retryWrites=true&w=majority";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose.connect(connectUrl, options)
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => app.listen(3000));

app.set("view engine", "ejs");
app.use(express.static("./views"));

app.use(express.urlencoded({ extended: false }));
app.use("/", router);
