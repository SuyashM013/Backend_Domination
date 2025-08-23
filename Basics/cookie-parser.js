const express = require('express')
const port = 5000;
const cookieParesr = require('cookie-parser')

const app = express()
app.use(cookieParesr())

app.get('/', (req, res) => {
    res.send('Hi')
})

app.get("/baned", (req, res, next) => {
    res.cookie("name", "suyash")
    res.send("banned")
})

app.get("/check", (req, res, next) => {
    console.log(req.cookies.name );
    res.send("okk cokkie got it")
})



app.listen(port, () => {
    console.log('port Running')
})