const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const join = (req, res) => {
  const { email, password } = req.body;

  let sql = 'INSERT INTO users (email, password) values (?, ?)';
  let values = [ email, password ];
  
  conn.query(sql, values,
    (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json(err);
      }
      return res.status(StatusCodes.CREATED).json(results);
    }
  )
}

module.exports = join