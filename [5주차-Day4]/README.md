# 5주차_Day4
Node.js express db연동

## 배운 내용
- MySQL workbench를 활용한 db 생성
    - GUI 방식의 db 생성
- express와 MySQL 연동
    - mysql2 라이브러리를 활용한 db 연결
- timezone 세팅
<br>

## db table
- rooms
![rooms_table](./assets/rooms_table.png)

- users
![users_table](./assets/users_table.png)

<br>

## timezone 세팅
```SQL
SET GLOBAL time_zone = 'Asia/Seoul'; --global

SET GLOBAL time_zone = 'Asia/Seoul'; --session

SELECT @@global.time_zone, @@session.time_zone; --check

```