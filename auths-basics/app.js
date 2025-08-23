const cookieParser = require('cookie-parser');
const express = require('express');
const port = 3900;
const app = express();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

app.use(cookieParser())


app.get('/', (req, res) => {
    res.cookie('name', 'vaishu');
    res.send("Done Cookie Saved")
})
app.get('/getcookie', (req, res) => {
    res.send(req.cookies);
    // console.log(req.cookies);
    res.end();
    res.send("Done Cookie Saved")
    res.end();
})

// encrypt - $2b$10$5lMFcGGfp34o/foPehV2q.viIMPStcZ0Wfq48sWUD/ubBnvUyPwKS
app.get('/password', (req, res) => {
    const password = "vaishu";
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            res.send(hash);
        });
    });

})

// Verify the hash 
app.get('/verify', (req, res) => {
    const hash = '$2b$10$5lMFcGGfp34o/foPehV2q.viIMPStcZ0Wfq48sWUD/ubBnvUyPwKS'
    const password = "vaishu";
    bcrypt.compare(password, hash, function(err, result) {
        // result == true
        res.send(result);
    });
})

// JWT

app.get('/jwt', (req, res)=>{
    const token = jwt.sign({name:"vaishu"}, "secretkey");
    res.cookie('token', token);
    res.send("Done Cookie Saved")
})

// read jwt token

app.get('/readjwt', (req, res) => {
    const token = req.cookies.token;
    const data = jwt.verify(req.cookies.token, 'secretkey')
    res.send(data);
})


app.listen((port), () => {
    console.log(`Server is running on port ${port}`);
})