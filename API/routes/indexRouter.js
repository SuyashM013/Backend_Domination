const express = require('express');
const router = express.Router();

const userModel = require('../models/user');
const user = require('../models/user');


router.post('/create', (req, res) => {
   userModel.create({
    name: req.body.name,
    userName: req.body.userName,  
   })
   res.send('User created');
})

module.exports = router;