const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');
const ensureAuthorization = require('../auth.js');
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

const allBooks = (req, res) => {
  let { category_id, news, limit, currentPage } = req.query;
  let allBooks = {};

  // limit 만큼 데이터 출력할 시작지점
  let offset = parseInt(limit) * (parseInt(currentPage) - 1)

  let sql = `SELECT SQL_CALC_FOUND_ROWS *, (SELECT COUNT(*) 
                        FROM likes 
                        WHERE liked_book_id = books.id) AS likes
            FROM books
            LEFT JOIN categories ON books.category_id = categories.category_id`;
  let values = [];

  if (category_id) {
    sql = sql + ` WHERE books.category_id = ?`;
    values.push(category_id);
  }
  if (news && JSON.parse(news)) sql = sql + (category_id ? ` AND` : ` WHERE`) + ` pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
  sql += ` LIMIT ? OFFSET ?`
  values.push(...[parseInt(limit), offset])
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results.length) {
      allBooks.books = results;
    } 
  });

  sql = "SELECT FOUND_ROWS()";
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results) {
      const pagination = {
        totalCount : results[0]["FOUND_ROWS()"],
        currentPage : parseInt(currentPage)
      };
      allBooks.pagination = pagination
      return res.status(StatusCodes.OK).json(allBooks);
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });

};

const BookDetail = (req, res) => {
  let book_id = parseInt(req.params.id);
  let sql = `SELECT *, (SELECT COUNT(*) FROM likes 
                                        WHERE liked_book_id = books.id) AS likes`;
  let values;

  const authorization = ensureAuthorization(req, res);
  
  if (authorization instanceof TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message : "로그인 세션이 만료되었습니다."
    }) 
  } else if (authorization instanceof JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message : "잘못된 토큰입니다."
    }) 
  } else if (authorization instanceof ReferenceError) { 
    values = [book_id]
  } else { 
    sql += `,(SELECT EXISTS 
              (SELECT * FROM likes 
              WHERE user_id = ? AND liked_book_id = ?)) AS liked`
    values = [authorization.id, book_id, book_id]
  };

  sql += ` FROM books
          LEFT JOIN categories ON books.category_id = categories.category_id
          WHERE books.id = ?`
  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results[0]) {
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });
};

module.exports = {
  allBooks,
  BookDetail,
};