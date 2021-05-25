const { EndUser, validate } = require("../models/registeredEndUser");
const express = require("express");
const router = express.Router();

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
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let endUser = new EndUser({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  });
  endUser = await endUser.save(endUser);
  res.send(endUser);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const endUser = await EndUser.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
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
