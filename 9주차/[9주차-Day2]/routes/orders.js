const express = require('express');
const router = express.Router();

const {
  postOrder, 
  getOrders, 
  orderDetail
} = require('../controller/orderController');

router.use(express.json());

// router.get('/selected', (req, res) => { });

// router.get('/expected', (req, res) => { });

router.post('/', postOrder);

router.get('/', getOrders);

router.get('/:id', orderDetail);

module.exports = router;