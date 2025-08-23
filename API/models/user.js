const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/apidev').then(() => {
    console.log('Connected to Database')
})

const userSchema = mongoose.Schema({
    name: String,
    userName: String,
})

module.exports = mongoose.model('User', userSchema)