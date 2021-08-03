const jwt = require("jsonwebtoken");

const { Account } = require("../models/account");

const verifyToken = (req, res) => {
  //console.log("Request header", req.headers["Authorization"]);
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    console.log("Could not get header", authHeader);
    const error = new Error("Not authenticated");
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "myKey");
    console.log("Decoded token", decodedToken);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    console.log("Could not get decodedToken", decodedToken);
    const error = new Error("Not authenticated");
    error.statusCode = 401;
    throw error;
  }

  return decodedToken.accountId;
};

exports.verifyRestaurant = async (req, res, next) => {
  const accountId = verifyToken(req, res);
  await Account.findById(accountId)
    .then((account) => {
      if (!account) {
        const error = new Error("Internal server error");
        error.statusCode = 500;
        throw error;
      }
      if (account.role !== "restaurant") {
        const error = new Error("Forbidden Access");
        error.statusCode = 403;
        throw error;
      }
      req.loggedInUserId = accountId;
      next();
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.verifyCustomer = async (req, res, next) => {
  const accountId = verifyToken(req, res);
  await Account.findById(accountId)
    .then((account) => {
      if (!account) {
        const error = new Error("Internal server error");
        error.statusCode = 500;
        throw error;
      }
      if (account.role !== "customer") {
        const error = new Error("Forbidden Access");
        error.statusCode = 403;
        throw error;
      }
      req.loggedInUserId = accountId;
      next();
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};
