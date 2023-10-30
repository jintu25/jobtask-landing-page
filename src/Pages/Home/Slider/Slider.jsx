import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/img/image1.png";
import slide2 from "../../../assets/img/image2.png";
import slide3 from "../../../assets/img/image4.png";
import slide4 from "../../../assets/img/image5.png";
import slide5 from "../../../assets/img/image6.png";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// -------- use swiper js for multi carousel slider use --------- 
const Slider = () => {
  return (
    <div className="max-w-screen-xl m-auto py-20 ">
      <>
  <Swiper
    slidesPerView={1}
    spaceBetween={20}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true} // Enables infinite loop
    breakpoints={{
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.20": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }}
    modules={[Autoplay, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div className="flex justify-center items-center">
        <img src={slide1} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex justify-center items-center">
        <img src={slide2} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex justify-center items-center">
        <img src={slide3} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex justify-center items-center">
        <img src={slide4} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex justify-center items-center">
        <img src={slide5} alt="" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex justify-center items-center">
        <img src={slide1} alt="" />
      </div>
    </SwiperSlide>
  </Swiper>
</>
    </div>
  );
};

export default Slider;
