// Node.js, express
const express = require('express');
const app = express();

app.listen(8888);

let id = 1

// Map 객체를 통해 airbnb host 정보 DB 생성 
let hosts = [
    {
        id : id++,
        hostName : 'Cake',
        grade : '4.96',
        superHost : true,
        review : 70
    },
    {
        id : id++,
        hostName : 'Chanee',
        grade : '4.8',
        superHost : false,
        review : 60
    },
    {
        id : id++,
        hostName : 'Terence',
        grade : '4.95',
        superHost : true,
        review : 473
    }
]

// ------------------------------
// REST API 설계
// host 전체 조회
app.get('/hosts', function (req, res) {
    if (hosts.length) {
        res.status(200).json(hosts)
    } else {
        res.status(404).send('조회할 유튜버가 없습니다.')
    } 
})

// host 개별 조회
app.get('/host/:id', function (req, res) {
    let hostId = req.params.id
    hostId = parseInt(hostId)

    const host = hosts.find(a => a.id === hostId)
    if (!host) {
        // 등록되지 않은 host id 들어올 경우 예외처리
        res.status(404).send('해당 host가 존재하지 않습니다.')
    } else {
        res.status(200).json(host)
    }
})

// 새로운 host 등록
app.use(express.json())
app.post('/host', (req, res) => {
    const hostName = req.body.hostName
    if (hostName) {
        hosts.push({
            id : id++,
            ...req.body
        })
        // 201 Created
        res.status(201).send(`Hello, ${hostName} !`)
    } else {
        // 400 Bad Request 잘못된 요청 구문
        res.status(400).send('요청 값을 다시 확인해주세요.')
    }
})

// 등록된 host 삭제
app.delete('/host/:id', function (req, res) {
    let hostId = req.params.id
    hostId = parseInt(hostId)
    
    const host = hosts.find(a => a.id === hostId)
    if (!host) {
        // 등록되지 않은 host id 들어올 경우 예외처리
        res.status(404).send('해당 host가 존재하지 않습니다.')
    } else {
        const name = host.hostName
        hosts.splice(hostId - 1, 1)
        res.status(200).send(`Goodbye, ${name}`)
    }
})

// 전체 host 삭제
app.delete('/hosts', function (req, res) {
    if (hosts.length > 0) {
        hosts = []
        res.status(200).send('전체 host 삭제 완료!')
    } else {
        // 삭제할 host가 DB에 존재하지 않을 경우 알림
        res.status(404).send('삭제할 host가 존재하지 않습니다.')
    }
})

// host 정보 수정 요청
app.put('/host/:id', function (req, res) {
    let hostId = req.params.id
    hostId = parseInt(hostId)
    
    let host = hosts.find(a => a.id === hostId)
    if (!host) {
        res.status(404).send('해당 host가 존재하지 않습니다.')
    } else {
        host.hostName = req.body.hostName
        hosts.splice(hostId - 1, 1, host)
        res.status(200).send(`host명이 ${host.hostName}로 변경되었습니다.`)
    }
})