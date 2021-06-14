const express = require("express");
const router = express.Router();
const fs = require("fs");
const _ = require("lodash");
const { Menu, validate } = require("../models/menuManagement");
const auth = require("../middleware/auth");
const { upload } = require("../middleware/storingImages");

router.get("/", async (req, res) => {
  const menu = await Menu.find().sort("name");
  res.send(menu);
});

router.post("/addmenu", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send("Validation error");

  let menu = new Menu(
    _.pick(req.body, ["itemName", "category", "price", "description"])
  );

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

  if (!menu) return res.status(404).send("Menu not in data base");

  res.send(menu);
});

module.exports = router;
