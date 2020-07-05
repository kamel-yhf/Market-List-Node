const mongoose = require('mongoose');

const marketsShema = mongoose.Schema({
    marketName: {type: String, required: true},
    address: {type: String, required: true}
});

module.exports = mongoose.model('markets', marketsShema);