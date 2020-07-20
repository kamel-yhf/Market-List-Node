const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productName: {type: String, required: true},
    productPrice: {type: Number}
})

// export ma methode en indiquant à mongoose le format
module.exports = mongoose.model('Products', productsSchema);