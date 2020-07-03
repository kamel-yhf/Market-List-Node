const mongoose = require('mongoose');

const ListsShema = mongoose.Schema({
    text: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
});

// export ma methode en indiquant à mongoose le format
module.exports = mongoose.model('Lists', ListsShema);