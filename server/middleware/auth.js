const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res
      .status(401)
      .send("Access denied. Authentication failed because no token provided.");

  try {
    const decodedPayload = jwt.vevify(token, "myKey");
    req.user = decodedPayload;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
}

module.exports = auth;
