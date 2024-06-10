INSERT INTO cartItems (book_id, quantity, user_id)
VALUES (16, 1, 1);
-- 장바구니 담기

SELECT cartItems.id, book_id, title, summary, quantity, price  FROM cartItems 
LEFT JOIN books
ON cartItems.book_id = books.id
WHERE user_id = 2;
-- cartItems의 book_id를 활용해 books 테이블에서 원하는 정보 조회

DELETE FROM cartItems WHERE id = 1;

SELECT * FROM Bookshop.cartItems
WHERE user_id = 2
AND id IN (3, 4);
-- 