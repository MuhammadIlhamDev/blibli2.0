import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Carousel.scss";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import imageSlider1 from "../../../assets/images/ImageSlider/image-slider1.jpg";
import imageSlider2 from "../../../assets/images/ImageSlider/image-slider2.jpg";
import imageSlider3 from "../../../assets/images/ImageSlider/image-slider3.jpg";
import imageSlider4 from "../../../assets/images/ImageSlider/image-slider4.jpg";
import imageSlider5 from "../../../assets/images/ImageSlider/image-slider5.jpg";
import imageSlider6 from "../../../assets/images/ImageSlider/image-slider6.jpg";
import imageSlider7 from "../../../assets/images/ImageSlider/image-slider7.jpg";

export default function App() {
  const images = [
    imageSlider1,
    imageSlider2,
    imageSlider3,
    imageSlider4,
    imageSlider5,
    imageSlider6,
    imageSlider7,
  ];

  const [bgImage, setBgImage] = useState(images[0]);

  const updateBackgroundImage = (index) => {
    setBgImage(images[index]);
  };

  useEffect(() => {
    setBgImage(images[0]);
  }, []);

  return (
    <div className="swiper-container">
      <div
        className="swiper-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => updateBackgroundImage(swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`imageSlider${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
