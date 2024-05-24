const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
require('dotenv').config()

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
};

const login = (req, res) => {
  const { email, password } = req.body;

  let sql = 'SELECT * FROM users WHERE email = ?';
  let value = email;

  conn.query(sql, value,
    (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json(err);
      }

      const user = results[0];
      if (user && user.password === password) {
        const token = jwt.sign({
          email: user.email
        }, process.env.PRIVATE_KEY, {
          expiresIn : "1h",
          issuer: "paeng"
        });
        res.cookie("token", token, { httpOnly: true });
        console.log(token);
        return res.status(StatusCodes.OK).json(results);
      } else {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }
    }
  )
};

const requestPwdReset = (req, res) => {

};

const pwdReset = (req, res) => {

};

module.exports = { join, login, requestPwdReset, pwdReset };