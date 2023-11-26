// routes/missionRoutes.js

const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');

router.post('/add-mission', missionController.addMission);

module.exports = router;
