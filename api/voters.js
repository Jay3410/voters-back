const route = require("express").Router();
const Voter = require("../model/voter");

route.get("/", (req, res) => {
  Voter.find()
    .then(voters => res.send({ voters }))
    .catch(console.log);
});

module.exports = route;
