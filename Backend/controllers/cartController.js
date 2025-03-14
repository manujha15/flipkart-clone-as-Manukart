const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, products: [] });
  }
  cart.products.push({ productId, quantity });
  await cart.save();
  res.json({ message: "Product added to cart" });
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate("products.productId");
  res.json(cart);
};
