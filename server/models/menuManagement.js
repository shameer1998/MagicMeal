const mongoose = require("mongoose");
const Joi = require("joi");

const Menu = mongoose.model(
  "Menu",
  new mongoose.Schema({
    itemName: {
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
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
  })
);

function validateMenu(menu) {
  const schema = Joi.object({
    itemName: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    //restaurandId: Joi.string().required(),
  });

  const result = schema.validate(menu);
  return result;
}

exports.Menu = Menu;
exports.validate = validateMenu;
