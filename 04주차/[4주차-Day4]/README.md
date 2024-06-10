# 4주차_Day4
Node.js express로 REST API 만들기

## 배운 내용
- user-demo
    - 로그인 기능 추가 및 예외처리
- room-demo 추가
    - 숙소 등록 api 추가
    - 숙소 정보 수정 api 추가
    - 숙소 삭제 api 추가
    - 숙소 개별 및 전체 조회 api 추가

## 오류 해결
```
[ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
```
서버가 클라이언트에 둘 이상의 응답을 보내려 하면 해당 오류가 발생합니다.

```js
const express = require('express');
const app = express();

app.get('/test', function (req, res) { 
    res.status(200).send('have a')
    res.status(200).send('good day')
})
```
해당 코드의 경우 응답을 두번 전송하고 있기에 오류가 발생합니다. 따라서 한번의 전송으로 수정해 오류를 해결할 수 있습니다.

```js
    res.send(200).send('good day')
```
위의 코드에서 이와 같은 오타가 났을때도 같은 에러가 발생하여 해결하였습니다.