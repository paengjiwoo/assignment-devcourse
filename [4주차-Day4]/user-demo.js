const express = require('express');
const app = express();

app.listen(8888);
app.use(express.json());

let id = 0;

let db = [{
    id : id++,
    userId : 'tobie',
    password : 1234,
    name : 'tobtob'
}]

// 회원 가입
app.post('/join', function (req, res) {
    if (req.body) {
        db.push({
            id : id++,
            ...req.body
        })
        res.status(201).send(`${req.body.name}님, 가입을 환영합니다!`)
    } else {
        res.status(400).send('입력 값을 다시 확인해주세요!')
    }
})

// 로그인
app.post('/login', function (req, res) {
    const { userId, password } = req.body
    // userId가 db에 등록되어 있는지 확인
    const user = db.find(a => a.userId === userId)
    if (user) {
        // 해당 회원이 존재하는 경우, password가 일치하는지 확인
        if (user.password === password) {
            res.status(200).send(`${user.name}님, 환영합니다!`)
        } else {
            res.status(401).send(`비밀번호가 틀렸습니다.`)
        }
    } else {
        res.status(401).send('존재하지 않는 ID입니다.')
    }
})

// 회원 개별 조회
app.get('/user/:id', function (req, res) {
    const paramId = parseInt(req.params.id)
    const user = db.find(a => a.id === paramId)
    if (user) {
        res.status(200).json({
            userId : user.userId,
            name : user.name
        })
    } else {
        res.status(404).send('회원 정보가 없습니다.')
    }
})

// 회원 탈퇴
app.delete('/user/:id', function (req, res) {
    const paramId = parseInt(req.params.id)
    const user = db.find(a => a.id === paramId)
    if (user) {
        db.splice(userId, 1, '')
        res.status(200).send(`${user.name}님의 탈퇴가 완료되었습니다.`)
    } else {
        db.status(404).send('회원 정보가 없습니다.')
    }
})