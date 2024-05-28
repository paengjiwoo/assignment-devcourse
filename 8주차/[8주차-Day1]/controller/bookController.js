const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const allBooks = (req, res) => {
  let { category_id, news, limit, currentPage } = req.query;

  // limit 만큼 데이터 출력할 시작지점
  let offset = parseInt(limit) * (parseInt(currentPage) - 1)

  let sql = `SELECT *, (SELECT COUNT(*) 
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
      return res.status(StatusCodes.OK).json(results);
    } else {
      return res.status(StatusCodes.NOT_FOUND).end();
    }
  });
};

const BookDetail = (req, res) => {
  let { user_id } = req.body;
  let book_id = parseInt(req.params.id);

  let sql = `SELECT *, (SELECT COUNT(*) 
                        FROM likes 
                        WHERE liked_book_id = books.id) AS likes,
                        (SELECT EXISTS 
                          (SELECT * FROM likes 
                          WHERE user_id = ? AND liked_book_id = ?)) AS liked
              FROM books
              LEFT JOIN categories ON books.category_id = categories.category_id
              WHERE books.id = ?`;

  let values = [user_id, book_id, book_id]
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