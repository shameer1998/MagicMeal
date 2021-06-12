function isRestaurant(req, res, next) {
  if (!req.user.isRestaurant)
    return res.status(403).send("Access denied. You are forbidden.");
  next();
}

module.exports = isRestaurant;
