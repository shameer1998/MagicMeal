const { Restaurant } = require("../models/restaurant");
const { Customer } = require("../models/customer");
const { Account } = require("../models/account");
const { Orders } = require("../models/order");

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate("account");
    if (!restaurants) return res.status(404).send("No restaurant found.");
    return res.status(200).json({
      message: "These are all the restaurants in database.",
      data: restaurants,
    });
  } catch (error) {
    if (error)
      return res.status(500).json({
        message: "Server Error",
        error: error,
      });
  }
};

exports.getRestaurant = async (req, res) => {
  const restaurantId = req.params.restaurantId;
  console.log("Restaurant", restaurantId);
  if (!restaurantId)
    return res.status(404).json({
      message: "Could not find restaurant id in params",
      data: restaurantId,
    });

  try {
    const restaurant = await Restaurant.findById(restaurantId).populate(
      "items"
    );
    //console.log("Restaurant", restaurant);

    if (!restaurant)
      return res.status(404).json({
        message: "Could not return restaurant.",
        data: restaurant,
      });
    else {
      return res.status(200).json({
        message: "Restaurant and its items returned successfully!",
        data: restaurant,
      });
    }
  } catch (error) {
    if (error)
      return res.status(500).json({
        message:
          "Something went wrong in try block while sending back response.",
        error: error,
      });
  }
};

exports.postOrder = async (req, res) => {
  const userId = req.loggedInUserId;
  const items = req.items;

  if (!userId)
    return res.status(404).json({
      message: "No id provided to find user.",
      data: userId,
    });

  try {
    const account = await Account.findById(userId);
    if (!account)
      return res.status(404).json({
        message: "Could not find account.",
        data: account,
      });
    const customer = await Customer.findOne({
      account: account._id,
    });

    if (!customer)
      return res.status(404).json({
        message: "No customer found with this account id.",
        data: customer,
      });

    let newOrder = new Orders({
      items: items,
      customer: {
        name: customer.firstName + " " + customer.lastName,
        contact: customer.contact,
        customerId: customer.id,
      },
    });
    const savedOrder = await newOrder.save();
  } catch (error) {
    if (error)
      return res.status(500).json({
        message: "Could not save order to database. Server Error",
        savedOrder: savedOrder,
        error: error,
      });
  }
};
