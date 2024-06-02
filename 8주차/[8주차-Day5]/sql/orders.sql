INSERT INTO delivery (address, receiver, contact) 
VALUES ("서울시 서대문구", "홍길동", "010-1111-1111")
-- 배송 정보 저장

INSERT INTO Bookshop.orders (delivery_id, book_title, total_price, total_quantity, user_id) 
VALUES ((SELECT MAX(id) FROM delivery), "백과 사전", 100000, 2, 2);
-- 주문 정보 저장

INSERT INTO Bookshop.orderedBook (order_id, book_id, quantity) 
VALUES ((SELECT MAX(id) FROM orders), 20, 1);
-- 주문 도서 세부사항

DELETE FROM cartItems WHERE id IN [1, 2, 3];
-- cartItems 테이블에서 주문한 아이템 삭제