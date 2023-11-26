// daos/missionDao.js
const connection = require('../db');

class MissionDao {
    getAllMissionsForStore(storeId, callback) {
        connection.query('SELECT * FROM missions WHERE store_id = ?', [storeId], (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    getMissionById(id, callback) {
        connection.query('SELECT * FROM missions WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            callback(results[0]); // Assuming id is unique
        });
    }
}

module.exports = new MissionDao();
