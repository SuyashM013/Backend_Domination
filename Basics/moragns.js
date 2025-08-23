const express = require('express')
const port = 4000;
const app = express()

const morgan = require('morgan')

app.use(morgan('dev'))
app.use(morgan('combined'))

app.get('/', (req, res, next) => {
    res.send('Hello World!')
    })

// Dynamic Route

app.get("/profile/:user", (req,res ) => {
    res.send(`Hello ${req.params.user}`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

