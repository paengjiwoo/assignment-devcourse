// Node.js, express
const express = require('express');
const router = express.Router();

router.use(express.json())

// 숙소 정보를 저장할 db
let db = []
let id = 0

// 숙소 등록 , 호스트 별 숙소 전체 조회
router.route('/')
// body : { homeTitle, userId }
.post((req, res) => {
    if (req.body.homeTitle) {
        // userId가 등록된 회원의 것인지 확인하느 과정 필요 (현재는 생략)
        db.push({
            id : id++,
            ...req.body
        })
        res.status(201).send(`${req.body.homeTitle}이(가) 성공적으로 등록되었습니다!`)
    } else {
        res.status(400).send('숙소 정보를 다시 확인해주세요!')
    }
})
.get((req, res) => {
    let { userId } = req.body
    // userId가 등록된 회원의 것인지 확인하느 과정 필요 (현재는 생략)
    
    if ( userId ) {
        const rooms = db.filter(a => a.userId === userId)
        if (rooms.length) {
            res.status(200).json(rooms)
        } else {
            NotFoundRooms(res)
        }
    } else {
        res.status(404).json({
            message : '로그인이 필요합니다.'
        })
    }
})


// 숙소 정보 수정 , 숙소 삭제 , 숙소 개별 조회
router.route('/:id')
.put((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    const room = db.find(a => a.id === id)
    if (room) {
        room.homeTitle = req.body.homeTitle
        db.splice(id, 1, room)
        res.status(200).json({
            message : `${req.body.homeTitle}(으)로 숙소명이 변경되었습니다.`
        })
    } else {
        NotFoundRooms(res)
    }
})
.delete((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    const room = db.find(a => a.id === id)
    if (room) {
        db.splice(id, 1, '')
        res.status(200).json({
            message : '숙소가 정상적으로 삭제 완료되었습니다.'
        })
    } else {
        NotFoundRooms(res)
    }
})
.get((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    const room = db.find(a => a.id === id)
    if (room) {
        console.log(room)
        res.status(200).json(room)
    } else {
        NotFoundRooms(res)
    }
})

const NotFoundRooms = (res) => {
    res.status(404).json({
        message : "숙소 정보를 찾을 수 없습니다."
    })
}

module.exports = router