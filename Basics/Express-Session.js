const express = require('express')
const port = 5000;
const app = express();

const expressSession = require('express-session')

app.use(expressSession({
    secret: "random",
    resave: false,
    saveUninitialized: false,
}));

app.get("/", (req, res) => {
    res.send("I'm at Home Page")
})

app.get("/about", (req, res, next) => {

    req.session.polo = true;
    res.send('Done')

    next()
})

app.get("/check", (req,res, next) => {
    console.log(req.session.polo);
    next();
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})