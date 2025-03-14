const express = require('express');
const router = express.Router();
const { getOrders } = require('../controllers/orderController'); // Ensure correct path

router.get('/orders', getOrders);

module.exports = router;
