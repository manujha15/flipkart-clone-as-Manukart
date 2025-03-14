const Razorpay = require("razorpay");
const crypto = require("crypto");
const Transaction = require("../models/Transaction");
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// 💰 Create Payment Order
exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const options = { amount: amount * 100, currency: "INR", receipt: "order_rcptid_11" };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Verify Payment & Store Transaction
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, amount } = req.body;
    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === razorpay_signature) {
      const transaction = new Transaction({ userId, orderId: razorpay_order_id, paymentId: razorpay_payment_id, amount, status: "Success" });
      await transaction.save();
      res.json({ message: "Payment successful", transaction });
    } else {
      res.status(400).json({ error: "Invalid signature" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📜 Fetch User Transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
