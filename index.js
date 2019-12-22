const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyparser = require("body-parser");

const registerRoute = require("./api/register");
const votersRoute = require("./api/voters");

// add db url
const db = "";

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to db"))
  .catch(console.log);

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "voters")));
app.use("/voter", registerRoute);
app.use("/voters", votersRoute);

app.listen(8000);
