const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;

