import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products"); // Fake Store API se data fetch karega
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="product-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;



