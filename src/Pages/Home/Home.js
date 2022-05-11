import React from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import Banner from '../../Components/Banner/Banner';
import Information from '../../Components/Information/Information';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;