// Node.js, express
const express = require('express');
const app = express();

app.listen(8888);

// airbnb host 정보 
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
    res.json(db)
})

// host 개별 조회
app.get('/host/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    const host = db.get(id)
    if (host == undefined) {
        res.json({
            message : "해당 호스트가 존재하지 않습니다."
        })
    } else {
        res.json(host)
    }
})

// 새로운 host 등록
app.use(express.json())
app.post('/host', (req, res) => {
    db.set(id++, req.body)
    res.json({
        message : `${db.get(id - 1).hostName} 님, 등록을 환영합니다!`
    })
})