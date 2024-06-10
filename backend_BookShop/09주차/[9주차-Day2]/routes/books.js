const express = require('express');
const router = express.Router();
const {
  allBooks,
  BookDetail,
} = require('../controller/bookController');

router.use(express.json());

router.get('/', allBooks);
router.get('/:id', BookDetail);

module.exports = router;