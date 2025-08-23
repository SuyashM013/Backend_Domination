// For mongo and mongoose

const express = require('express')
const app = express()
const mongooseconect = require('./config/mongoose')

const port = 3000;


app.get('/', (req, res, next) => {
    res.send("hey")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})



