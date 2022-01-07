import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from "../../../image/1.png";
import s2 from "../../../image/2.png";
import s3 from "../../../image/3.png";
import s4 from "../../../image/4.png";
import s5 from "../../../image/5.png";
import Rating from "react-rating";

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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
      <h1 className="text-center mb-5">Our Students Says</h1>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className='p-3 border'>
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
