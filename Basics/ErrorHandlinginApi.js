const express = require('express');
const port = 2000;
const app = express()


// error aand trying postman basics.......

const data = [1,2,3,4,5,6]

app.get('/', (req, res, next) => {
    try{

        res.send('Hello')
    }
    catch(err){
        next(err)
    }
})
app.get('/hey', (req, res) => {
    res.send('Hello Jii from Hey route')
})
app.get('/data', (req, res) => {
    res.send(data)
})

app.post('/data/:number', (req, res) => {
    //  res.send("working")
   data.push(parseInt(req.params.number))
   res.send(data)
})


// error handler
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})