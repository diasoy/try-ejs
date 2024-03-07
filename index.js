const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const Person = require("./models/person");

mongoose
  .connect("mongodb://127.0.0.1/persons_db")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
