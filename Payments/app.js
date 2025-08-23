const express = require('express')
const app = express()
const connectDB = require('./config/connect')

connectDB();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})