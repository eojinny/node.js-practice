// routes/challengeRoutes.js

const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

router.post('/challenge-mission', challengeController.challengeMission);

module.exports = router;
