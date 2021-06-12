const { EndUser } = require("../models/registeredEndUser");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  const { error } = validateRequest(req.body);
  //console.log(req.body.inputData);
  if (error) return res.status(400).send("Validation Error");

  let user = await EndUser.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = user.generateAuthentication();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "firstName", "lastName", "email"]));
});

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
