const express = require('express')
const router = express.Router()
const conn = require('../db')
const { body, validationResult } = require('express-validator')

const jwt = require('jsonwebtoken')
require('dotenv').config()

router.use(express.json())

const validation = (req, res, next) => {
    const err = validationResult(req)

    if (err.isEmpty()) {
        return next()  
    } else {
        return res.status(400).json(err.array())
    }
}

// 회원 가입
router.post('/join', 
    [
        body('email').notEmpty().isString().isEmail().withMessage('정확한 이메일을 입력해주세요.'),
        body('password').notEmpty().isString().withMessage('비밀번호를 확인해주세요'),
        body('name').notEmpty().isString().withMessage('이름을 문자로 입력해주세요'),
        body('contact').notEmpty().isString().withMessage('연락처 확인을 확인해주세요'),
        validation
    ], 
    function (req, res, next) {
        const { email, name, password, contact } = req.body

        conn.query(
            'INSERT INTO `users` (email, name, password, contact) VALUES (?, ?, ?, ?)', 
            [ email, name, password, contact],
            function(err, results) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }
                res.status(201).json({
                    message : `${name}님, 가입을 환영합니다!`,
                    results: results
                })
            }
        )
    }
)

// 로그인
router.post('/login', 
    [
        body('email').notEmpty().isString().isEmail().withMessage('정확한 이메일을 입력해주세요.'),
        body('password').notEmpty().isString().withMessage('비밀번호를 확인해주세요'),
        validation,
    ],
    function (req, res) {
        const { email, password } = req.body

        conn.query('SELECT * FROM `users` WHERE email = ?', email,
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                if (results.length && password === results[0].password) {
                    // 토큰 생성
                    const token = jwt.sign({
                        email : results[0].email,
                        name: results[0].name
                    }, process.env.PRIVATE_KEY, {
                        expiresIn : "1h",
                        issuer: "paeng"
                    })
                    // 헤더에 토큰 담아 전송
                    res.cookie("token", token, { httpOnly: true })
                    res.status(200).json({
                        results: results,
                    })
                } else {
                    res.status(403).json({
                        message : '이메일 또는 비밀번호가 잘못되었습니다.',
                        results: results
                    })
                }
            }
        )
    }
)

// 회원 개별 조회
router.get('/user', 
    [
        body('email').notEmpty().isString().isEmail().withMessage('정확한 이메일을 입력해주세요.'),
        validation
    ],
    function (req, res) {
        const { email } = req.body

        conn.query(
            'SELECT * FROM `users` WHERE email = ?', email,
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                if (results.length > 0) {
                    res.status(200).json(results)
                } else {
                    res.status(404).json({
                        message : '회원 정보가 없습니다.'
                    })
                }
            }
        )
    }
)

// 회원 탈퇴
router.delete('/user', 
    [
        body('email').notEmpty().isString().isEmail().withMessage('정확한 이메일을 입력해주세요.'),
        validation
    ],
    function (req, res) {
        const { email } = req.body

        conn.query(
            'DELETE FROM `users` WHERE email = ?', email,
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                res.status(200).json({
                    results : results,
                    message : `${email}님의 탈퇴가 완료되었습니다.`
                })
            }
        )
    }
)

module.exports = router