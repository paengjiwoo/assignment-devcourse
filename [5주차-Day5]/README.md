# 5주차_Day5
Node.js express db 연동

# 배운 내용
- db.js 모듈화
    - module export 및 개별 파일에서 모듈 실행
    - 리팩토링 및 코드 정리
- 로직과 db 연결
    - users.js: 회원 관리 로직 
        - 회원 가입
        - 로그인
        - 회원 개별 조회
        - 회원 탈퇴
    - rooms.js: 숙소 정보 관리
        - 숙소 등록
        - 숙소 정보 수정
        - 숙소 정보 삭제
        - 숙소 개별 조회
        - 호스트 별 숙소 전체 조회

<br>

# 추가해야 할 부분
- post 요청 입력값의 유효성 검사 필요
- 숙소 정보 수정 api : 다양한 정보 수정에 대응하도록 수정 필요

<br>

# 에러
## 에러 상황
```          this.onResult(null, rows);
               ^

TypeError: this.onResult is not a function
    at /Users/paengjiwoo/Desktop/assignment-devcourse/[5주차-Day5]/node_modules/mysql2/lib/commands/query.js:90:16
    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)

Node.js v20.12.2
```
- 회원 가입 시, INSERT 시도하며 발생한 에러
- sql INSERT는 실행되었으나, 에러 찍힌 후 실행이 종료되었다.

## 에러 해결
```js
// 에러 해결 후 코드
// users.js

// 회원 가입
router.post('/join', function (req, res) {
    if (req.body) {
        const { email, name, password, contact } = req.body
        conn.query(
            'INSERT INTO `users` (email, name, password, contact) VALUES (?, ?, ?, ?)', 
            [ email, name, password, contact],
        );
        // 아래의 요청이 conn.query 내부에 존재해 발생한 문제였다.
        res.status(201).json({
            message : `${req.body.name}님, 가입을 환영합니다!`
        })
    } else {
        res.status(400).json({
            message : '입력 값을 다시 확인해주세요!'
        })
    }
})
```
- body에 넘어온 정보와 관련된 sql 요청을 보내는 conn.query 내부에 status code와 json 반환 로직이 들어있어 발생한 문제였다! 
- json 반환의 위치를 conn.query 요정 외부로 옮겨 문제를 해결하였다.