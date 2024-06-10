const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config()

const join = (req, res) => {
  const { email, password } = req.body;

  // 회원가입 시 비밀번호를 암호화해서 암호화된 비밀번호 & salt 값을 같이 저장
  const salt = crypto.randomBytes(10).toString('base64');
  const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

  let sql = 'INSERT INTO users (email, password, salt) values (?, ?, ?)';
  let values = [ email, hashPassword, salt ];
  
  conn.query(sql, values,
    (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json(err);
      }
      return res.status(StatusCodes.CREATED).json(results);
    }
  )
};

module.exports = { join };