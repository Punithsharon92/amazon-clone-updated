/* eslint-disable no-unused-vars */

import React from "react";
// core version + navigation, pagination modules:
import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function AdBoxTypeThree(props) {
  const swipertwo = new Swiper(".swiper.two", {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    loop: false,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 400,
    spaceBetween: 10,
  });
  return (
    <div className='adBoxThree__container'>
      <div className='adBox__header'>
        Echo dot with Alexa | Music,news & more
        <p> see all offers...</p>
      </div>

      <div className='adBoxThree__body'>
        <div className='swiper two '>
          <div className='swiper-wrapper'>
            {props.image.map((image) => {
              return (
                <div className='swiper-slide'>
                  <img alt='' src={image} />
                </div>
              );
            })}

            {/* <div className='swiper-slide'>
              <img alt='' src={props.image[0]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[1]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[2]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[3]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[4]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[5]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[6]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[7]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[8]} />
            </div>
            <div className='swiper-slide'>
              <img alt='' src={props.image[9]} />
            </div> */}
          </div>

          <div
            className='swiper-button-prev'
            style={{
              color: "grey",
              padding: "0 20px",
            }}></div>
          <div
            className='swiper-button-next'
            style={{
              color: "grey",
              padding: "0 20px",
            }}></div>
        </div>
      </div>
    </div>
  );
}

export default AdBoxTypeThree;
