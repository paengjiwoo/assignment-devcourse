// Node.js, express
const express = require('express');
const app = express();

app.listen(8888);
app.use(express.json())

// 숙소 정보를 저장할 db
let db = []
let id = 0

// 숙소 등록
app.post('/become-a-host', function (req, res) {
    if (req.body.homeTitle) {
        db.push({
            id : id++,
            ...req.body
        })
        res.status(201).send(`${req.body.homeTitle}이(가) 성공적으로 등록되었습니다!`)
    } else {
        res.status(400).send('숙소 정보를 다시 확인해주세요!')
    }
})

// 숙소 정보 수정 , 숙소 삭제
app.route('/become-a-host/:id')
.put((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    const room = db.find(a => a.id === id)
    if (room) {
        room.homeTitle = req.body.homeTitle
        db.splice(id, 1, room)
        res.status(200).send(`${req.body.homeTitle}(으)로 숙소명이 변경되었습니다.`)
    } else {
        res.status(404).send('해당 숙소 정보를 찾을 수 없습니다.')
    }
})
.delete((req, res) => {
    let { id } = req.params
    id = parseInt(id)

    const room = db.find(a => a.id === id)
    if (room) {
        db.splice(id, 1, '')
        res.status(200).send('숙소가 정상적으로 삭제 완료되었습니다.')
    } else {
        res.status(404).send('해당 숙소가 존재하지 않습니다.')
    }
})

// 숙소 전체 조회
app.get('/rooms', (req, res) => {
    if (db.length) {
        res.status(200).json(db)
    } else {
        res.status(404).json({
            message : '숙소 정보가 없습니다.'
        })
    }
})

// 숙소 개별 조회
app.get('/rooms/:id', (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    const room = db.find(a => a.id === id)
    if (room) {
        console.log(room)
        res.status(200).json(room)
    } else {
        res.status(404).json({
            message : "해당하는 숙소의 정보를 찾을 수 없습니다."
        })
    }
})