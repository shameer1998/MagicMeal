const { EndUser, validate } = require("../models/registeredEndUser");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const endUser = await EndUser.find().sort("name");
  if (!endUser) return res.status(404).send("Database is empty");

  res.send(endUser);
});

router.get("/:id", async (req, res) => {
  const endUser = await EndUser.findById(req.params.id);

  if (!endUser) return res.status(404).send("Could not find the user");

  res.send(endUser);
});

router.post("/", async (req, res) => {
  //console.log("Body", req.body);
  const { error } = validate(req.body);

  if (error) return res.status(400).send("Input data correctly");

  let user = await EndUser.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");

  let endUser = new EndUser(
    _.pick(req.body, ["firstName", "lastName", "email", "password", "phone"])
  );

  const salt = await bcrypt.genSalt(10);
  endUser.password = await bcrypt.hash(endUser.password, salt);

  endUser = await endUser.save(endUser);

  const token = endUser.generateAuthentication();

  res
    .header("x-auth-token", token)
    .send(_.pick(endUser, ["_id", "firstName", "lastName", "email"]));
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const endUser = await EndUser.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    },
    { new: true }
  );
  if (!endUser) return res.status(404).send("No user found.");

  res.send(endUser);
});

router.delete("/:id", async (req, res) => {
  const endUser = await EndUser.deleteOne({ _id: req.params.id });

  if (!endUser) return res.status(404).send("USer not in data base");

  res.send(endUser);
});

module.exports = router;
