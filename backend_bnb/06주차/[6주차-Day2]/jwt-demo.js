const jwt = require('jsonwebtoken')
require('dotenv').config()

const token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);

var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
