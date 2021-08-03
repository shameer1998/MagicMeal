const app = require("express");
const router = app.Router();

const itemController = require("../controllers/itemController");
const authMiddleWare = require("../middleware/authMiddleware");

router.post(
  "/add-item",
  authMiddleWare.verifyRestaurant,
  itemController.addItem
);
router.delete(
  "/delete-item/:itemId",
  authMiddleWare.verifyRestaurant,
  itemController.deleteItem
);
router.put(
  "/update-item/:itemId",
  authMiddleWare.verifyRestaurant,
  itemController.updateItem
);
router.get(
  "/get-items",
  authMiddleWare.verifyRestaurant,
  itemController.getItems
);
router.get(
  "/get-item/:itemId",
  authMiddleWare.verifyRestaurant,
  itemController.getItem
);

module.exports = router;
