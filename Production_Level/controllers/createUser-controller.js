const userModel = require('../models/schema');

module.exports.createUserController = async (req, res) => {
    const {username, email, password, age} = req.body;

    const user = await userModel.create({
        username: username,
        email: email,
        password: password,
        age: age
    })
    // user.toString();
    res.send(user);

}