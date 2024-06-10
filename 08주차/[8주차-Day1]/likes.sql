INSERT INTO likes (user_id, liked_book_id)
VALUES (1, 16);
-- 좋아요 추가

DELETE FROM likes WHERE user_id = 1 AND liked_book_id = 16;
-- 좋아요 삭제

SELECT COUNT(*) FROM likes WHERE liked_book_id = 18;
-- 개별 도서 좋아요 수 세기

SELECT *, (SELECT COUNT(*) 
			FROM likes 
			WHERE liked_book_id = books.id) AS likes 
FROM books;
-- 좋아요 개수 포함 books 테이블 조회

SELECT EXISTS 
(SELECT * FROM likes 
WHERE user_id = 2 AND liked_book_id = 18);
-- 해당하는 데이터 존재하는지 확인
