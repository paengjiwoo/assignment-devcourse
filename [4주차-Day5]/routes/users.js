const express = require('express');
const router = express.Router();

router.use(express.json());

let db = [{
    userId : 'tobie',
    password : 1234,
    name : 'tobtob'
}]

// 회원 가입
// body : { userId, password, name }
router.post('/join', function (req, res) {
    if (req.body) {
        db.push({
            ...req.body
        })
        res.status(201).json({
            message : `${req.body.name}님, 가입을 환영합니다!`
        })
    } else {
        res.status(400).json({
            message : '입력 값을 다시 확인해주세요!'
        })
    }
})

// 로그인
// body : { userId, password }
router.post('/login', function (req, res) {
    const { userId, password } = req.body
    // userId가 db에 등록되어 있는지 확인
    const user = db.find(a => a.userId === userId)
    if (user) {
        // 해당 회원이 존재하는 경우, password가 일치하는지 확인
        if (user.password === password) {
            res.status(200).json({
                message : `${user.name}님, 환영합니다!`
            })
        } else {
            res.status(400).json({
                message : `비밀번호가 틀렸습니다.`
            })
        }
    } else {
        res.status(404).send({
            message : '존재하지 않는 ID입니다.'
        })
    }
})

// 회원 개별 조회
router.get('/user', function (req, res) {
    const userId = req.body.userId
    const user = db.find(a => a.id === userId)
    if (user) {
        res.status(200).json({
            userId : user.userId,
            name : user.name
        })
    } else {
        notFoundUser(res)
    }
})

// 회원 탈퇴
router.delete('/user', function (req, res) {
    const userId = req.body.userId
    const user = db.find(a => a.id === userId)
    if (user) {
        db.splice(userId, 1, '')
        res.status(200).json({
            message : `${user.name}님의 탈퇴가 완료되었습니다.`
        })
    } else {
        notFoundUser(res)
    }
})

function notFoundUser(res) {
    res.status(404).json({
        message : '회원 정보가 없습니다.'
    })
}

module.exports = router