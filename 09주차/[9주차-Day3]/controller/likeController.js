const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const ensureAuthorization = require('../auth.js');
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

const addLike = (req, res) => {
  const liked_book_id = req.params.id;

  const authorization = ensureAuthorization(req, res);

  if (authorization instanceof TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message : "로그인 세션이 만료되었습니다."
    }) 
  } else if (authorization instanceof JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message : "잘못된 토큰입니다."
    }) 
  } else {
    let sql = `INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)`;
    let values = [authorization.id, liked_book_id];
    conn.query(sql, values, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (results.affectedRows) {
        return res.status(StatusCodes.CREATED).json(results);
      } else {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
    });
  };
};

const removeLike = (req, res) => {
  const liked_book_id = req.params.id;

  const authorization = ensureAuthorization(req, res);  

  if (authorization instanceof TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message : "로그인 세션이 만료되었습니다."
    }) 
  } else if (authorization instanceof JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message : "잘못된 토큰입니다."
    }) 
  } else {
    let sql = `DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?`;
    let values = [authorization.id, liked_book_id];

    conn.query(sql, values, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (results.affectedRows) {
        return res.status(StatusCodes.CREATED).json(results);
      } else {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
    });
  };
};

module.exports = { addLike, removeLike };