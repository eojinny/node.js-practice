// controllers/inProgressMissionController.js
const InProgressMissionService = require('../services/inProgressMissionService');

class InProgressMissionController {
    getAllInProgressMissions(req, res) {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10; // Adjust the page size as needed

        InProgressMissionService.getAllInProgressMissions(page, pageSize, missions => {
            res.json(missions);
        });
    }

    getMissionById(req, res) {
        const id = parseInt(req.params.id);
        InProgressMissionService.getMissionById(id, mission => {
            if (mission) {
                res.json(mission);
            } else {
                res.status(404).json({ error: 'Mission not found' });
            }
        });
    }
}

module.exports = new InProgressMissionController();
