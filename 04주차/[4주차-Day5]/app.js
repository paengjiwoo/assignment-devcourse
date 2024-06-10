const express = require('express');
const app = express();

// 포트 설정
app.listen(8888);

const userRouter = require('./routes/users')
const roomRouter = require('./routes/rooms')

app.use('/', userRouter)
app.use('/rooms', roomRouter)