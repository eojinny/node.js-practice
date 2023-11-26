// services/missionService.js
const MissionDao = require('../daos/missionDao');
const Mission = require('../models/Mission');

class MissionService {
    getAllMissionsForStore(storeId, callback) {
        MissionDao.getAllMissionsForStore(storeId, callback);
    }

    getMissionById(id, callback) {
        MissionDao.getMissionById(id, callback);
    }
}

module.exports = new MissionService();
