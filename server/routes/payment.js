const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const stripe = require("stripe")(
  "sk_test_51IuUgbFjlDLD35dt8IEa91oMXKjlTG6VNwCITlieF4vK9h7e0ZcMCpIraem19UnYdOfEdg1BoqiSdso9f6EkHvAu00NSxE4PxE"
);

router.get("/", async (req, res) => {
  res.send("It is working");
});

router.post("/", async (req, res) => {
  const { meal, token } = req.body;
  console.log("Your meal", meal);
  console.log("Price", meal.price);
  console.log("Public key", process.env.REACT_APP_KEY);
  console.log("Secret Key", process.env.NODE_PAYMENT_SEC_KEY);
  const idempontencyKey = uuid();

  return stripe.customers
    .create({ email: token.eamil, source: token.id })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: meal.price,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase of ${meal.name}`,
        },
        { idempontencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = router;
