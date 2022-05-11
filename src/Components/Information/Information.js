import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import quote from "../../assets/icons/quote.svg";

const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 px-8 text-white'>
            <InfoCard img={clock} />
            <InfoCard img={marker} />
            <InfoCard img={phone} />
        </div>
    );
};

export default Information;