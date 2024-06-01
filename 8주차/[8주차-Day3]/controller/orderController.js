const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const postOrder = (req, res) => {
  const { items, delivery, totalQuantity, totalPrice, userId, firstBookTitle } = req.body;

  let deliveryId = 3;
  let orderId = 4;

  // delivery 테이블에 주문자 정보 저장
  let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)`;
  let values = [delivery.address, delivery.receiver, delivery.contact];


  // order 테이블에 delivery_id 필요하므로,
  // delivery 테이블 저장 이후 orders 정보 저장
  sql = `INSERT INTO Bookshop.orders (delivery_id, book_title, total_price, total_quantity, user_id) 
          VALUES (?, ?, ?, ?, ?)`;
  values = [deliveryId, firstBookTitle, totalPrice, totalQuantity, userId];


  // orderedBook 테이블에는 delivery_id, order_id 모두 필요하므로
  // delivery 테이블과 order 테이블 insert가 모두 끝난 후 insert
  sql = `INSERT INTO Bookshop.orderedBook (order_id, book_id, quantity) VALUES ?`;
  values = [];
  items.forEach(item => values.push([orderId, item.book_id, item.quantity]));
  conn.query(sql, [values], (err, results) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

const getOrders = (req, res) => {

};

const orderDetail = (req, res) => {

};

module.exports = { postOrder, getOrders, orderDetail }