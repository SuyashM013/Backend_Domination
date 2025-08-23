const { fileLoader } = require('ejs');
const express = require('express')
const port = 4500;
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
    })

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// install ejs - npm i ejs
// app.set('view engine', 'ejs') - this line is used to set the view engine to ejs.
// create a view fileLoader
// create a view - index.ejs
// load the html in ejs page
// and use res.render in place of res.send to render any page from the views folder