const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

// 📌 Create a New Transaction
router.post("/create", async (req, res) => {
    try {
        const { userId, amount, paymentMethod } = req.body;

        const transaction = new Transaction({
            userId,
            amount,
            paymentMethod
        });

        await transaction.save();
        res.status(201).json({ success: true, message: "Transaction Created!", transaction });
    } catch (error) {
        res.status(500).json({ success: false, message: "Transaction Failed!", error });
    }
});

// 📌 Get User Transactions
router.get("/user/:userId", async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });
        res.status(200).json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching transactions", error });
    }
});

module.exports = router;
