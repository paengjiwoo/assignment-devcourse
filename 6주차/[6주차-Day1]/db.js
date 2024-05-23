const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'airbnb',
  dateStrings: true // 소수점 자리를 제외한 timezone 반환
})

module.exports = connection;