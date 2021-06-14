const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  console.log(token);

  if (!token)
    return res
      .status(401)
      .send("Access denied. Authentication failed because no token provided.")
      .redirect("restaurant-logIn");

  try {
    const decodedPayload = jwt.verify(token, "myKey");
    req.user = decodedPayload;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token").redirect("restaurant-login");
  }
}

module.exports = auth;
