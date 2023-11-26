// routes/inProgressMissionRoutes.js
const express = require('express');
const router = express.Router();
const inProgressMissionController = require('../controllers/inProgressMissionController');

router.get('/in-progress', inProgressMissionController.getAllInProgressMissions);
router.get('/missions/:id', inProgressMissionController.getMissionById);

module.exports = router;
