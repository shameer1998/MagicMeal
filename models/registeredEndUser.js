const mongoose = require("mongoose");
const Joi = require("joi");

const EndUser = mongoose.model(
  "EndUser",
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

    phone: {
      type: String,
      required: true,
    },
  })
);

function validateEndUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(5).max(255).required(),
    phone: Joi.string().min(5).required(),
  });

  const result = schema.validate(user);
  return result;
}

exports.EndUser = EndUser;
exports.validate = validateEndUser;
