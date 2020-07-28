const mongoose = require('mongoose');
const lists = require('./Lists');
const listSchema = mongoose.model('Lists').schema;

const UsersShema = mongoose.Schema({
    userName: {type: String, required: true},
    age: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    lists: {type: [listSchema]}
});

// export ma methode en indiquant à mongoose le format
module.exports = mongoose.model('Users', UsersShema);
