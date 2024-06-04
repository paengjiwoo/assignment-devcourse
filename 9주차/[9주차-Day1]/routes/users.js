const express = require('express');
const router = express.Router();

const {
  join, 
  login, 
  requestPwdReset, 
  pwdReset

} = require('../controller/userController')

router.use(express.json());

router.post('/join', join);

router.post('/login', login);

router.post('/reset', requestPwdReset);

router.put('/reset', pwdReset);

module.exports = router;