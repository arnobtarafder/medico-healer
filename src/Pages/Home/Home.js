import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Information from '../../Components/Information/Information';
import MakeAppointmentBanner from '../../Components/MakeAppointmentBanner/MakeAppointmentBanner';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <Services />
            <MakeAppointmentBanner />
        </div>
    );
};

export default Home;