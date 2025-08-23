const express = require('express')
const app = express()
const port = 5000;
const expressSession = require('express-session')
const flash = require("connect-flash")

const cors = require('cors')

app.use(cors())

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "Suyash"
}))
app.use(flash())

app.get("/", (req, res, next) => {
    req.flash("error", "Wrong username or password")
    res.redirect("/error")
})

app.get("/error", (req, res, next) => {
    let msg = req.flash('error')
    res.send(msg)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})