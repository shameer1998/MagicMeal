const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const endUsers = require("./routes/registeredEndUsers");
const restaurants = require("./routes/registeredRestaurants");
const menu = require("./routes/menuManagement");

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
app.use("/api/end-users", endUsers);
app.use("/api/restaurants", restaurants);
app.use("/api/menu", menu);
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
