const express = require('express');
const port =  process.env.PORT || 3002;
const app = express();
const path = require('path');
require('dotenv').config();

console.log(process.env.EXPRESS_KEY);


app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const indexRouter = require('./routes/index-router')
const userRouter = require('./routes/user-router');
const isLoggedin = require('./middlewares/isLoggedin');
const db = require('./config/mongoose-connection');


app.use("/", indexRouter);
app.use("/user", isLoggedin, userRouter)

app.listen(port, ()=>{
    console.log("Working and running on port "+port)
})

