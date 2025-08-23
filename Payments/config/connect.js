const mongoose = require('mongoose')

const connectDB = () =>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/Payments')
        console.log('connect to db')
    }catch(e){
        console.log(e)
    }
}

module.exports = connectDB;