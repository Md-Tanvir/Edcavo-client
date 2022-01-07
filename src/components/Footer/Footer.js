import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 col-lg-3">
            <h2>About Us</h2>
            <p>
              We denounce with righteous indi gnation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of your moment,
              so blinded by desire those who fail weakness.
            </p>
          </div>
          <div className="col-md-6 col-12 col-lg-3">
            <h2>Address</h2>
            <p>374 William S Canning Blvd, River MA 2721, USA</p>
            <p>(+880)155-69569</p>
            <p>support@rstheme.com</p>
          </div>
          <div className="col-md-6 col-12 col-lg-3">
            <h2>Platform</h2>
            <p>Browse Library</p>
            <p>Library </p>
            <p>Partners</p>
            <p>News and Blogs</p>
            <p>FAQs</p>
            <p>Tutorials</p>
          </div>
          <div className="col-md-6 col-12 col-lg-3">
            <h2>Subscribe</h2>
            <div>
              <input className='input-footer' type="text" name="" id="" placeholder="Email Address" /> <br /> <br />
              <button className='btn btn-footer'>Submit</button>
            </div>
          </div>
        </div>
        <hr />
        <p className='mb-0 text-center py-3'>© 2020 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
