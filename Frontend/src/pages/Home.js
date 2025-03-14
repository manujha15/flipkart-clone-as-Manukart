import React, { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "../pages/Transaction"; // ✅ Ensure correct path
import Categories from "../pages/categories";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

import "../styles/Home.css"; // ✅ Ensure this file exists

const Home = () => {
    const [products, setProducts] = useState([]);
    const userId = "USER_ID_FROM_AUTH"; // Replace with actual user ID from authentication

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/products"); // ✅ Ensure correct backend URL
            setProducts(res.data.products);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    return (
        <div className="home-container">
            {/* 🔹 Navbar */}
            <Navbar/>

            {/* 🔹 Banner */}
            <Banner/>

            {/* 🔹 Categories */}
            <Categories />

            {/* 🔹 Products List */}
            <ProductList/>
        

            {/* 🔹 Transaction Component */}
            <Transaction userId={userId} />
        </div>
    );
};

export default Home;

