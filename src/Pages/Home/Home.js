import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Information from '../../Components/Information/Information';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <Services />
        </div>
    );
};

export default Home;