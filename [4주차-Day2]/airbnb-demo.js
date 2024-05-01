// Node.js, express
const express = require('express');
const app = express();

app.listen(8888);

// Map 객체를 통해 airbnb host 정보 db 생성 
let hosts = [
    {
        hostName : 'Cake',
        grade : '4.96',
        superHost : true,
        review : 70
    },
    {
        hostName : 'Chanee',
        grade : '4.8',
        superHost : false,
        review : 60
    },
    {
        hostName : 'Terence',
        grade : '4.95',
        superHost : true,
        review : 473
    }
]

let db = new Map();
let id = 1
hosts.forEach((host) => {
    db.set(id++, host);
});

// ------------------------------
// REST API 설계
// host 전체 조회
app.get('/hosts', function (req, res) {
    let hosts = []
    db.forEach((host) => {
        hosts.push(host)
    })
    res.json(hosts)
})

// host 개별 조회
app.get('/host/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    const host = db.get(id)
    if (!host) {
        // 등록되지 않은 host id 들어올 경우 예외처리
        res.json({
            message : '해당 host가 존재하지 않습니다.'
        })
    } else {
        res.json(host)
    }ß
})

// 새로운 host 등록
app.use(express.json())
app.post('/host', (req, res) => {
    db.set(id++, req.body)
    res.json({
        message : `Hello, ${db.get(id - 1).hostName} !`
    })
})

// 등록된 host 삭제
app.delete('/host/:id', function (req, res) {
    let { id } = req.params
    id = parseInt(id)
    
    let message = ''
    const host = db.get(id)
    if (!host) {
        // 등록되지 않은 host id 들어올 경우 예외처리
        message = '해당 host가 존재하지 않습니다.'
    } else {
        const name = host.hostName
        db.delete(id)
        message = `Goodbye, ${name}`
    }
    res.json(message)
})

// 전체 host 삭제
app.delete('/hosts', function (req, res) {
    let message = ''
    if (db.size > 0) {
        db.clear();
        message = '전체 host 삭제 완료!'
    } else {
        // 삭제할 host가 db에 존재하지 않을 경우 알림
        message = '삭제할 host가 존재하지 않습니다.'
    }
    res.json(message)
})

// host 정보 수정 요청
app.put('/host/:id', function (req, res) {
    let { id } = req.params
    id = parseInt(id)
    console.log(id)
    
    let temp = ''
    let message = ''
    let host = db.get(id)
    if (!host) {
        message = '해당 host가 존재하지 않습니다.'
    } else {
        temp = host.hostName
        host.hostName = req.body.hostName
        db.set(id, host)
        message = `host명이 ${temp}로 변경되었습니다.`
    }
    res.json(message)
})