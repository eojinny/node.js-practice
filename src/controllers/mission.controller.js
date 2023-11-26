// controllers/missionController.js
const MissionService = require('../services/missionService');

class MissionController {
    getAllMissionsForStore(req, res) {
        const storeId = req.params.storeId;
        MissionService.getAllMissionsForStore(storeId, missions => {
            res.json(missions);
        });
    }

    getMissionById(req, res) {
        const id = parseInt(req.params.id);
        MissionService.getMissionById(id, mission => {
            if (mission) {
                res.json(mission);
            } else {
                res.status(404).json({ error: 'Mission not found' });
            }
        });
    }
}

module.exports = new MissionController();
