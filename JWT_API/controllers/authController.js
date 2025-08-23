// const userModel = require('../../Production_Level/models/schema');
const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const userModel = require('../models/user-model');

module.exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).send('Account already exists, Please Login instead');
        }

        let salt = await bcrypt.genSalt();
        let hash = await bcrypt.hash(password, salt);
        await UserModel.create({
            name,
            email,
            password: hash,
        })
 
        let token= generateToken({ email });
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000
        })
        console.log(token);

        res.status(201).send('User registered successfully');
        console.log('User Created')

    } catch (err) {
        res.status(500).send('Internal Server Error');
    }


}


module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({ email })

        if (!user) {
            return res.status(500).send('Email or Password Incorrect or User not Exists')
        }
        let result = await bcrypt.compare(password, user.password);

        if (result) {
            let token = generateToken({ email });
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000
            })
            // console.log("Loggedin Token : ", token)

            res.status(201).send('Logged in Successfully');

        } else {
            return res.status(500).send('Email or Password Incorrect or User not Exists')
        }
    } catch (err) {
        res.status(500).send('Something went Wrong' + err.message)
    }

};

module.exports.logoutUser = (req, res) => {

    res.cookie('token', '', {
        httpOnly: true,
        secure: true,
    })
    res.send('Logout Success')
};

module.exports.getUserProfile = (req, res) => {
    // res.send('Logged in ho kya')
    res.send(req.user);
    console.log(req.user)
    
};
