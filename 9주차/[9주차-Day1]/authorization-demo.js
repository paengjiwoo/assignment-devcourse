const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
require('dotenv').config()

app.listen(8888);

// 토큰 발행
app.get('/issue-token', function (req, res) {
  const token = jwt.sign({foo : 'bar'}, process.env.PRIVATE_KEY);
  res.cookie("jwt", token, { httpOnly : true });
});

// 토큰 decode
app.get('decode-token', function (req, res) {
  let token = req.headers("authorization");
  const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
  res.send(decoded);
})
