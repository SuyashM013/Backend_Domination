const express = require('express');
const router = express.Router();

const {registerController} = require('../controllers/auth/registerController');

router.get('/', (req, res) => {
    res.send("Hello from API");
});

router.post('/register', registerController);


module.exports = router;