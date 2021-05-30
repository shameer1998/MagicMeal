const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/order");
const Menu = require("../models/menuManagement");

router.get("/", async (req, res, next) => {
    await Order.find()
        .select("product quantity _id")
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return ({
                        _id: doc._id,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: "GET",
                            url: "https://localhost:3001orders" + doc._id
                        }
                    })
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                errors: err
            });
        })
});


router.post("/", async (req, res, next) => {
    Menu.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                })
            }
            const order = new Order({
                id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
            });
            return order.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Order Stored",
                createdOrder: {
                    _id: result._id,
                    product: result.product,
                    quantity: result.quantity
                },
                request: {
                    type: "GET",
                    url: "https://localhost:3001/orders" + result_.id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
});


router.get("/:id", (req, res, next) => {
    Order.findById(req.params.orderId)
        .then(order => {
            res.status(200).json({
                order: order,
                request: {
                    type: "GET",
                    url: "https://localhost:3001/orders"
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        }); s
});

router.delete("/:id", (req, res, next) => {
    Order.remove({
        _id: req.params.order
    })
        .then(result => {
            res.status(200).json({
                messgae: "Order Deleted",
                request: {
                    type: "POST",
                    url: "https://localhost:3001/orders",
                    body: {
                        productId: "ID", quantity: "Number"
                    }
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router;








