const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
});

module.exports = mongoose.model("Cart", CartSchema);
