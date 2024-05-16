// Node.js, express
const express = require('express')
const router = express.Router()
const conn = require('../db')
const { body, param, validationResult } = require('express-validator')

router.use(express.json())

const validation = (req, res, next) => {
    const err = validationResult(req)

    if (err.isEmpty()) {
        return next()  
    } else {
        // 에러가 발생하지 않으면 다음 함수로 진행되도록 작성
        return res.status(400).json(err.array())
    }
}

// 숙소 등록, 호스트 별 숙소 전체 조회
router.route('/')
.post(
    [
        body('userId').notEmpty().isInt().withMessage('숫자로 입력해주세요'), 
        body('title').notEmpty().isString().withMessage('숙소 이름을 문자로 입력해주세요'),
        body('location').notEmpty().isString().withMessage('숙소가 위치한 지역을 문자로 입력해주세요'),
        body('description').isString().withMessage('숙소 설명을 문자로 입력해주세요'),
        body('personnel').notEmpty().isInt().withMessage('인원 수를 숫자로 입력해주세요'),
        validation
    ],
    (req, res, next) => {
        const {title, description, img, location, personnel, userId} = req.body
        conn.query(
            'INSERT INTO `rooms` (title, description, img, location, personnel, userId) VALUES (?, ?, ?, ?, ?, ?)', 
            [ title, description, img, location, personnel, userId ],
            function(err, results) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }
                res.status(201).json({
                    message : `${title}의 등록이 완료되었습니다!`,
                    results: results
                })
            }
        )
    }
)
.get(
    [
        body('userId').notEmpty().isInt().withMessage('회원 정보를 숫자로 입력해주세요'),
        validation
    ],
    (req, res) => {
        let { userId } = req.body
        
        conn.query(
            'SELECT * FROM `rooms` WHERE userId = ?', userId,
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                if (results.length) {
                    res.status(200).json(results)
                } else {
                    NotFoundRooms(res)
                }
            }
        )
    }
)


// 숙소 정보 수정 , 숙소 삭제 , 숙소 개별 조회
router.route('/:id')
.put(
    [
        param('id').notEmpty().withMessage('숙소 id가 필요합니다.'),
        body('title').notEmpty().isString().withMessage('숙소 이름을 문자로 입력해주세요'),
        validation
    ],
    (req, res) => {
        let { id } = req.params
        id = parseInt(id)

        const { title } = req.body
        conn.query(
            'UPDATE `rooms` SET title = ? WHERE id = ?', [title, id], 
            function(err, results) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                if (results.affectedRows) {
                    res.status(201).json({
                        message : `${title} 숙소의 정보 변경이 완료되었습니다!`,
                        results: results
                    })
                } else {
                    NotFoundRooms(res)
                }
            }
        )
    }
)
.delete(
    [
        param('id').notEmpty().withMessage('숙소 id가 필요합니다.'),
        validation
    ],
    (req, res) => {
        let { id } = req.params
        id = parseInt(id)

        conn.query(
            'DELETE FROM `rooms` WHERE id = ?', id,
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }

                if (results.affectedRows) {
                    res.status(200).json({
                        results : results,
                        message : `숙소 삭제가 완료되었습니다.`
                    })
                } else {
                    NotFoundRooms(res)
                }
            }
        )
    }
)
.get(
    [
        param('id').notEmpty().withMessage('숙소 id가 필요합니다.'),
        validation
    ],
    (req, res) => {
        let { id } = req.params
        id = parseInt(id)

        conn.query(
            'SELECT * FROM `rooms` WHERE id = ?', id,
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    return res.status(400).end();
                }
                
                if (results.length) {
                    res.status(200).json(results)
                } else {
                    NotFoundRooms(res)
                }
            }
        )
    }
)

const NotFoundRooms = (res) => {
    res.status(404).json({
        message : "숙소 정보를 찾을 수 없습니다."
    })
}

module.exports = router