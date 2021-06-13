const { EndUser } = require("../models/registeredEndUser");
const { Restaurant } = require("../models/registeredRestaurant");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

// ____________________________POST METHOD Restaurant_____________________________//
router.post("/restaurant", async (req, res) => {
  const { error } = validateRequest(req.body);

  if (error) return res.status(400).send("Validation Error");

  let restaurant = await Restaurant.findOne({ email: req.body.email });
  if (!restaurant) return res.status(400).send("Invalid restaurant email  ");

  const validPassword = await bcrypt.compare(
    req.body.password,
    restaurant.password
  );
  if (!validPassword)
    return res.status(400).send("Invalid restaurant password ");

  const token = restaurant.generateAuthentication();

  //console.log("est data", result);
  res
    // .header("x-auth-token", token)
    // .send(_.pick(restaurant, ["_id", "restaurantName", "email"]));
    .status(200)
    .json({ restaurant, token });
});
// ___________________________POST METHOD EndUser____________________________//
router.post("/user", async (req, res) => {
  const { error } = validateRequest(req.body);
  //console.log(req.body.inputData);
  if (error) return res.status(400).send("Validation Error");

  let user = await EndUser.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid user email");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid user password ");

  const token = user.generateAuthentication();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "firstName", "lastName", "email"]));
});
//________________________________________________________________________________//

function validateRequest(request) {
  const schema = Joi.object({
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(5).required(),
  });

  const result = schema.validate(request);
  /* console.log(result); */
  return result;
}

module.exports = router;
