const express = require('express');
const port = 3050;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


app.get('/', (req, res)=>{
    res.send('Working jii')
})

app.post('/enc', async (req, res) => {
    let salt = await bcrypt.genSalt(20);
    // res.send(salt)

    bcrypt.hash('Suyash', salt, (err, hash)=>{
        if(err) res.status(500).send(err);
        res.send(hash);
        console.log(hash)
    })
    
})

app.post('/check',async(req, res) =>{
   let result = await bcrypt.compare('Suyash', "$2b$20$4BNJgqjFtWpZ2oN4o6Vs4.wyZ6tIZ105pjNKMTvPtdHk/rI5S7dFa")
   res.send(result)

})

app.get('/jwttoken', (req, res) => {
    let token = jwt.sign({name: 'Suyash'}, 'suyash');
    res.send(token);
})

app.get('/jwtdata', (req, res)=> {
    let data = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3V5YXNoIiwiaWF0IjoxNzQyMzY4ODc5fQ.6XT0mf9tPwdKLDIHpuBjhR2zNxMlTTC5nVytwAAeAQs', 'suyash');
    res.send(data)
})

app.get('/jwtverify', (req, res)=> {
    let ans = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3V5YXNoIiwiaWF0IjoxNzQyMzY4ODc5fQ.6XT0mf9tPwdKLDIHpuBjhR2zNxMlTTC5nVytwAAeAQs', 'suyash');
    res.send(ans)   
})

app.listen(port, ()=>{
    console.log('App running on '+ port)
})