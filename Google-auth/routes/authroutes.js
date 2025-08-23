const express = require('express');

const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate("google", {scope: ['profile']}));

router.get('/', (req, res) =>{
    res.send('Inside the route')
})

module.exports = router;