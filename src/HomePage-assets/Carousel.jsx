import React from "react";

// import Swiper JS & Navigatiom
import Swiper, { Navigation } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  const swiper = new Swiper(".swiper.one", {
    observer: true,
    observeParents: true,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 400,
    spaceBetween: 100,
  });

  return (
    <div className='swiper one'>
      <div className='swiper-wrapper'>
        {/* Slides  */}
        <div className='swiper-slide'>
          <img alt='' src='https://i.ibb.co/2sMdBT1/carousel-img-1.jpg' />
        </div>
        <div className='swiper-slide'>
          <img alt='' src='https://i.ibb.co/W3dqdGg/carousel-img-2.jpg' />
        </div>
        <div className='swiper-slide'>
          <img alt='' src='https://i.ibb.co/17xmkHB/carousel-img-3.jpg' />
        </div>
        <div className='swiper-slide'>
          <img alt='' src='https://i.ibb.co/jHKVPTn/carousel-img-4.jpg' />
        </div>
      </div>
      {/* Navigation */}
      <div
        className='swiper-button-prev'
        style={{
          color: "#353935",
          padding: "0 20px",
          position: "absolute",
          top: "175px",
        }}></div>
      <div
        className='swiper-button-next'
        style={{
          color: "#353935",
          padding: "0 20px",
          position: "absolute",
          top: "175px",
        }}></div>
    </div>
  );
}

export default Carousel;
