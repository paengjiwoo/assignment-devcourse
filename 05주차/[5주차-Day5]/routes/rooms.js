// Node.js, express
const express = require('express')
const router = express.Router()
const conn = require('../db')

router.use(express.json())

// 숙소 정보를 저장할 db
let db = []
let id = 0

// 숙소 등록, 호스트 별 숙소 전체 조회
router.route('/')
.post((req, res) => {
    const {title, description, img, location, personnel, userId} = req.body
    if (title && description && location && personnel && userId) {
        conn.query(
            'INSERT INTO `rooms` (title, description, img, location, personnel, userId) VALUES (?, ?, ?, ?, ?, ?)', 
            [ title, description, img, location, personnel, userId ],
            function(err, results) {
                res.status(201).json({
                    message : `${results[0].title}의 등록이 완료되었습니다!`,
                    results: results
                })
            }
        )
    } else {
        res.status(400).send('숙소 정보 입력 내역을 다시 확인해주세요!')
    }

})
.get((req, res) => {
    let { userId } = req.body
    
    if ( userId ) {
        conn.query(
            'SELECT * FROM `rooms` WHERE userId = ?', userId,
            function (err, results, fields) {
                if (results.length) {
                    res.status(200).json(results)
                } else {
                    NotFoundRooms(res)
                }
            }
        )
    } else {
        res.status(404).json({
            message : '로그인이 필요합니다.'
        })
    }
})


// 숙소 정보 수정 , 숙소 삭제 , 숙소 개별 조회
router.route('/:id')
.put((req, res) => {
    const { id } = req.params
    id = parseInt(id)

    const { title } = req.body
    conn.query(
        'UPDATE `rooms` SET title = ? WHERE id = ?', [title, id], 
        function(err, results) {
            res.status(201).json({
                message : `${title} 숙소의 정보 변경이 완료되었습니다!`,
                results: results
            })
        }
    )
})
.delete((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    conn.query(
        'DELETE FROM `rooms` WHERE id = ?', id,
        function (err, results, fields) {
            res.status(200).json({
                results : results,
                message : `${results[0].title} 숙소 삭제가 완료되었습니다.`
            })
        }
    )
})
.get((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    conn.query(
        'SELECT * FROM `rooms` WHERE id = ?', id,
        function (err, results, fields) {
            if (results.length) {
                res.status(200).json(results)
            } else {
                NotFoundRooms(res)
            }
        }
    )
})

const NotFoundRooms = (res) => {
    res.status(404).json({
        message : "숙소 정보를 찾을 수 없습니다."
    })
}

module.exports = router