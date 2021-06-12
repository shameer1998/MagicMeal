function isEndUser(req, res, next) {
  if (!req.user.isEndUser)
    return res.status(403).send("Access denied. You are forbidded.");
  next();
}

module.exports = isEndUser;
