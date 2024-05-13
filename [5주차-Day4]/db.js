// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'airbnb',
  dateStrings: true // 소수점 자리를 제외한 timezone 반환
});

connection.query(
  'SELECT * FROM `users`',
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);