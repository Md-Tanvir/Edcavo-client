import React from "react";
import "./Home.css";
import heroImg from "../../../image/hero-img.png";
import Sliders from "../Sliders/Sliders";
import Course from "../Course/Course";
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Area */}
      <div className="container-fluid hero-area">
        <div className="container">
          <div className="row py-5 justify-content-between align-items-center">
            <div className="col-12 col-lg-6 hero-text" data-aos="fade-left">
              <h1>WE PROUDLY TEACHING ONLINE COURSES WITH ONLINE EXPERTS.</h1>
              <Link to='/courses'>
                <button className="hero-btn">Get Started</button>
              </Link>
            </div>
            <div className="d-none d-lg-block col-lg-6 text-center" data-aos="fade-right">
              <img src={heroImg} className="hero-img img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Slider Area */}
      <Sliders></Sliders>
      {/* home course */}
      <Course></Course>
      {/* Offer section */}

      <div className="container py-5 d-flex justify-content-center">
        <div className="row offer-area" data-aos="fade-up">
          <div className="col-7">
            <h6>JOIN WITH US</h6>
            <h4>20% Offer Running - Join Today</h4>
          </div>
          <div className="col-5 text-center">
            <button className="hero-btn">Get Started</button>
          </div>
        </div>
      </div>
      
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
