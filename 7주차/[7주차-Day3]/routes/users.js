const express = require('express');
const router = express.Router();

const join = require('../controller/userController')

router.use(express.json());

router.post('/join', join);

router.post('/login', (req, res) => {

});

router.post('/reset', (req, res) => {

});

router.put('/reset', (req, res) => {

});

module.exports = router;