// services/inProgressMissionService.js
const InProgressMissionDao = require('../daos/inProgressMissionDao');
const Mission = require('../models/Mission');

class InProgressMissionService {
    getAllInProgressMissions(page, pageSize, callback) {
        InProgressMissionDao.getAllInProgressMissions(page, pageSize, callback);
    }

    getMissionById(id, callback) {
        InProgressMissionDao.getMissionById(id, callback);
    }
}

module.exports = new InProgressMissionService();
