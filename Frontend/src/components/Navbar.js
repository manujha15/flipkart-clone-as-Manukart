import React from "react";
import { Link } from "react-router-dom"; // Import for navigation
import "../styles/Navbar.css"; // Ensure this file exists

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">ManuKart</h1>

            {/* Search Bar */}
            <input type="text" placeholder="Search for Products..." className="search-bar" />

            {/* Right Side Buttons */}
            <div className="nav-buttons">
                <Link to="/login" className="nav-button">Login</Link>
                <Link to="/signup" className="nav-button">Signup</Link>
                <Link to="/cart" className="nav-button">🛒 Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;
