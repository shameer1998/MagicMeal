const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
    quantity: { type: Number, default: 1 }
});

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;