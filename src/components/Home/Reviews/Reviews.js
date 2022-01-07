import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";
import "./Review.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
      <h1 className="text-center mb-5">Our Students Says</h1>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="p-4 border review-body h-100">
            <h3 className="text-center">{review.name}</h3>
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
