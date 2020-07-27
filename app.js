const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const listRoutes = require("./routes/Lists");
const userRoutes = require("./routes/Users");
const productRoutes = require("./routes/Products");
const marketRoutes = require("./routes/Markets");
const priceRoutes = require("./routes/Prices");

const app = express();

// Connexion a la base de donnée MongoDB
mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à mongo réussie"))
  .catch((err) => {
    console.log(err);
  });

mongoose.set("useFindAndModify", false);
mongoose.set('useCreateIndex', true);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

// Les routes
app.use("/lists", listRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/markets", marketRoutes);
app.use("/prices", priceRoutes);

// Export de l'application
module.exports = app;