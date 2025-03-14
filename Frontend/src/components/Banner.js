import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css"; // Add styling here


const Banner = () => {
  const banners = [
    "https://th.bing.com/th/id/OIP.hgRUiz2ahjeRhtZJF-fRqQHaE7?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.d5MKvmzxXvu2rftm287MBgHaE7?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.3Hrg7xJU5YbW_Ac8J9gJ_QHaD1?w=340&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ];

  return (
    <div className="banner-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {banners.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Banner ${index + 1}`} className="banner-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
