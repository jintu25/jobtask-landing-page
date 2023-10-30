import React, { useEffect, useState } from "react";
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
import { FaQuoteLeft } from "react-icons/fa";

// -------- use swiper js for multi carousel slider use --------- 
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="m-auto max-w-screen-xl py-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // When window width is >= 768px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center">
              <p className="text-6xl text-center flex justify-center text-slate-500">
                <FaQuoteLeft></FaQuoteLeft>
              </p>
              <h2 className="text-2xl font-semibold text-orange-700">
                {review.name}
              </h2>
              <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
