const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/DBtest")

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
})

db.on("open", () => {
    console.log("Connection Established")
})

module.export = db;