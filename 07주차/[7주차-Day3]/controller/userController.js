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

      // 로그인 시, 비밀번호 입력받음 -> salt 값 꺼내서 비밀번호 암호화해 db 암호와 비교
      const raw = user.salt;
      const hashPassword = crypto.pbkdf2Sync(password, raw, 10000, 10, 'sha512').toString('base64');

      if (user && user.password === hashPassword) {
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
  const { email  } = req.body;

  let sql = 'SELECT * FROM users WHERE email = ?';
  let value = email;

  conn.query(sql, value,
    (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json(err);
      }

      const user = results[0];
      if (user) {
        return res.status(StatusCodes.OK).json({
          email: email
        });
      } else {
        return res.status(StatusCodes.UNAUTHORIZED).end();
      }
    }
  )
};

const pwdReset = (req, res) => {
  // email은 이전 페이지에서 입력했던 email을 받아옴
  const { email, password  } = req.body;

  let sql = 'UPDATE users SET password = ?, salt = ? WHERE email = ?';
  
  const salt = crypto.randomBytes(10).toString('base64');
  const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');
  
  let value = [ hashPassword, salt, email ];

  conn.query(sql, value,
    (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json(err);
      }
      if ( results.affectedRows === 0 ) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      } else {
        return res.status(StatusCodes.OK).json(results);
      }
    }
  )
};

module.exports = { join, login, requestPwdReset, pwdReset };