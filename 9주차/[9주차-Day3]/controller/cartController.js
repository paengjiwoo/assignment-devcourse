const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const ensureAuthorization = require('../auth.js');
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

const addToCart = (req, res) => {
  const { book_id, quantity } = req.body;

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
    let sql = `INSERT INTO cartItems (book_id, quantity, user_id)
    VALUES (?, ?, ?);`;
    let values = [book_id, quantity, authorization.id];
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
  }
};

const getCartItems = (req, res) => {
  const { selected } = req.body;

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
    let sql = `SELECT cartItems.id, book_id, title, summary, quantity, price  FROM cartItems 
              LEFT JOIN books ON cartItems.book_id = books.id
              WHERE user_id = ?`;
    let values = []
    
    if (selected.length) {
      sql = sql + ` AND cartItems.id IN (?)`
      values.push(...[ authorization.id, selected ]);
      // selected 배열을 그대로 보내도 정상적으로 조회 가능
    } else {
      values.push(authorization.id);
    }

    conn.query(sql, values, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  }
};

const deleteCartItem = (req, res) => {
  const item_id = req.params.id;

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
    let sql = `DELETE FROM cartItems WHERE id = ?`;
    conn.query(sql, item_id, (err, results) => {
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

module.exports = {
  addToCart,
  getCartItems,
  deleteCartItem
};