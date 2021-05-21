const mongoose = require("mongoose");
const Joi = require("joi");

const Restaurant = mongoose.model(
  "Restaurant",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  })
);

function validateRestaurant(restaurant) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(5).max(255).required(),
  });

  const result = schema.validate(restaurant);
  return result;
}

exports.Restaurant = Restaurant;
exports.validate = validateRestaurant;
