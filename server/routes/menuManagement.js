const express = require("express");
const router = express.Router();
const fs = require("fs");
const { Menu, validate } = require("../models/menuManagement");
const { upload } = require("../middleware/storingImages");

router.get("/", async (req, res) => {
  const menu = await Menu.find().sort("name");
  res.send(menu);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let menu = new Menu({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    description: req.body.descripton,
  });

  menu = await menu.save(menu);
  res.send(menu);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const menu = await Menu.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    },
    { new: true }
  );
  if (!menu) return res.status(404).send("No user found.");

  res.send(menu);
});

router.delete("/:id", async (req, res) => {
  const menu = await Menu.deleteOne({ _id: req.params.id });

  if (!menu) return res.status(404).send("USer not in data base");

  res.send(menu);
});

module.exports = router;
