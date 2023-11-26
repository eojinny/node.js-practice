// daos/reviewDao.js
const connection = require('../db');

class ReviewDao {
    getAllReviews(callback) {
        connection.query('SELECT * FROM reviews', (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }

    getReviewById(id, callback) {
        connection.query('SELECT * FROM reviews WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            callback(results[0]); // Assuming id is unique
        });
    }

    addReview(title, content, callback) {
        connection.query('INSERT INTO reviews (title, content) VALUES (?, ?)', [title, content], (err, results) => {
            if (err) throw err;
            const newReviewId = results.insertId;
            this.getReviewById(newReviewId, callback);
        });
    }
}

module.exports = new ReviewDao();
