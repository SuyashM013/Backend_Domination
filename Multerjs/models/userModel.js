const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/multerdbtest").then(() => {
    console.log("Connected to DB")
});

const userSchema = mongoose.Schema({
    name: String,
    // username: String,
    image: String, // image ka name save hoga bss

})

module.exports = mongoose.model('user', userSchema)