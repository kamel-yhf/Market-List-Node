const mongoose = require('mongoose');

const pricesShema = mongoose.Schema({
    price: {type: Number, required: false}
});

module.exports = mongoose.model('Prices', pricesShema);