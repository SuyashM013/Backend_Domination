const express = require('express')
const port = 6000;
const app = express()

app.get('/', (req,res) => {
    res.send("I'm comming from get request")
})
app.post('/', (req,res) => {
    res.send("I'm comming from post request")
})
app.put('/', (req,res) => {
    res.send("I'm comming from put request")
})
app.patch('/', (req,res) => {
    res.send("I'm comming from patch request")
})
app.delete('/', (req,res) => {
    res.send("I'm comming from delete request")
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})