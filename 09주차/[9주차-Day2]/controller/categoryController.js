const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const allCategories = (req, res) => {
  let sql = "SELECT * FROM categories";
  conn.query(sql, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.OK).json(results);
  });
};

module.exports = { allCategories }