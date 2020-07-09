const mongoose = require('mongoose');
const prices = require('./Prices');

const priceSchema = mongoose.model('Prices').schema;

const productsSchema = mongoose.Schema({
    productName: {type: String, required: true},
    productPrice: {type:[priceSchema], required: true}
})

// export ma methode en indiquant à mongoose le format
module.exports = mongoose.model('Products', productsSchema);