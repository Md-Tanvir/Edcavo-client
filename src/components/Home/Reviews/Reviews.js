import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from "../../../image/1.png";
import s2 from "../../../image/2.png";
import s3 from "../../../image/3.png";
import s4 from "../../../image/4.png";
import s5 from "../../../image/5.png";

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="container py-5">
          <h1 className="text-center mb-5">Associated With</h1>
          <Slider {...settings}>
            <div className="d-flex justify-content-center">
              <img src={s1} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={s2} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={s3} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={s4} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <img src={s5} alt="" />
            </div>
          </Slider>
        </div>
    );
};

export default Reviews;