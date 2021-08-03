const app = require("express");
const router = app.Router();

const authMiddleWare = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

router.get(
  "/get-restaurants",
  authMiddleWare.verifyCustomer,
  userController.getRestaurants
);
router.get(
  "/get-restaurant/:restaurantId",
  authMiddleWare.verifyCustomer,
  userController.getRestaurant
);
router.post(
  "/post-order",
  authMiddleWare.verifyCustomer,
  userController.postOrder
);

module.exports = router;
