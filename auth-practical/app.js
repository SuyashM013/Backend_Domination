const express = require('express');
const port = 4500;
const app = express();
const userModel = require('./models/user')

const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;


    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt)
        if (err) res.status(500).send(err);

        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) res.status(500).send(err);
            // console.log(hash);

            // User create hoga and db me store hoga
            const user = await userModel.create({
                username,
                email,
                password: hash,
                age
            })

            let token = jwt.sign({ email }, "secret");
            res.cookie('token', token);

            res.send("User Created :" + user);
        })
    })

    //
})

app.get('/login', (req, res) => {
    res.render('login')

})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})  //If does not exists it returns null
    if(!user) return res.send('Sai se likh bee')

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(err) return res.status(500).send(err);
        if(result){
            let token = jwt.sign({email: user.email}, "secret");
            res.cookie('token', token);
            res.send('Login Successfull')
        }
        else res.send('Wrong Password')
    })
})

app.get('/logout', (req, res) => {
    // res.clearCookie('token';
    res.setCookie('token', '');
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})