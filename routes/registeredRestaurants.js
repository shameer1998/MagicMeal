const { Restaurant, validate } = require("../models/registeredRestaurant");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const restaurant = await Restaurant.find().sort("name");
  res.send(restaurant);
});

router.get("/:id", async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (!restaurant) return res.status(404).send("Could not find the restuarant");

  res.send(restaurant);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let restaurant = new Restaurant({ name: req.body.name });
  restaurant = await restaurant.save(restaurant);
  res.send(restaurant);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, email: req.body.email, password: req.body.password },
    { new: true }
  );
  if (!restaurant) return res.status(404).send("The restaurant not found..");

  res.send(restaurant);
});

router.delete("/:id", async (req, res) => {
  const restaurant = await Restaurant.deleteOne({ _id: req.params.id });

  if (!restaurant) return res.status(404).send("Restaurant not found");

  res.send(restaurant);
});

module.exports = router;
