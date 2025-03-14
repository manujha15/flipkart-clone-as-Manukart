import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ProductList.css";

const products = [
  { id: 1, name: "Mobile", price: 75000, image: <img src="https://th.bing.com/th/id/R.52ad9c514798831dd7823757c808cb5c?rik=9p6Gx66mfytLeQ&riu=http%3a%2f%2feblogfa.com%2fwp-content%2fuploads%2f2014%2f01%2fphone-cell-htc-mobile.jpg&ehk=uEeRRQAPPCRrdl1iXvJRs%2budL%2fgwXMB812tb4fbhyjs%3d&risl=&pid=ImgRaw&r=0"/> },
  { id: 2, name: "Laptop", price: 65000, image: "/images/samsung.jpg" },
  { id: 3, name: "Makeup", price: 58000, image: "/images/oneplus.jpg" },
  { id: 4, name: "Womens Shoes", price: 7500, image: "/images/iphone.jpg" },
  { id: 5, name: "Men Shoes", price: 5000, image: "/images/samsung.jpg" },
  { id: 6, name: "Accessories", price: 1000,image: "/images/oneplus.jpg" },
  { id: 7, name: "Fashion", price: 1500, image: "/images/iphone.jpg" },
  { id: 8, name: "Trousers", price: 800, image: "/images/samsung.jpg" },
  { id: 9, name: "jeans", price: 580, image: "/images/oneplus.jpg" },
];

const ProductList = () => {
  const searchTerm = useSelector((state) => state.search?.searchTerm || ""); // ✅ Prevent undefined

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="product-slider">
      <h2>Featured Products</h2>
      <Slider {...settings}>
        {products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Slider>
    </div>
  );
};

export default ProductList;
