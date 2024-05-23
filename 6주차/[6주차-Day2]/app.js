const express = require('express')
const app = express()
require('dotenv').config()

// 포트 설정
app.listen(process.env.PORT)

const userRouter = require('./routes/users')
const roomRouter = require('./routes/rooms')

app.use('/', userRouter)
app.use('/rooms', roomRouter)