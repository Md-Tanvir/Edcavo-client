import React from "react";
import about from '../../image/about.png'

const About = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center">About Us</h1>
      <div className='border-green mx-auto'></div>
      <div className="row align-items-center justify-content-between my-5">
        <div className="col-12 col-md-5" data-aos="fade-left">
          <h4>ABOUT EDUCAVO</h4>
          <h2>Welcome to The Educavo Online Learning</h2>
          <p>Recogizing the need is the primary than we expected Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus, Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua enims ad minim. Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor. Lorem ipsum dolor sit amet</p>
        </div>
        <div className="col-12 col-md-6 text-center" data-aos="fade-right">
            <img src={about} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
