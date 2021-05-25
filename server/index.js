const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const endUsers = require("./routes/registeredEndUsers");
const restaurants = require("./routes/registeredRestaurants");
const menu = require("./routes/menuManagement");
const payment = require("./routes/payment");

mongoose
  .connect(
    "mongodb://localhost:27017/MagicMeal",
    { useNewUrlParser: true },
    { useUnifiedTopology: false }
  )
  .then(() => console.log("Connected to mongo"))
  .catch(() => console.log("Catched Error"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/end-users", endUsers);
app.use("/api/restaurants", restaurants);
app.use("/api/menu", menu);
app.use("/api/payment", payment);
app.set("view engine", "ejs");

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}....`));
