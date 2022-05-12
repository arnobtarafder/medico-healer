import React from 'react';
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png"
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
  return (
    <div style={{
      background: `url(${bg})`
    }} className="hero min-h-screen">

      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl hidden lg:block" alt="" />
       
        <div className='px-auto lg:pr-24'>
          <h1 className="text-5xl font-medium">Your New Smile Starts Here</h1>

          <p className="py-6">Book video call appointments with the country's most qualified specialist doctors, in their private chambers.</p>
          <PrimaryButton>Appointment Now</PrimaryButton>
        </div>
      </div>

    </div>
  );
};

export default Banner;