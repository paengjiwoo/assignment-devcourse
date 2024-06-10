const connect = require('../mariadb');
const mariadb = require('mysql2/promise');
const { StatusCodes } = require('http-status-codes');
const ensureAuthorization = require('../auth.js');
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

const postOrder = async (req, res) => {
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
    const conn = await mariadb.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'root',
      database: 'Bookshop',
      dateStrings: true
    });

    const { items, delivery, totalQuantity, totalPrice, firstBookTitle } = req.body;

    let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
    let values = [delivery.address, delivery.receiver, delivery.contact];
    let [results] = await conn.execute(sql, values)
    if (results.affectedRows) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message : "주소 입력이 잘못되었습니다."
      });
    }
    let deliveryId = results.insertId;

    sql = `INSERT INTO Bookshop.orders (delivery_id, book_title, total_price, total_quantity, user_id) 
            VALUES (?, ?, ?, ?, ?)`;
    values = [deliveryId, firstBookTitle, totalPrice, totalQuantity, authorization.id];
    [results] = await conn.execute(sql, values);
    if (results.affectedRows) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message : "주문 정보 등록이 잘못되었습니다."
      });
    }
    let orderId = results.insertId;

    sql = `INSERT INTO Bookshop.orderedBook (order_id, book_id, quantity) VALUES ?`;
    values = [];
    let cartIds = [];
    items.forEach(item =>  {
      values.push([orderId, item.book_id, item.quantity]);
      cartIds.push(item.cart_id);
    });
    [results] = await conn.query(sql, [values]);
    if (results.affectedRows) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message : "주문 등록이 잘못되었습니다."
      });
    }

    values = cartIds;
    [results] = await deleteCartItems(conn, values);

    return res.status(StatusCodes.CREATED).json(results);
  };
};

const deleteCartItems = async (conn, values) => {
  let sql = `DELETE FROM cartItems WHERE id IN (?)`;

  let res = await conn.query(sql, [values]);
  return res;
};

const getOrders = (req, res) => {
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
    let sql = `SELECT orders.id, book_title, total_quantity, total_price, created_at,
                address, receiver, contact
                FROM orders LEFT JOIN delivery
                ON orders.delivery_id = delivery.id`;
    connect.query(sql, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  };
};

const orderDetail = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

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
    let sql = `SELECT book_id, title, author, price, quantity
                FROM orderedBook LEFT JOIN books
                ON orderedBook.book_id = books.id
                WHERE order_id = ?`;
    connect.query(sql, id, (err, results) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  };
};

module.exports = { postOrder, getOrders, orderDetail }