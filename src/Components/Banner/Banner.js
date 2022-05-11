import React from 'react';
import chair from "../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 background-banner-image">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">							Book video call appointments with the country's most qualified specialist doctors, in their private chambers.</p>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Appoinment Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;