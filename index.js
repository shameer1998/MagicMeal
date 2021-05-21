const mongoose = require("mongoose");
const endUsers = require("./routes/registeredEndUsers");
const restaurants = require("./routes/registeredRestaurants");
const express = require("express");
const app = express();

mongoose
  .connect(
    "mongodb://localhost:27017/MagicMeal",
    { useNewUrlParser: true },
    { useUnifiedTopology: false }
  )
  .then(() => console.log("Connected to mongo"))
  .catch(() => console.log("Catched Error"));

app.use(express.json());
app.use("/api/end-users", endUsers);
app.use("/api/restaurants", restaurants);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
