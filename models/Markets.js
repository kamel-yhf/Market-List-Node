const mongoose = require('mongoose');

const marketsShema = mongoose.Schema({
    marketName: {type: String, required: true},
    address: {type: String, required: true},
    latitude: {type: Number, required: false},
    longitude: {type: Number, required: false}
});

module.exports = mongoose.model('markets', marketsShema);