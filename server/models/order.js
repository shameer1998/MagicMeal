const mongoose = require("mongoose");
const orederSchema = mongoose.Schema({
  items: [
    {
      item: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  customer: {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
});

const Orders = mongoose.model("Orders", orederSchema);

exports.Orders = Orders;
