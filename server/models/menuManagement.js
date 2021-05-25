const mongoose = require("mongoose");
const Joi = require("joi");

const Menu = mongoose.model(
  "Menu",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  })
);

function validateMenu(menu) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    category: Joi.string().min(5).required(),
    price: Joi.string().required(),
    description: Joi.string().min(5).required(),
  });

  const result = schema.validate(menu);
  return result;
}

exports.Menu = Menu;
exports.validate = validateMenu;
