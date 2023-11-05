const express = require('express');
const router = express.Router();

const naverRoute = require('./naverRoute.js');
//const user = require('./userRoute')

router.use('/naver', naverRoute);
//router.use('/user', user);

module.exports = router;