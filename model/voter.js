const mongoose = require("mongoose");

const Voter = mongoose.model("voter", {
  name: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = Voter;
