const mongoose = require('mongoose');

const UsersShema = mongoose.Schema({
    userName: {type: String, required: true},
    age: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true}
});

// export ma methode en indiquant à mongoose le format
module.exports = mongoose.model('Users', UsersShema);
