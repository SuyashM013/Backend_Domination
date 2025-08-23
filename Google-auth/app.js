const express = require('express');
const app = express();
const port = 3000;
const auth = require('./routes/authroutes')
const expressSession = require('express-session')
// // const session = require('express-session');

require('dotenv').config()
const connectDB = require('./config/mongoose-connection')
connectDB();
const passport = require('passport')

require('./config/passportgoogle');
app.use(express.json());
// app.use(expressSession())
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('working')
    console.log('working')
})


app.use('/auth', auth)


app.listen(port)

