-- books 테이블과 categories 테이블 join

SELECT * FROM books
LEFT JOIN categories ON books.category_id = categories.id;;
-- 전체 도서 조회

SELECT * FROM books
LEFT JOIN categories ON books.category_id = categories.id
WHERE books.id = 16;
-- 개별 도서 조회

SELECT DATE_SUB(NOW(), INTERVAL 1 MONTH);
SELECT DATE_ADD(NOW(), INTERVAL 1 MONTH);
-- SQL로 시간 범위 구하기

SELECT * FROM books WHERE pub_date 
BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW();
-- 한달 이내 신간 조회

SELECT * FROM books LIMIT 2 OFFSET 0;
SELECT * FROM books LIMIT 2, 0;
-- 0번째부터 데이터를 2개씩 조회
-- LIMIT : 출력할 행의 수
-- OFFSET : 시작 지점 