import React from "react";
import "./Home.css";
import heroImg from "../../../image/hero-img.png";
import Sliders from "../Sliders/Sliders";

const Home = () => {
  return (
    <div>
        {/* Hero Area */}
      <div className="container-fluid hero-area">
        <div className="container">
          <div className="row py-5 justify-content-between align-items-center">
            <div className="col-12 col-lg-6 hero-text">
              <h1>WE PROUDLY TEACHING ONLINE COURSES WITH ONLINE EXPERTS.</h1>
              <button className='hero-btn'>Get Started</button>
            </div>
            <div className="d-none d-lg-block col-lg-6 text-center">
              <img src={heroImg} className="hero-img img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
   <Sliders></Sliders>


    </div>
  );
};

export default Home;
