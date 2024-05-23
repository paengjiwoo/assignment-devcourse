const express = require('express')
const router = express.Router()
const conn = require('../db')

router.use(express.json())

// 회원 가입
router.post('/join', function (req, res) {
    const { email, name, password, contact } = req.body

    if (email && name && password && contact) {
        conn.query(
            'INSERT INTO `users` (email, name, password, contact) VALUES (?, ?, ?, ?)', 
            [ email, name, password, contact],
            function(err, results) {
                res.status(201).json({
                    message : `${results[0].name}님, 가입을 환영합니다!`,
                    results: results
                })
            }
        )
    } else {
        res.status(400).json({
            message : '입력 값을 다시 확인해주세요!'
        })   
    }
})

// 로그인
router.post('/login', function (req, res) {
    const { email, password } = req.body

    conn.query('SELECT * FROM `users` WHERE email = ?', email,
        function (err, results, fields) {
            if (results.length && password === results[0].password) {
                res.status(200).json(results)
            } else {
                res.status(404).json({
                    message : '이메일 또는 비밀번호가 잘못되었습니다.'
                })
            }
        }
    )
})

// 회원 개별 조회
router.get('/user', function (req, res) {
    const { email } = req.body

    conn.query(
        'SELECT * FROM `users` WHERE email = ?', email,
        function (err, results, fields) {
            if (results.length > 0) {
                res.status(200).json(results)
            } else {
                res.status(404).json({
                    message : '회원 정보가 없습니다.'
                })
            }
        }
    )
})

// 회원 탈퇴
router.delete('/user', function (req, res) {
    const { email } = req.body

    conn.query(
        'DELETE FROM `users` WHERE email = ?', email,
        function (err, results, fields) {
            res.status(200).json({
                results : results,
                message : `${email}님의 탈퇴가 완료되었습니다.`
            })
        }
    )
})

module.exports = router