import React from 'react';
import './Home.css';
import heroImg from '../../../image/hero-img.png'

const Home = () => {
    return (
        <div>
            <div className="container-fluid hero-area">
                <div className="row py-5 align-items-center">
                    <div className="col-6 hero-text">
                        <h1>WE PROUDLY TEACHING ONLINE COURSES WITH ONLINE EXPERTS.</h1>
                    </div>
                    <div className="col-6">
                        <img src={heroImg} className='hero-img img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;