import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Information = () => {

    const cardDescription = {
        description: "",
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white'>
            <InfoCard img={clock} cardTitle="Opening Hours" cardBg="bg-gradient-to-r from-secondary to-primary" cardText="We are open 7 days." />
            <InfoCard img={marker}  cardTitle="Visit Our Locations" cardBg="bg-accent" cardText="We have more than 100 office in Bangladesh" />
            <InfoCard img={phone} cardTitle="Contact Us Now" cardBg="bg-gradient-to-r from-secondary to-primary" cardText="You can Contact us 24/7." />
        </div>
    );
};

export default Information;