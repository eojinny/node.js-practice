const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'review-manager.c6t1v05cvftk.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'adminadmin',
    database: 'crawlingdata'
});

module.exports = {
    pool: pool
};