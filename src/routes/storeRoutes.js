// routes/storeRoutes.js

const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/add-store', storeController.addStore);
router.get('/:storeId/missions', missionController.getAllMissionsForStore);
router.get('/missions/:id', missionController.getMissionById);

module.exports = router;
