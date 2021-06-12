const { Restaurant, validate } = require("../models/registeredRestaurant");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");

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

  let restaurant = await Restaurant.findOne({ email: req.body.email });
  if (restaurant) return res.status(400).send("User already exists");

  restaurant = new Restaurant(
    _.pick(req.body, [
      "restaurantName",
      "email",
      "password",
      "address",
      "phone",
    ])
  );

  const salt = await bcrypt.genSalt(10);
  restaurant.password = await bcrypt.hash(restaurant.password, salt);
  restaurant = await restaurant.save(restaurant);

  const token = restaurant.generateAuthentication();
  res
    .header("x-auth-token", token)
    .send(_.pick(restaurant, ["_id", "restaurantName", "email"]));
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
