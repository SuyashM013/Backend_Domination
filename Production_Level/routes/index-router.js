const express = require('express')

const router = express.Router();
// const indexController = require('../controllers/index-controller')

const {homeController} = require('../controllers/index-controller')

router.get("/", homeController)



module.exports = router;
 