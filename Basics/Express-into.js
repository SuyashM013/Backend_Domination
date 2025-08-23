const express = require('express')

const app = express();
const port = 5000;

app.use((req, res, next) => {
    console.log("start")
    next()
    
})

app.get("/", (req, res) => {
    res.send('Hello to Maain page')
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.get("*", (req, res) => {
    res.send("404 Not Found")
})

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})