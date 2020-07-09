const mongoose = require("mongoose");
const products = require('./Products');
const productSchema = mongoose.model('Products').schema;

const ListsSchema = mongoose.Schema({
  ListName: { type: String, required: true },
  product: { type: [productSchema], required: true },
  createdAt: { type: Date, default: Date.now },
});

// export ma methode en indiquant à mongoose le format
module.exports = mongoose.model("Lists", ListsSchema);
