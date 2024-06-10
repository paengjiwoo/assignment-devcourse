const express = require('express');
const router = express.Router();

router.use(express.json());
// express 환경에서 JSON 형식의 req 본문을
// 자동으로 js 객체 파싱하는 미들웨어를 라우터에 적용
// 해당 미들웨어 적용하지 않을 경우 요청 본문 문자열 형태

router.post('/join', (req, res) => {

});

router.post('/login', (req, res) => {

});

router.post('/reset', (req, res) => {

});

router.put('/reset', (req, res) => {

});

module.exports = router;