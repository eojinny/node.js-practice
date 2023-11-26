// daos/inProgressMissionDao.js
const connection = require('../db');

class InProgressMissionDao {
    getAllInProgressMissions(page, pageSize, callback) {
        const offset = (page - 1) * pageSize;
        connection.query(
            'SELECT * FROM missions WHERE status = "in-progress" LIMIT ?, ?',
            [offset, pageSize],
            (err, results) => {
                if (err) throw err;
                callback(results);
            }
        );
    }

    getMissionById(id, callback) {
        connection.query('SELECT * FROM missions WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            callback(results[0]); // Assuming id is unique
        });
    }
}

module.exports = new InProgressMissionDao();
