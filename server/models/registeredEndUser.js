const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const endUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    maxlength: 1024,
  },

  phone: {
    type: String,
    required: true,
  },
});

endUserSchema.methods.generateAuthentication = function () {
  const token = jwt.sign({ _id: this._id }, "myKey");
  return token;
};

const EndUser = mongoose.model("EndUser", endUserSchema);

function validateEndUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(5).required(),
    lastName: Joi.string().min(5).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(5).max(1024).required(),
    phone: Joi.string().min(5).required(),
  });

  const result = schema.validate(user);
  //console.log(result);
  return result;
}

exports.EndUser = EndUser;
exports.validate = validateEndUser;
