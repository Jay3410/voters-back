const route = require("express").Router();
const multer = require("multer");
const Voter = require("../model/voter");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `voters/`);
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  }
});

const upload = multer({ storage: storage });

route.post("/register", upload.single("img"), (req, res) => {
  const { name, address, img } = req.body;

  const error = {};

  Voter.findOne({ name }).then(voter => {
    if (voter) {
      error.name = "already registered";

      return res.send(error);
    }

    const newVoter = new Voter({
      name,
      address,
      img: req.file.filename
    })
      .save()
      .then(() => res.send({ success: true }))
      .catch(console.log);
  });
});
module.exports = route;
