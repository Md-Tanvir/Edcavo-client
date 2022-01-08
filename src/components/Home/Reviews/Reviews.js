import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";
import "./Review.css";
import { fetchReviews } from "../../../Redux/slices/reviewSlice";
import { useDispatch, useSelector } from "react-redux";

const Reviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);
  const reviews = useSelector((state) => state.reviews.allReviews);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="container py-5 mb-3">
      <h1 className="text-center mb-3">Our Students Says</h1>
      <div className='border-green mx-auto mb-5'></div>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="p-4 border review-body h-100">
            <h4 className="text-center">{review.name}</h4>
            <p>{review.text}</p>
            <h5 className="text-center">
              <Rating
                className="rating text-warning"
                emptySymbol="far fa-star  text-warning"
                fullSymbol="fas fa-star  text-warning"
                readonly
                initialRating={review.rating}
              ></Rating>
            </h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
