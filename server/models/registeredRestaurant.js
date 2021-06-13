const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const restaurantSchema = new mongoose.Schema({
  restaurantName: {
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
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

restaurantSchema.methods.generateAuthentication = function () {
  const token = jwt.sign({ _id: this._id }, "myKey");
  return token;
};

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

function validateRestaurant(restaurant) {
  const schema = Joi.object({
    restaurantName: Joi.string().min(5).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(5).max(255).required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
  });

  const result = schema.validate(restaurant);
  console.log(result);
  return result;
}

exports.Restaurant = Restaurant;
exports.validate = validateRestaurant;
