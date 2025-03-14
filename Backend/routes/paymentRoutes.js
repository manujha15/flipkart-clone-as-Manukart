const express = require("express");
const { createOrder, verifyPayment, getTransactions } = require("../controllers/paymentController");

const router = express.Router();

router.post("/order", createOrder);
router.post("/verify", verifyPayment);
router.get("/transactions/:userId", getTransactions);

module.exports = router;
