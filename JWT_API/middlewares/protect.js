const jwt = require('jsonwebtoken')
const userModel = require('../models/user-model')

module.exports.protect = async (req, res, next) => {
    if (req.cookies.token) {
        try {
            const token = req.cookies.token;
            // console.log("recieved token: ", token)
            const data = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await userModel.findOne({ email: data.email }).select("-password") // password excluded 
            next();

        } catch (err) {
            res.status(401).send("Not Authorized "+ err)

        }
    }
    if (!req.cookies.token) {
        return res.status(401).send('No toekn found,Not allowed to visit this page')
    }
}